import { useEffect, useState } from "react";

const locationChangeEvent = "locationchange";

function notifyLocationChange() {
  window.dispatchEvent(new Event(locationChangeEvent));
}

export function navigateTo(href: string) {
  const nextUrl = new URL(href, window.location.origin);
  const nextPath = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;
  const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (nextPath === currentPath) {
    if (nextUrl.hash) {
      const target = document.getElementById(nextUrl.hash.slice(1));
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  }

  window.history.pushState({}, "", nextPath);
  notifyLocationChange();

  if (nextUrl.hash) {
    requestAnimationFrame(() => {
      const target = document.getElementById(nextUrl.hash.slice(1));
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
}

export function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const updatePathname = () => setPathname(window.location.pathname);

    window.addEventListener("popstate", updatePathname);
    window.addEventListener(locationChangeEvent, updatePathname);

    return () => {
      window.removeEventListener("popstate", updatePathname);
      window.removeEventListener(locationChangeEvent, updatePathname);
    };
  }, []);

  return pathname;
}

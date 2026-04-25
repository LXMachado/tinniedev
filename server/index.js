import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const indexHtml = path.join(distDir, "index.html");

const app = express();
const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || "0.0.0.0";
const siteOrigin = process.env.SITE_ORIGIN || "";
const enquiryWebhookUrl = process.env.ENQUIRY_WEBHOOK_URL || "";
const requestCounts = new Map();

app.disable("x-powered-by");
app.set("trust proxy", 1);

app.use(express.json({ limit: "32kb" }));

app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
});

app.use((req, res, next) => {
  if (!siteOrigin || req.method === "GET" || req.method === "HEAD") {
    next();
    return;
  }

  const origin = req.get("origin");
  if (!origin || origin === siteOrigin) {
    res.setHeader("Access-Control-Allow-Origin", siteOrigin);
    res.setHeader("Vary", "Origin");
    next();
    return;
  }

  res.status(403).json({ error: "Origin not allowed" });
});

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    service: "tinniedev-backend",
    timestamp: new Date().toISOString(),
  });
});

app.post("/api/enquiries", async (req, res) => {
  const ip = req.ip || "unknown";

  if (isRateLimited(ip)) {
    res.status(429).json({ error: "Too many requests. Please try again later." });
    return;
  }

  const parsed = parseEnquiry(req.body);
  if (!parsed.ok) {
    res.status(400).json({ error: parsed.error });
    return;
  }

  if (!enquiryWebhookUrl) {
    console.info("Validated enquiry received", {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      source: parsed.data.source,
      receivedAt: parsed.data.receivedAt,
    });
    res.status(202).json({
      ok: true,
      message: "Enquiry received.",
    });
    return;
  }

  try {
    const webhookResponse = await fetch(enquiryWebhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    if (!webhookResponse.ok) {
      throw new Error(`Webhook returned ${webhookResponse.status}`);
    }

    res.status(202).json({ ok: true, message: "Enquiry received." });
  } catch (error) {
    console.error("Failed to forward enquiry", error);
    res.status(502).json({ error: "Unable to submit enquiry right now." });
  }
});

app.use(
  express.static(distDir, {
    etag: true,
    maxAge: "1h",
    setHeaders(res, filePath) {
      if (/\.(js|css|png|jpg|jpeg|webp|svg|ico|woff2?)$/i.test(filePath)) {
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      }
    },
  }),
);

app.get("*splat", (_req, res) => {
  res.sendFile(indexHtml);
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ error: "Internal server error" });
});

const server = app.listen(port, host, () => {
  console.log(`TinnieDev server listening on ${host}:${port}`);
});

server.on("error", (error) => {
  console.error("Failed to start TinnieDev server", error);
  process.exit(1);
});

function parseEnquiry(body) {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const name = cleanText(body.name, 100);
  const email = cleanText(body.email, 160).toLowerCase();
  const phone = cleanText(body.phone, 40);
  const message = cleanText(body.message, 2000);
  const businessName = cleanText(body.businessName, 140);
  const website = cleanText(body.website, 240);
  const source = cleanText(body.source, 120) || "website";

  if (!name) {
    return { ok: false, error: "Name is required." };
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "A valid email is required." };
  }

  if (!message) {
    return { ok: false, error: "Message is required." };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      businessName,
      website,
      message,
      source,
      receivedAt: new Date().toISOString(),
    },
  };
}

function cleanText(value, maxLength) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxRequests = 8;
  const record = requestCounts.get(ip) ?? { count: 0, resetAt: now + windowMs };

  if (record.resetAt <= now) {
    requestCounts.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }

  record.count += 1;
  requestCounts.set(ip, record);
  return record.count > maxRequests;
}

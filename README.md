
# TinnieDev Website

## Running Locally

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Build the production frontend:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Hostinger Setup

Use these settings for Hostinger GitHub deployment:

- Framework: Vite / React
- Root directory: `.`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Entry file: leave empty

The site is deployed as a static Vite build. React routes are handled by `public/.htaccess` on Hostinger/Apache.

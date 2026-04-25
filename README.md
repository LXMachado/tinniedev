
# TinnieDev Website

React/Vite frontend with a small Node.js backend suitable for Hostinger Node.js hosting.

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

Run the production Node server locally:

```bash
npm start
```

## Hostinger Node.js Setup

Use these settings in Hostinger's Node.js app panel:

- Application root: project root
- Startup file: `server/index.js`
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Node version: 20 or newer

Environment variables:

```bash
PORT=3000
HOST=0.0.0.0
SITE_ORIGIN=https://tinniedev.com
ENQUIRY_WEBHOOK_URL=
```

`ENQUIRY_WEBHOOK_URL` is optional. When set, validated enquiries submitted to `/api/enquiries` are forwarded to that webhook.

## Backend Endpoints

- `GET /api/health`
- `POST /api/enquiries`

The server also serves the built frontend from `dist` and falls back to `index.html` for React routes such as `/projects/plumber-website`.

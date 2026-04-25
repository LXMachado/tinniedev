
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

The simplest Hostinger deployment path is now:

1. Run `npm run build`
2. Upload the contents of `dist` to `public_html`
3. Import `database/schema.sql` into MySQL using phpMyAdmin
4. Copy `dist/api/config.sample.php` to `dist/api/config.php`
5. Fill in the Hostinger MySQL database credentials in `config.php`

If Hostinger GitHub deployment works for the static build, use:

- Framework: Vite / React
- Root directory: `.`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Entry file: leave empty

The site is deployed as a static Vite build with PHP handlers copied from `public/api` into `dist/api`. React routes are handled by `public/.htaccess` on Hostinger/Apache.

## PHP API

- `GET /api/health.php`
- `POST /api/enquiries.php`

`/api/enquiries.php` accepts JSON or form-encoded data:

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "0400 000 000",
  "businessName": "Example Plumbing",
  "website": "https://example.com",
  "message": "I need a website audit.",
  "source": "website"
}
```

Do not commit `public/api/config.php`; it is ignored and should only exist on the deployed Hostinger server.

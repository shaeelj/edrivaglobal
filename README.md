# Edriva Global

Production-ready international education consultancy website built with Next.js App Router, TypeScript, Tailwind CSS, and local optimized imagery.

## Installation

```bash
corepack pnpm install
```

`npm install` also works with a stable npm release. The project lockfile is maintained with pnpm.

## Development

```bash
corepack pnpm dev
```

Open `http://localhost:3000`.

## Production

```bash
corepack pnpm build
corepack pnpm start
```

## Environment variables

Copy `.env.example` to `.env.local` and configure:

- `FORMSPREE_FORM_ID`: the ID at the end of your Formspree form endpoint. For `https://formspree.io/f/abcdwxyz`, use `abcdwxyz`.

The assessment form submits through the server-side route at `app/api/leads/route.ts`. It validates required fields, rejects the honeypot field, forwards valid leads to Formspree, and returns Formspree errors to the accessible form status. It intentionally returns a configuration message until `FORMSPREE_FORM_ID` is present.

## Editing the website

- Brand, domain, email, phone, WhatsApp and address: `config/site.ts`
- Destinations and images: `data/destinations.ts`
- Services: `data/services.ts`
- Program finder examples: `data/programs.ts`
- Testimonials: `data/testimonials.ts`
- FAQs: `data/faqs.ts`
- Homepage sections: `app/page.tsx`
- Global visual system: `app/globals.css`

Add or replace images in `public/images`. Preserve the filenames or update the relevant data file. The logo is rendered in `components/layout/header.tsx` and `components/layout/footer.tsx`; replace the `logo-mark` there when a final logo is ready.

## Contact and WhatsApp

Change `phone`, `whatsapp`, and `address` in `config/site.ts`. Empty values are intentionally not rendered. Add a valid WhatsApp number before enabling the floating WhatsApp control.

## Adding content

Add destinations in `data/destinations.ts` with matching imagery in `public/images`. Country pages are generated automatically by `app/destinations/[slug]/page.tsx`.

Add verified testimonials in `data/testimonials.ts` and set `isDemo: false`. Included records are visibly labelled demo content and should be replaced before launch.

## Deployment

### Vercel

Import the repository, add environment variables, and deploy. Vercel detects Next.js automatically.

### cPanel

Use a Node.js application with Node 20 or newer. Upload the project, install dependencies, run `pnpm build`, and use `pnpm start` as the startup command. Add environment variables in cPanel.

### VPS

Install Node 20+, build the project, and run `pnpm start` behind Nginx or another reverse proxy. Use a process manager and HTTPS in production.

## Pre-launch placeholders

- Add the verified phone, WhatsApp number, and office address in `config/site.ts`.
- Replace demo testimonials with approved student stories.
- Have the privacy, terms and disclaimer pages legally reviewed.
- Add the Formspree form ID to the production environment.
- Verify country-specific admissions, funding and visa information against official sources.

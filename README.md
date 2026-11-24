# Vantage View

Redesign of vantageview.co.uk. Next.js (App Router), TypeScript, Tailwind, Motion, Nodemailer.

```bash
npm install
npm run dev
```

- Copy, prices and contact details: `src/app/config/site.ts`
- Service pages: `src/app/config/services.ts` (slugs match the old site)
- Projects: `src/app/config/projects.ts`
- Photos and videos: `src/app/config/media.ts`, served from the client's Wix library. Move them before that Wix plan is cancelled.
- Copy `.env.example` to `.env.local` for the contact form. The site is noindex until `NEXT_PUBLIC_SITE_URL` is set.

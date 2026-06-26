# Duo Label

Premium label manufacturing company website for Duo Label, based in İzmir, Turkey. Dark luxury industrial aesthetic (Apple/Tesla-level), fully bilingual EN/TR (Turkish default), conversion-focused with WhatsApp CTA.

## Run & Operate

- `pnpm --filter @workspace/duo-label run dev` — run the frontend (port assigned by workflow)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS v4 + Framer Motion v12
- API: Express 5 + Nodemailer (contact form email)
- Fonts: Syne (display) + Inter (body)
- Build: esbuild (API server)

## Where things live

- `artifacts/duo-label/src/` — all frontend source
  - `context/LanguageContext.tsx` — bilingual EN/TR translations, Turkish is default
  - `sections/` — all page sections (Nav, Hero, About, Products, Sectors, TechnicalSupport, Materials, Gallery, Blog, GlobalVision, Contact)
  - `components/WhatsAppButton.tsx` — floating WhatsApp CTA
- `artifacts/api-server/src/routes/contact.ts` — email route (Nodemailer)
- `attached_assets/duo_label_logo_nobg.png` — logo (background removed)
- `artifacts/duo-label/public/favicon.png` — favicon

## Architecture decisions

- Turkish is the default language; LanguageContext defaults to `"tr"` and all translations live in one file.
- No external image URLs used — all visuals are CSS gradients and geometric compositions.
- Email sending uses Nodemailer with SMTP env vars; gracefully falls back (logs only) when SMTP is not configured.
- WhatsApp (+90 553 316 49 20) is the primary CTA on every page via floating button and Hero CTAs.
- MachineShowcase section is intentionally removed (renders null) — replaced by richer product/sector sections.

## Product

Duo Label website serving customers across Turkey. Users can browse product categories, explore sector use-cases, read the knowledge blog, and submit inquiries via the contact form or WhatsApp.

## User preferences

- NO fake stats, certifications, machine specs, or "years of experience" claims — ever
- Turkish as default language
- Real address (TR): Koşukavak Mah. 4213 Sk. No:8A, Bornova / İzmir
- English address: London
- WhatsApp: +90 553 316 49 20
- About headline must NOT reference location ("İzmir'den..." is banned)

## Gotchas

- `LanguageContext` uses `useState<Lang>("tr")` — Turkish is always the default
- All React hooks import from `"react"`. `useInView` comes from `"framer-motion"`.
- Contact form POSTs to `/api/contact` — the API server must be running for email delivery to work
- Email delivery requires env vars: `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO_EMAIL` (optional, defaults to info@duolabel.com.tr), `SMTP_HOST` (optional, defaults to smtp.gmail.com)

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details

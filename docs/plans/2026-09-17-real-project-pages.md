# b2build Real Project Pages + Media — Implementation Plan

**Goal:** Replace placeholder project cards/photos with real media and wire each
portfolio card to a working per-project detail page.

**Architecture:** Astro static site with `getStaticPaths()` for project pages.
Single `[slug].astro` template driven by a `src/data/projects.ts` registry —
the same registry feeds the portfolio grid, ensuring no drift.

**Tech Stack:** Astro 5 (static), Pillow for image processing, existing Tailwind/Lucide stack.

---

## Asset Inventory (verified 9/17)

- **Brooklyn (2220 8 Street NE):** NO photos, NO video. Drive link still required.
  Stand-in: Butler 4K MP4 (`2025-07-08-PJ-36ButlerCrescentNorthwest4K.mp4`) for hero video;
  Butler photo set for gallery until Drive folder is supplied.
- **Villa Castano / Mount Pleasant (442/444 27 Ave NW):** 2 photos — `Mount Pleasant Night .JPEG`,
  `Mount Plesant.JPEG`. Both exterior.
- **The Tux / Tuxedo (212/214 26 Ave NW):** 1 photo — `Tuxedo.JPEG`. Exterior.
- **The Butler (36 Butler Crescent NW) — SOLD:** 1 finished exterior (`butler-1.jpg`).
  PDF says "all exterior of the property" — Butler has many interior photos but only 1
  finished exterior. Use the exterior; expose interior photos only on the project detail page
  (not the SOLD card).
- **Winston (8 Street NE area, golf course):** 8 photos + 1 top-level photo. Mixed interior/exterior.
  Note: Winston landing page is a separate pre-existing marketing funnel (`/winston`) — that's
  a 1:1 page, not in this scope.
- **Logo.JPG** (1600x909, white background): make transparent + crop.

---

## Tasks

### Task 1: Copy project media into `public/photos/`

**Files:** Add files to `public/photos/{villa-castano,tux,butler,winston,brooklyn}/`

**Steps:**
1. Copy `Mount Pleasant Night .JPEG` → `public/photos/villa-castano/villa-castano-night.jpg`
2. Copy `Mount Plesant.JPEG` → `public/photos/villa-castano/villa-castano-dusk.jpg`
3. Copy `Tuxedo.JPEG` → `public/photos/tux/tux-exterior.jpg`
4. Copy `2025-07-08-PJ-36ButlerCrescentNorthwest4K.mp4` → `public/photos/butler/butler-hero.mp4`
   (replacing no existing file)
5. Create `public/photos/brooklyn/` with `.gitkeep` + copy Butler stand-ins:
   - `butler-1.jpg` → `brooklyn/brooklyn-front.jpg` (front exterior)
   - `butler-2.jpg` → `brooklyn/brooklyn-kitchen.jpg` (kitchen interior)
   - `butler-3.jpg` → `brooklyn/brooklyn-basement.jpg` (basement)
6. Copy 5-6 best Winston photos → `public/photos/winston/` (supplement existing set)

**Verify:** `ls public/photos/{villa-castano,tux,butler,brooklyn,winston}/`

**Commit:** None yet — wait for batch.

### Task 2: Process logo (transparent bg, 4× scale)

**Files:** Create `public/logo.png` (overwrite existing)

**Steps:**
1. Open `Logo.JPG`, convert RGBA
2. Make pixels with R,G,B > 240 transparent (white background is solid 255)
3. Verify the blue icon + black text remain (NOT turned transparent — they're well below 240)
4. Crop to bounding box of non-transparent content (trim whitespace)
5. Export at 4× resolution: target width 1600 → output at original aspect, no upscale
   (logo is already 1600px wide; the "4×" in the spec refers to current site usage which is
   `h-12 w-auto` (~48px tall); making the source asset 4× larger means we have headroom to
   scale UP without quality loss — but file is already 1600x909, plenty large. So step 5 = no
   additional scaling needed, just clean transparent output).
6. Save as `public/logo.png`

**Verify:** Open result in PIL, check corners are `(255,255,255,0)` and center is not.

**Commit:** Bundle with Task 1.

### Task 3: Create project data registry

**Files:** Create `src/data/projects.ts`

**Single source of truth for portfolio grid + project detail pages.** Fields:

```ts
export interface ProjectPhoto { src: string; alt: string; caption?: string }
export interface Project {
  slug: string;
  name: string;            // "The Brooklyn"
  category: 'CUSTOM HOMES' | 'INFILL HOMES' | 'DUPLEX RESIDENCES' | 'CUSTOM BUILD';
  status?: 'SOLD';         // optional badge
  location: string;        // "2220 8 Street NE, Calgary"
  year: string;            // "2026"
  shortDescription: string;// 1 sentence for portfolio card
  longDescription: string[]; // paragraphs for detail page (from PDF)
  highlights: string[];    // bullets (from PDF)
  heroPhoto: ProjectPhoto; // for detail page hero
  cardPhoto: ProjectPhoto;  // for portfolio card
  gallery: ProjectPhoto[];  // all photos for detail page
  videoUrl?: string;       // hero video for Brooklyn only
}
```

Populate 4 entries (Brooklyn, Villa Castano, The Tux, The Butler) using the PDF
descriptions verbatim.

**Verify:** TypeScript compiles (`npx tsc --noEmit` if available, else build succeeds).

**Commit:** Bundle with media.

### Task 4: Build dynamic project detail page

**Files:** Create `src/pages/projects/[slug].astro`

Uses `getStaticPaths()` returning one path per project from `src/data/projects.ts`. Layout:
- Hero section (title, location, year, badge, hero photo or video)
- Description paragraphs
- Highlights bullets
- Gallery grid (responsive, 2/3 columns)
- "Back to Portfolio" link
- Reuses Header + Footer + Layout

**Verify:** `npm run build` succeeds; check `/projects/brooklyn/`, `/projects/villa-castano/`,
`/projects/the-tux/`, `/projects/the-butler/` exist in `dist/`.

**Commit:** Bundle.

### Task 5: Update portfolio page to use real media + working links

**Files:** Modify `src/pages/portfolio.astro`

- Import project registry instead of inline `projects` array
- Each card wraps in `<a href={/projects/${slug}}>` (currently `<div>`)
- Card image = `cardPhoto.src`
- Add SOLD badge to Butler card
- Filter buttons still work (re-derive from data)

**Verify:** `npm run build`, then `curl https://b2builddevelopments.com/portfolio` and grep
for the 4 project names + the 4 new image paths.

**Commit:** Bundle.

### Task 6: Update home/index hero video + showhome to use real media

**Files:**
- `src/pages/index.astro` — replace static hero photo with MP4 video background
- `src/pages/showhome.astro` — replace placeholder Brooklyn photos with real `brooklyn/*` paths

**Verify:** Curl check for `<video>` tag on `/`, `<img src="/photos/brooklyn/..."` on `/showhome`.

**Commit:** Bundle.

### Task 7: Update Header Logo (4× larger, transparent bg)

**Files:** Modify `src/components/Header.astro`

`h-12 w-auto` → `h-24 w-auto` (4× taller on desktop; current logo file is already 1600px so
quality holds). Header height is `h-20 lg:h-24` — bumping logo to `h-24` makes it fill
the row. Adjust responsive classes if needed.

**Verify:** Visual check on `/`.

**Commit:** Bundle.

### Task 8: Build + deploy

1. `npm run build` — verify zero errors
2. `git add` all changed files (NO `.github/workflows/*` to avoid workflow-scope rejection)
3. `git commit -m "Real project media + working project pages"`
4. `git push origin main`
5. `wrangler pages deploy dist/ --project-name=b2builddevelopments --branch=main --commit-dirty=true`
6. Curl live site to verify changes propagated

**Verify:** All 4 project pages return 200 OK with real photos and PDF descriptions.

---

## Out of scope (pending media)

- **Brooklyn real photos/video** — needs Drive folder (`1WJjQYshknXM6lfETNJ-8c30OKrAsWPl1`).
  Currently using Butler stand-ins with `// TODO` comments.
- **About hero photo + values section** — Raj/PJ review.
- **DNS point** `b2buildltd.com` → `b2builddevelopments.com`.
- **Winston landing page updates** — separate `/winston` page is a standalone funnel.

---

## Deployment gotcha (proven earlier)

GitHub push does NOT auto-deploy (OAuth token lacks `workflow` scope, no GitHub Actions
workflow in remote, no Cloudflare Git-integration check-runs). Always deploy via wrangler:

```bash
export CLOUDFLARE_ACCOUNT_ID=187411433ef94ca188df1a734ab93b34
wrangler pages deploy dist/ --project-name=b2builddevelopments --branch=main --commit-dirty=true
```

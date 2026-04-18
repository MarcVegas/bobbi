# Sanity CMS Integration

This document covers the headless CMS integration added to the Bobbi Cafe website, what was changed in the codebase, and the remaining setup steps the owner must complete before live menu management is possible.

---

## Why Sanity

The business owner needed a way to add, edit, delete, and re-order menu items — including uploading item photos — without touching code or triggering a redeployment. Sanity was chosen because:

- **Free hosted Studio** at `[project].sanity.studio` — the owner just bookmarks a URL, nothing to install or host
- **Unlimited API calls** on the free tier — important for a QR-code-scanned menu that may get hundreds of reads per day
- **Native support for arrays of objects** — the `prices` field (e.g. `[{ label: "12 oz", price: 175 }]`) maps directly to a Sanity array type with no workarounds
- **TypeScript schema** — the content model is version-controlled alongside the codebase

---

## How It Works

```
Owner edits in Sanity Studio (bobbi.sanity.studio)
         ↓
Sanity CDN API (fast, globally cached)
         ↓
useMenuData() composable fetches via useQuery (TanStack Query)
         ↓
ProductsGrid renders live items; lightbox shows real photos
```

On first render the menu shows instantly from the static `data/menu.ts` file (zero-latency). Once the Sanity query resolves, it silently swaps in the live CMS data. If Sanity is unreachable for any reason, the static data stays visible as a fallback.

---

## Files Added

### `sanity.config.ts` (project root)
Defines the Sanity Studio schema — the content model for a `menuItem` document. Contains:
- All field definitions (name, description, category, subcategory, prices array, badge, featured, sortOrder, image)
- Dropdown options for category, subcategory, and badge fields
- Price array previews (shows "12 oz — ₱175" in the Studio item list)
- Sort ordering options
- `visionTool()` — a GROQ query explorer built into the Studio for debugging

### `app/composables/useMenuData.ts`
The single source of truth for menu data in the Vue app. Uses `useQuery` from `@peterbud/nuxt-query` (TanStack Query) to:
- Serve `data/menu.ts` static items immediately as `placeholderData` (instant render)
- Fetch live data from Sanity in the background using a GROQ query
- Cache results for 5 minutes (`staleTime`) to avoid redundant API calls
- Disable fetching entirely until `SANITY_PROJECT_ID` is configured (safe for local dev without env vars)

### `scripts/seed-sanity.ts`
A one-time script that reads all 39 items from `data/menu.ts` and bulk-creates them in Sanity using `createOrReplace`. Safe to re-run — it will not duplicate items. Requires `SANITY_PROJECT_ID` and `SANITY_API_TOKEN` env vars.

### `.env.example`
Documents every environment variable the project needs. Copy this to `.env` and fill in the values.

---

## Files Modified

### `nuxt.config.ts`
- Added `@peterbud/nuxt-query` to `modules` (was installed but not registered)
- Added `nuxtQuery` config block: `staleTime: 5 min`, `refetchOnWindowFocus: false`
- Added `runtimeConfig.public` block with `sanityProjectId`, `sanityDataset`, `sanityApiVersion` — these read from env vars and are safe to expose client-side (they are read-only public identifiers)

### `shared/types/menu.ts`
- Added `imageUrl?: string` to the `MenuItem` interface — populated from Sanity's image CDN when a photo has been uploaded

### `app/components/sections/ProductsGrid.vue`
- Replaced the static `import { menuData }` with `const { items: allItems } = useMenuData()`
- `filteredItems` computed now reads from `allItems.value` (reactive, updates when Sanity data arrives)
- Menu cards now show a real `<img>` when `item.imageUrl` is present, otherwise falls back to the leaf "Pic coming soon" placeholder

### `app/components/menu/MenuLightbox.vue`
- Lightbox image area now shows the real photo (`item.imageUrl`) when available, otherwise shows the leaf placeholder

---

## Packages Added

| Package | Version | Purpose |
|---------|---------|---------|
| `@sanity/client` | ^7.21.0 | Sanity API client used in `useMenuData.ts` |
| `groq` | ^5.21.0 | Tagged template literal for type-safe GROQ queries |

---

## GROQ Query

The query used to fetch all menu items from Sanity:

```groq
*[_type == "menuItem"] | order(sortOrder asc) {
  "id": _id,
  name,
  description,
  category,
  subcategory,
  subcategoryLabel,
  "prices": prices[] { label, price },
  badge,
  featured,
  sortOrder,
  "imageUrl": image.asset->url
}
```

`prices[] { label, price }` strips Sanity's internal `_key` field from the array items, returning clean `PriceOption` objects that match the existing type.

---

## Remaining Steps for the Owner

These steps must be completed once before live menu management works. They take about 15–20 minutes total.

### Step 1 — Create a Sanity Account and Project

1. Go to [sanity.io](https://sanity.io) and create a free account
2. Click **"New project"** → name it `bobbi` → choose **"Production"** as the dataset name → confirm
3. Note down your **Project ID** (visible in the project dashboard URL and under Settings → API)

### Step 2 — Deploy the Studio

The Studio is the owner's editing dashboard. It lives at `[project].sanity.studio` and is hosted by Sanity for free.

In the project root, run:

```bash
# Install the Sanity CLI globally (one time)
npm install -g sanity

# Log in
npx sanity login

# Link this project to your Sanity project and deploy the Studio
npx sanity deploy
```

When prompted for a Studio hostname, enter `bobbi` (or any name you prefer). The Studio will be live at `bobbi.sanity.studio` within a few minutes.

> **Bookmark this URL.** This is where the owner manages the menu.

### Step 3 — Configure Environment Variables

Copy `.env.example` to `.env` in the project root:

```bash
cp .env.example .env
```

Fill in the values:

```env
SANITY_PROJECT_ID=your_project_id_here
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_STUDIO_PROJECT_ID=your_project_id_here
```

### Step 4 — Seed the Initial Menu Data

This pushes all 39 existing menu items from the codebase into Sanity so the Studio starts populated.

1. Create a Sanity API token: go to [sanity.io/manage](https://sanity.io/manage) → your project → **API** → **Tokens** → **Add API token** → role: **Editor** → save the token

2. Run the seed script:

```bash
SANITY_PROJECT_ID=your_project_id SANITY_API_TOKEN=your_token bun run scripts/seed-sanity.ts
```

You should see 39 checkmarks in the terminal. The Studio will now show all menu items.

> This script is safe to re-run — it uses `createOrReplace`, so nothing will be duplicated.

### Step 5 — Add Environment Variables to Vercel

In the Vercel project dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add the following three variables (for **Production**, **Preview**, and **Development**):

| Name | Value |
|------|-------|
| `SANITY_PROJECT_ID` | your project ID |
| `SANITY_DATASET` | `production` |
| `SANITY_API_VERSION` | `2024-01-01` |

3. Trigger a redeploy (or push any commit) for the variables to take effect.

### Step 6 — Verify

1. Visit the live site and confirm the menu still loads correctly (it will still show the static data at first)
2. In Sanity Studio, edit the name of any item and save
3. Reload the public menu page — the updated name should appear within a few seconds

---

## Managing the Menu (Owner Guide)

### Adding a new item
1. Open `bobbi.sanity.studio` → click **"New document"** → **"Menu Item"**
2. Fill in Name, Description, Category, Subcategory
3. Under **Prices**, click **"Add item"** → enter the size label (e.g. `12 oz`) and the price in pesos
4. Optionally set a Badge and upload a Photo
5. Set Sort Order to control where it appears in the list (lower = earlier)
6. Click **Publish**

### Editing an item
1. Open `bobbi.sanity.studio` → find the item in the list → click it
2. Edit any field → click **Publish** to save

### Deleting an item
1. Open the item → click the **⋯** menu (top right) → **Delete**

### Uploading a photo
1. Open the item → scroll to the **Photo** field → click **Upload**
2. Once uploaded, click **Publish** — the photo will appear on the public site immediately

### Changing prices
1. Open the item → click on any price in the **Prices** list to edit it
2. To add a new size, click **"Add item"** inside the Prices field
3. Click **Publish**

---

## Notes

- The `data/menu.ts` file in the codebase **is not deleted** — it serves as the static fallback shown on first render before the Sanity fetch completes. It is also used as the seed source. Once Sanity is set up, this file no longer needs to be maintained.
- Menu data is cached for **5 minutes** on the client. After the owner publishes a change in the Studio, customers will see it within 5 minutes on their next page load (or immediately on a fresh load).
- Sanity's free tier includes **1 GB of asset storage** and **unlimited API requests**. This is more than sufficient for a single cafe's menu photos and traffic.
- The `SANITY_API_TOKEN` used in the seed script is a write token and should **never** be committed to git or added to Vercel. It is only needed to run the seed script once.

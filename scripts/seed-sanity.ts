/**
 * One-time seed script — pushes all items from data/menu.ts into Sanity.
 *
 * Usage:
 *   SANITY_PROJECT_ID=xxx SANITY_API_TOKEN=xxx bun run scripts/seed-sanity.ts
 *
 * SANITY_API_TOKEN must be an "Editor" or "Administrator" token from:
 *   https://sanity.io/manage → project → API → Tokens
 *
 * Safe to re-run — uses createOrReplace so nothing is duplicated.
 */

import { createClient } from '@sanity/client'
import { menuData } from '../data/menu'

const projectId = process.env.SANITY_PROJECT_ID
const token = process.env.SANITY_API_TOKEN

if (!projectId || !token) {
  console.error('❌  Set SANITY_PROJECT_ID and SANITY_API_TOKEN environment variables first.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

async function seed() {
  console.log(`\n🌱  Seeding ${menuData.items.length} menu items into Sanity...\n`)

  for (const item of menuData.items) {
    const doc = {
      _type: 'menuItem',
      _id: `menu-item-${item.id}`,
      name: item.name,
      description: item.description ?? '',
      category: item.category,
      subcategory: item.subcategory,
      subcategoryLabel: item.subcategoryLabel,
      // Sanity requires a _key on every array item
      prices: item.prices.map((p, i) => ({
        _key: `price-${i}`,
        label: p.label,
        price: p.price,
      })),
      badge: item.badge ?? null,
      featured: item.featured ?? false,
      sortOrder: item.sortOrder ?? 99,
    }

    await client.createOrReplace(doc)
    console.log(`  ✓  ${item.name}`)
  }

  console.log(`\n✅  Done! ${menuData.items.length} items seeded.\n`)
}

seed().catch((err) => {
  console.error('❌  Seed failed:', err.message)
  process.exit(1)
})

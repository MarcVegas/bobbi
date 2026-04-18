import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

const SUBCATEGORY_LABELS: Record<string, string> = {
  'signature-series': 'Signature Series',
  'hojicha': 'Hojicha',
  'bobbi-icons': 'Bobbi Icons',
  'heritage-selection': 'Heritage Selection',
  'marukyu-series': 'Marukyu Koyamaen',
  'classics': 'The Classics',
  'coffee-signatures': 'Coffee Signatures',
  'milk-series': 'The Milk Series',
  'caffeinated-frosts': 'Caffeinated Frosts',
  'cream-frosts': 'Cream Frosts',
}

export default defineConfig({
  name: 'bobbi-studio',
  title: 'Bobbi Cafe',

  // Set via SANITY_STUDIO_PROJECT_ID env var when running `npx sanity dev`
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(), // GROQ query explorer — helpful for debugging
  ],

  schema: {
    types: [
      {
        name: 'menuItem',
        type: 'document',
        title: 'Menu Item',
        fields: [
          {
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'description',
            type: 'text',
            title: 'Description',
            rows: 3,
          },
          {
            name: 'category',
            type: 'string',
            title: 'Category',
            options: {
              list: [
                { value: 'matcha', title: 'Matcha' },
                { value: 'coffee', title: 'Coffee' },
              ],
              layout: 'radio',
            },
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'subcategory',
            type: 'string',
            title: 'Subcategory',
            options: {
              list: [
                { value: 'signature-series', title: 'Signature Series (Matcha)' },
                { value: 'hojicha', title: 'Hojicha (Matcha)' },
                { value: 'bobbi-icons', title: 'Bobbi Icons (Matcha)' },
                { value: 'heritage-selection', title: 'Heritage Selection (Matcha)' },
                { value: 'marukyu-series', title: 'Marukyu Koyamaen (Matcha)' },
                { value: 'classics', title: 'The Classics (Coffee)' },
                { value: 'coffee-signatures', title: 'Coffee Signatures (Coffee)' },
                { value: 'milk-series', title: 'The Milk Series (Coffee)' },
                { value: 'caffeinated-frosts', title: 'Caffeinated Frosts (Coffee)' },
                { value: 'cream-frosts', title: 'Cream Frosts (Coffee)' },
              ],
            },
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'subcategoryLabel',
            type: 'string',
            title: 'Subcategory Label',
            description: 'Display label shown on the menu card (auto-filled from subcategory)',
            readOnly: false,
          },
          {
            name: 'prices',
            type: 'array',
            title: 'Prices',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'label',
                    type: 'string',
                    title: 'Size / Type',
                    description: 'e.g. "12 oz", "16 oz", "Hot", "Iced", "1 size"',
                  },
                  {
                    name: 'price',
                    type: 'number',
                    title: 'Price (₱)',
                  },
                ],
                preview: {
                  select: { title: 'label', subtitle: 'price' },
                  prepare({ title, subtitle }: any) {
                    return { title: title ? `${title} — ₱${subtitle}` : `₱${subtitle}` }
                  },
                },
              },
            ],
            validation: (Rule: any) => Rule.required().min(1).error('At least one price is required'),
          },
          {
            name: 'badge',
            type: 'string',
            title: 'Badge',
            options: {
              list: [
                { value: 'best-seller', title: '⭐ Best Seller' },
                { value: 'new', title: '🆕 New' },
                { value: 'popular', title: '🔥 Popular' },
              ],
            },
          },
          {
            name: 'featured',
            type: 'boolean',
            title: 'Featured',
            initialValue: false,
          },
          {
            name: 'sortOrder',
            type: 'number',
            title: 'Sort Order',
            description: 'Lower numbers appear first',
            initialValue: 99,
          },
          {
            name: 'image',
            type: 'image',
            title: 'Photo',
            options: { hotspot: true },
          },
        ],
        preview: {
          select: {
            title: 'name',
            subtitle: 'subcategoryLabel',
            media: 'image',
          },
        },
        orderings: [
          {
            title: 'Sort Order',
            name: 'sortOrderAsc',
            by: [{ field: 'sortOrder', direction: 'asc' }],
          },
          {
            title: 'Category + Sort',
            name: 'categorySort',
            by: [
              { field: 'category', direction: 'asc' },
              { field: 'sortOrder', direction: 'asc' },
            ],
          },
        ],
      },
    ],
  },
})

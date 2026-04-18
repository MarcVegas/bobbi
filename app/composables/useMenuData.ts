import { computed } from 'vue'
import { createClient } from '@sanity/client'
import groq from 'groq'
import { menuData } from '../../data/menu'
import type { MenuItem } from '../../shared/types/menu'

const MENU_QUERY = groq`
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
`

// Singleton client — created once, reused across all useMenuData() calls
let _client: ReturnType<typeof createClient> | null = null

function getSanityClient(config: ReturnType<typeof useRuntimeConfig>) {
  if (!_client) {
    _client = createClient({
      projectId: config.public.sanityProjectId as string,
      dataset: config.public.sanityDataset as string,
      apiVersion: config.public.sanityApiVersion as string,
      useCdn: true,
    })
  }
  return _client
}

export function useMenuData() {
  const config = useRuntimeConfig()
  const sanity = getSanityClient(config)

  const { data, isPending, isError, isPlaceholderData } = useQuery({
    queryKey: ['menu-items'],
    queryFn: () => sanity.fetch<MenuItem[]>(MENU_QUERY),
    staleTime: 1000 * 60 * 5,
    placeholderData: menuData.items,
    retry: 1,
  })

  // Use live data when available and non-empty; fall back to static otherwise
  const items = computed(() =>
    data.value && data.value.length > 0 ? data.value : menuData.items,
  )

  // True once real Sanity data has loaded (placeholder no longer shown)
  const isFromCMS = computed(() => !isPlaceholderData.value && !isPending.value)

  return { items, isPending, isError, isFromCMS }
}

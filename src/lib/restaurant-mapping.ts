/**
 * Restaurant name mapping between static slugs and Supabase restaurant names
 * This ensures exact matches for known restaurants
 */

export const restaurantSlugToNameMapping: Record<string, string> = {
  // Static slug -> Supabase restaurant name
  'moms-og': "Mom's OG",
  'chicken-salad-chick': "Chicken Salad Chick",
  'big-mills-cheesesteaks': "Big Mill's Cheesesteaks",
  'gator-pizza': "Gator Pizza",
  'sushi-2-go': "Sushi 2 Go",
  'hungry-bagel': "The Hungry Bagel",
  'frank-and-steins': "Frank & Steins",
  'burrito-fresh': "Burrito Fresh",
  'hummus-kebab': "Hummus & Kebab",
  'thai-town': "Thai Town",
  'humble-pizza': "Humble Pizza",
  'twisted-dilla': "Twisted Dilla",
  'backyard-bbq': "Backyard BBQ",
  'bagel-n-noodle': "Bagel 'N' Noodle",
  'stella21': "Stella21",
  'pan-cubano': "Pan Cubano",
  'french-quarter': "French Quarter",
  'gator-corner-deli': "Gator Corner Deli",
  'midtown-eats': "Midtown Eats",
  'campus-grind': "Campus Grind",
  'gator-subs': "Gator Subs"
}

/**
 * Get the Supabase restaurant name for a given slug
 * Falls back to slug transformation if no exact mapping exists
 */
export function getSupabaseRestaurantName(slug: string): string {
  return restaurantSlugToNameMapping[slug] || slug.replace(/-/g, ' ')
}

/**
 * Normalize restaurant names for comparison
 */
export function normalizeRestaurantName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .replace(/\s+/g, ' ')    // Normalize whitespace
    .trim()
}

/**
 * Check if two restaurant names are similar
 */
export function areRestaurantNamesSimilar(name1: string, name2: string): boolean {
  const normalized1 = normalizeRestaurantName(name1)
  const normalized2 = normalizeRestaurantName(name2)

  // Exact match
  if (normalized1 === normalized2) return true

  // Check if one contains the other
  if (normalized1.includes(normalized2) || normalized2.includes(normalized1)) return true

  // Check for common variations
  const variations1 = [
    normalized1.replace(/moms/g, "mom's"),
    normalized1.replace(/og/g, "original"),
    normalized1.replace(/chick/g, "chicken"),
    normalized1.replace(/&/g, "and"),
    normalized1.replace(/and/g, "&")
  ]

  return variations1.some(variation =>
    variation === normalized2 ||
    variation.includes(normalized2) ||
    normalized2.includes(variation)
  )
}
export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  isPopular?: boolean
  isStudentSpecial?: boolean
  dietaryInfo?: string[]
}

export interface Restaurant {
  id: string
  name: string
  slug: string
  cuisine: string[]
  rating: number
  reviewCount: number
  description: string
  longDescription: string
  address: string
  phone: string
  website?: string
  hours: {
    [key: string]: string
  }
  coordinates: {
    lat: number
    lng: number
  }
  distanceFromCampus: string
  priceRange: '$' | '$$' | '$$$'
  image: string
  gallery: string[]
  specialties: string[]
  studentDiscount: string
  menu: MenuItem[]
  popularItems: string[]
}

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: "Mom's OG",
    slug: 'moms-og',
    cuisine: ['American', 'Comfort Food'],
    rating: 4.7,
    reviewCount: 342,
    description: "Home-style comfort food with a modern twist, just like mom used to make.",
    longDescription: "Mom's OG brings authentic home-style cooking to the UF campus area. Known for their generous portions and comfort food classics, this family-owned restaurant has been serving the Gainesville community with love and care. Every dish is prepared fresh daily using traditional recipes passed down through generations.",
    address: "123 University Ave, Gainesville, FL 32601",
    phone: "(352) 555-0101",
    website: "https://momsog.com",
    hours: {
      'Monday': '11:00 AM - 9:00 PM',
      'Tuesday': '11:00 AM - 9:00 PM', 
      'Wednesday': '11:00 AM - 9:00 PM',
      'Thursday': '11:00 AM - 9:00 PM',
      'Friday': '11:00 AM - 10:00 PM',
      'Saturday': '11:00 AM - 10:00 PM',
      'Sunday': '12:00 PM - 8:00 PM'
    },
    coordinates: { lat: 29.6516, lng: -82.3248 },
    distanceFromCampus: "0.2 miles",
    priceRange: '$$',
    image: "/restaurants/moms-og-hero.jpg",
    gallery: ["/restaurants/moms-og-1.jpg", "/restaurants/moms-og-2.jpg"],
    specialties: ["Mac & Cheese", "Fried Chicken", "Meatloaf"],
    studentDiscount: "15% off with student ID",
    popularItems: ["Signature Mac & Cheese", "Crispy Fried Chicken", "Homestyle Meatloaf"],
    menu: [
      {
        id: 'm1',
        name: "Signature Mac & Cheese",
        description: "Three-cheese blend with crispy breadcrumb topping",
        price: 12.99,
        category: "Mains",
        isPopular: true,
        dietaryInfo: ["Vegetarian"]
      },
      {
        id: 'm2', 
        name: "Crispy Fried Chicken",
        description: "Buttermilk fried chicken with mashed potatoes and gravy",
        price: 16.99,
        category: "Mains",
        isPopular: true
      },
      {
        id: 'm3',
        name: "Loaded Potato Skins",
        description: "Crispy potato skins with cheese, bacon, and sour cream",
        price: 8.99,
        category: "Appetizers"
      }
    ]
  },
  {
    id: '2',
    name: "Chicken Salad Chick",
    slug: 'chicken-salad-chick',
    cuisine: ['American', 'Salads', 'Sandwiches'],
    rating: 4.8,
    reviewCount: 567,
    description: "Fresh chicken salad varieties and southern-inspired sides with a cozy atmosphere.",
    longDescription: "Chicken Salad Chick specializes in made-from-scratch chicken salad with over a dozen unique flavors. From classic to creative combinations, each recipe is crafted with premium ingredients and served with genuine southern hospitality. Perfect for a quick, healthy meal between classes.",
    address: "456 SW 13th St, Gainesville, FL 32601",
    phone: "(352) 555-0102",
    hours: {
      'Monday': '10:30 AM - 8:00 PM',
      'Tuesday': '10:30 AM - 8:00 PM',
      'Wednesday': '10:30 AM - 8:00 PM', 
      'Thursday': '10:30 AM - 8:00 PM',
      'Friday': '10:30 AM - 8:00 PM',
      'Saturday': '10:30 AM - 8:00 PM',
      'Sunday': '11:00 AM - 6:00 PM'
    },
    coordinates: { lat: 29.6496, lng: -82.3287 },
    distanceFromCampus: "0.3 miles",
    priceRange: '$$',
    image: "/restaurants/chicken-salad-chick-hero.jpg",
    gallery: ["/restaurants/csc-1.jpg", "/restaurants/csc-2.jpg"],
    specialties: ["Classic Carol", "Cranberry Kelli", "Jalapeño Holly"],
    studentDiscount: "10% off combo meals",
    popularItems: ["Classic Carol Sandwich", "Cranberry Kelli", "Southern Soul Soup"],
    menu: [
      {
        id: 'csc1',
        name: "Classic Carol",
        description: "Traditional chicken salad with mayo, celery, and seasonings",
        price: 9.99,
        category: "Chicken Salads",
        isPopular: true
      },
      {
        id: 'csc2',
        name: "Cranberry Kelli", 
        description: "Chicken salad with dried cranberries and pecans",
        price: 10.99,
        category: "Chicken Salads",
        isPopular: true
      },
      {
        id: 'csc3',
        name: "Jalapeño Holly",
        description: "Spicy chicken salad with jalapeños and pepper jack cheese",
        price: 10.99,
        category: "Chicken Salads",
        isStudentSpecial: true
      }
    ]
  },
  {
    id: '3',
    name: "Big Mills Cheesesteaks",
    slug: 'big-mills-cheesesteaks',
    cuisine: ['American', 'Sandwiches', 'Philadelphia'],
    rating: 4.6,
    reviewCount: 289,
    description: "Authentic Philadelphia-style cheesesteaks made with premium ingredients.",
    longDescription: "Big Mills brings the authentic taste of Philadelphia to Gainesville with traditional cheesesteaks made the right way. Using thinly sliced ribeye, fresh-baked hoagie rolls, and real Cheez Whiz, every sandwich is a genuine Philly experience that will transport you straight to South Street.",
    address: "789 W University Ave, Gainesville, FL 32601", 
    phone: "(352) 555-0103",
    hours: {
      'Monday': '11:00 AM - 9:00 PM',
      'Tuesday': '11:00 AM - 9:00 PM',
      'Wednesday': '11:00 AM - 9:00 PM',
      'Thursday': '11:00 AM - 9:00 PM', 
      'Friday': '11:00 AM - 10:00 PM',
      'Saturday': '11:00 AM - 10:00 PM',
      'Sunday': 'Closed'
    },
    coordinates: { lat: 29.6512, lng: -82.3301 },
    distanceFromCampus: "0.4 miles",
    priceRange: '$$',
    image: "/restaurants/big-mills-hero.jpg",
    gallery: ["/restaurants/big-mills-1.jpg", "/restaurants/big-mills-2.jpg"],
    specialties: ["Classic Cheesesteak", "Chicken Cheesesteak", "Philly Fries"],
    studentDiscount: "Free drink with any cheesesteak",
    popularItems: ["Classic Cheesesteak", "Chicken Cheesesteak", "Loaded Philly Fries"],
    menu: [
      {
        id: 'bm1',
        name: "Classic Cheesesteak",
        description: "Thinly sliced ribeye with Cheez Whiz on a hoagie roll",
        price: 12.99,
        category: "Cheesesteaks",
        isPopular: true
      },
      {
        id: 'bm2',
        name: "Chicken Cheesesteak", 
        description: "Grilled chicken with peppers, onions, and provolone",
        price: 11.99,
        category: "Cheesesteaks",
        isPopular: true
      },
      {
        id: 'bm3',
        name: "Loaded Philly Fries",
        description: "Fresh-cut fries topped with cheesesteak meat and cheese",
        price: 9.99,
        category: "Sides",
        isStudentSpecial: true
      }
    ]
  },
  {
    id: '4',
    name: "Gumby's Pizza",
    slug: 'gumbys-pizza',
    cuisine: ['Pizza', 'Wings', 'Late Night'],
    rating: 4.5,
    reviewCount: 892,
    description: "Late-night pizza and wings perfect for studying sessions and group hangouts.",
    longDescription: "Gumby's Pizza has been a UF campus institution for decades, serving up hot, cheesy pizza and crispy wings until the early morning hours. Known for their generous toppings, affordable prices, and late-night delivery, Gumby's is the go-to spot for students pulling all-nighters.",
    address: "321 SW 2nd Ave, Gainesville, FL 32601",
    phone: "(352) 555-0104", 
    hours: {
      'Monday': '4:00 PM - 3:00 AM',
      'Tuesday': '4:00 PM - 3:00 AM',
      'Wednesday': '4:00 PM - 3:00 AM',
      'Thursday': '4:00 PM - 3:00 AM',
      'Friday': '4:00 PM - 4:00 AM',
      'Saturday': '4:00 PM - 4:00 AM',
      'Sunday': '4:00 PM - 2:00 AM'
    },
    coordinates: { lat: 29.6485, lng: -82.3267 },
    distanceFromCampus: "0.2 miles",
    priceRange: '$',
    image: "/restaurants/gumbys-hero.jpg",
    gallery: ["/restaurants/gumbys-1.jpg", "/restaurants/gumbys-2.jpg"],
    specialties: ["Stoner Pie", "Garlic Knots", "Buffalo Wings"],
    studentDiscount: "Student special: Large pizza + 2 drinks for $15",
    popularItems: ["Stoner Pie Pizza", "Garlic Knots", "Buffalo Wings"],
    menu: [
      {
        id: 'gp1',
        name: "Stoner Pie",
        description: "Pepperoni, sausage, mushrooms, onions, green peppers",
        price: 18.99,
        category: "Specialty Pizzas",
        isPopular: true
      },
      {
        id: 'gp2',
        name: "Garlic Knots (6 pack)",
        description: "Fresh-baked knots with garlic butter and parmesan",
        price: 5.99,
        category: "Sides",
        isPopular: true
      },
      {
        id: 'gp3',
        name: "Buffalo Wings (10 pc)",
        description: "Crispy wings tossed in buffalo sauce with ranch",
        price: 12.99,
        category: "Wings",
        isStudentSpecial: true
      }
    ]
  },
  {
    id: '5',
    name: "Sushi-2-Go",
    slug: 'sushi-2-go',
    cuisine: ['Japanese', 'Sushi', 'Asian'],
    rating: 4.6,
    reviewCount: 445,
    description: "Fresh sushi and Japanese favorites made to order with quality ingredients.",
    longDescription: "Sushi-2-Go offers fresh, affordable sushi made daily by experienced sushi chefs. From classic California rolls to creative specialty rolls, each piece is crafted with care using high-quality fish and authentic Japanese techniques. Perfect for a healthy, quick meal.",
    address: "654 W University Ave, Gainesville, FL 32601",
    phone: "(352) 555-0105",
    hours: {
      'Monday': '11:30 AM - 9:30 PM',
      'Tuesday': '11:30 AM - 9:30 PM',
      'Wednesday': '11:30 AM - 9:30 PM',
      'Thursday': '11:30 AM - 9:30 PM',
      'Friday': '11:30 AM - 10:00 PM', 
      'Saturday': '12:00 PM - 10:00 PM',
      'Sunday': '12:00 PM - 9:00 PM'
    },
    coordinates: { lat: 29.6507, lng: -82.3295 },
    distanceFromCampus: "0.7 miles",
    priceRange: '$$',
    image: "/restaurants/sushi2go-hero.jpg",
    gallery: ["/restaurants/sushi2go-1.jpg", "/restaurants/sushi2go-2.jpg"],
    specialties: ["California Roll", "Spicy Tuna Roll", "Bento Boxes"],
    studentDiscount: "20% off bento boxes",
    popularItems: ["California Roll", "Spicy Tuna Roll", "Chicken Teriyaki Bento"],
    menu: [
      {
        id: 's2g1',
        name: "California Roll",
        description: "Crab, avocado, cucumber with sesame seeds",
        price: 7.99,
        category: "Classic Rolls",
        isPopular: true
      },
      {
        id: 's2g2',
        name: "Spicy Tuna Roll",
        description: "Fresh tuna with spicy mayo and sriracha",
        price: 9.99,
        category: "Specialty Rolls",
        isPopular: true
      },
      {
        id: 's2g3',
        name: "Chicken Teriyaki Bento",
        description: "Grilled chicken, rice, salad, and miso soup",
        price: 13.99,
        category: "Bento Boxes",
        isStudentSpecial: true,
        dietaryInfo: ["Gluten-Free Option"]
      }
    ]
  }
  // Note: This is a subset - in production we'd add all 22+ restaurants
]

export const getRestaurantBySlug = (slug: string): Restaurant | undefined => {
  return restaurants.find(restaurant => restaurant.slug === slug)
}

export const getRestaurantsByCategory = (category: string): Restaurant[] => {
  return restaurants.filter(restaurant => 
    restaurant.cuisine.some(c => c.toLowerCase().includes(category.toLowerCase()))
  )
}

export const getRestaurantsNearCampus = (maxDistance: number = 1): Restaurant[] => {
  return restaurants.filter(restaurant => {
    const distance = parseFloat(restaurant.distanceFromCampus.split(' ')[0])
    return distance <= maxDistance
  })
}
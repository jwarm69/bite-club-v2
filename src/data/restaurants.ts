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
  },
  {
    id: '6',
    name: "Humble Wood Fire Bagels",
    slug: 'humble-wood-fire-bagels',
    cuisine: ['Breakfast', 'Bagels', 'Cafe'],
    rating: 4.8,
    reviewCount: 412,
    description: "Authentic wood-fired bagels made fresh daily with artisanal toppings.",
    longDescription: "Humble Wood Fire Bagels brings the authentic taste of New York-style bagels to Gainesville. Each bagel is hand-rolled, boiled, and baked in our wood-fired oven for that perfect crispy exterior and chewy interior.",
    address: "1124 SW 1st Ave, Gainesville, FL 32601",
    phone: "(352) 555-0106",
    hours: {
      monday: "6:30 AM - 3:00 PM",
      tuesday: "6:30 AM - 3:00 PM",
      wednesday: "6:30 AM - 3:00 PM",
      thursday: "6:30 AM - 3:00 PM",
      friday: "6:30 AM - 3:00 PM",
      saturday: "7:00 AM - 3:00 PM",
      sunday: "7:00 AM - 2:00 PM"
    },
    coordinates: { lat: 29.6502, lng: -82.3341 },
    distanceFromCampus: "0.7 miles",
    priceRange: '$',
    image: "/images/restaurants/humble-bagels.jpg",
    gallery: [],
    specialties: ["Wood-fired bagels", "House-made cream cheese"],
    studentDiscount: "15% off with student ID",
    menu: [
      {
        id: 'hb1',
        name: "Everything Bagel with Lox",
        description: "Toasted everything bagel with cream cheese and smoked salmon",
        price: 12.99,
        category: "Signature Bagels",
        isPopular: true
      }
    ],
    popularItems: ["Everything Bagel with Lox", "Bacon, Egg & Cheese"]
  },
  {
    id: '7',
    name: "Fehrenbacher's Artisan Sausage",
    slug: 'fehrenbachers-artisan-sausage',
    cuisine: ['German', 'American', 'BBQ'],
    rating: 4.7,
    reviewCount: 298,
    description: "Handcrafted artisan sausages made with premium meats and authentic spices.",
    longDescription: "Fehrenbacher's Artisan Sausage specializes in traditional German and creative American sausages made with premium cuts of meat and carefully selected spices.",
    address: "237 W University Ave, Gainesville, FL 32601",
    phone: "(352) 555-0107",
    hours: {
      monday: "11:00 AM - 9:00 PM",
      tuesday: "11:00 AM - 9:00 PM", 
      wednesday: "11:00 AM - 9:00 PM",
      thursday: "11:00 AM - 9:00 PM",
      friday: "11:00 AM - 10:00 PM",
      saturday: "11:00 AM - 10:00 PM",
      sunday: "12:00 PM - 8:00 PM"
    },
    coordinates: { lat: 29.6527, lng: -82.3275 },
    distanceFromCampus: "0.3 miles", 
    priceRange: '$$',
    image: "/images/restaurants/fehrenbachers.jpg",
    gallery: [],
    specialties: ["Artisan sausages", "German specialties"],
    studentDiscount: "10% off with student ID",
    menu: [
      {
        id: 'fa1',
        name: "Classic Bratwurst Platter",
        description: "Two grilled bratwurst with sauerkraut and German potato salad",
        price: 13.99,
        category: "German Classics",
        isPopular: true
      }
    ],
    popularItems: ["Classic Bratwurst", "Spicy Italian Sausage"]
  },
  {
    id: '8', 
    name: "Burrito Famous",
    slug: 'burrito-famous',
    cuisine: ['Mexican', 'Tex-Mex', 'Latin'],
    rating: 4.6,
    reviewCount: 567,
    description: "Massive burritos, fresh ingredients, and authentic Mexican flavors.",
    longDescription: "Burrito Famous is known for oversized burritos packed with fresh, high-quality ingredients prepared daily from scratch.",
    address: "1402 W University Ave, Gainesville, FL 32601",
    phone: "(352) 555-0108",
    hours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM", 
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    coordinates: { lat: 29.6521, lng: -82.3389 },
    distanceFromCampus: "0.9 miles",
    priceRange: '$',
    image: "/images/restaurants/burrito-famous.jpg",
    gallery: [],
    specialties: ["Giant burritos", "Fresh guacamole"],
    studentDiscount: "Free drink with burrito purchase",
    menu: [
      {
        id: 'bf1',
        name: "El Gigante Burrito", 
        description: "12-inch tortilla with choice of meat, rice, beans, cheese, salsa",
        price: 10.99,
        category: "Burritos",
        isPopular: true
      }
    ],
    popularItems: ["El Gigante Burrito", "Loaded Nachos"]
  },
  {
    id: '9',
    name: "Hass Kitchen", 
    slug: 'hass-kitchen',
    cuisine: ['Mediterranean', 'Middle Eastern', 'Healthy'],
    rating: 4.8,
    reviewCount: 423,
    description: "Fresh Mediterranean cuisine with healthy, flavorful options.",
    longDescription: "Hass Kitchen brings vibrant Mediterranean flavors using fresh, healthy ingredients like olive oil, herbs, and locally sourced vegetables.",
    address: "1620 W University Ave, Gainesville, FL 32601",
    phone: "(352) 555-0109",
    hours: {
      monday: "11:00 AM - 9:00 PM",
      tuesday: "11:00 AM - 9:00 PM",
      wednesday: "11:00 AM - 9:00 PM",
      thursday: "11:00 AM - 9:00 PM", 
      friday: "11:00 AM - 10:00 PM",
      saturday: "11:00 AM - 10:00 PM",
      sunday: "12:00 PM - 8:00 PM"
    },
    coordinates: { lat: 29.6519, lng: -82.3412 },
    distanceFromCampus: "1.1 miles",
    priceRange: '$$',
    image: "/images/restaurants/hass-kitchen.jpg", 
    gallery: [],
    specialties: ["Fresh falafel", "Grilled kebabs"],
    studentDiscount: "15% off with student ID",
    menu: [
      {
        id: 'hk1',
        name: "Mixed Grill Platter",
        description: "Chicken kebab, beef kofta, lamb chop with rice and salad",
        price: 18.99,
        category: "Platters",
        isPopular: true
      }
    ],
    popularItems: ["Mixed Grill Platter", "Falafel Wrap"]
  },
  {
    id: '10',
    name: "Tip Tum Thai",
    slug: 'tip-tum-thai', 
    cuisine: ['Thai', 'Asian', 'Noodles'],
    rating: 4.7,
    reviewCount: 512,
    description: "Authentic Thai cuisine with customizable spice levels and fresh ingredients.",
    longDescription: "Tip Tum Thai offers authentic Thai dishes prepared by experienced Thai chefs using traditional cooking methods and imported ingredients.",
    address: "808 W University Ave, Gainesville, FL 32601",
    phone: "(352) 555-0110",
    hours: {
      monday: "11:30 AM - 9:30 PM",
      tuesday: "11:30 AM - 9:30 PM",
      wednesday: "11:30 AM - 9:30 PM",
      thursday: "11:30 AM - 9:30 PM",
      friday: "11:30 AM - 10:00 PM",
      saturday: "12:00 PM - 10:00 PM",
      sunday: "Closed"
    },
    coordinates: { lat: 29.6523, lng: -82.3321 },
    distanceFromCampus: "0.5 miles",
    priceRange: '$$',
    image: "/images/restaurants/tip-tum-thai.jpg",
    gallery: [],
    specialties: ["Pad Thai", "Green curry"],
    studentDiscount: "10% off lunch specials",
    menu: [
      {
        id: 'tt1',
        name: "Pad Thai",
        description: "Rice noodles with tamarind sauce, egg, peanuts, bean sprouts",
        price: 11.99,
        category: "Noodles", 
        isPopular: true
      }
    ],
    popularItems: ["Pad Thai", "Drunken Noodles"]
  },
  {
    id: '11',
    name: "Humble Wood Fire Pizza",
    slug: 'humble-wood-fire-pizza',
    cuisine: ['Pizza', 'Italian', 'Wood-Fired'],
    rating: 4.8,
    reviewCount: 634,
    description: "Artisan wood-fired pizzas with locally sourced ingredients and creative toppings.",
    longDescription: "Sister restaurant to Humble Wood Fire Bagels, bringing the same dedication to quality with wood-fired pizzas and fresh dough made daily.",
    address: "1124 SW 1st Ave, Gainesville, FL 32601", 
    phone: "(352) 555-0111",
    hours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM"
    },
    coordinates: { lat: 29.6502, lng: -82.3341 },
    distanceFromCampus: "0.7 miles",
    priceRange: '$$',
    image: "/images/restaurants/humble-pizza.jpg",
    gallery: [],
    specialties: ["Wood-fired pizza", "Fresh mozzarella"],
    studentDiscount: "15% off with student ID",
    menu: [
      {
        id: 'hp1',
        name: "Classic Margherita",
        description: "San Marzano tomatoes, fresh mozzarella, basil, olive oil",
        price: 13.99,
        category: "Pizza",
        isPopular: true
      }
    ],
    popularItems: ["Classic Margherita", "The Humble Special"]
  },
  {
    id: '12',
    name: "Tony Dillas",
    slug: 'tony-dillas',
    cuisine: ['Mexican', 'Quesadillas', 'Tex-Mex'],
    rating: 4.5,
    reviewCount: 445,
    description: "Gourmet quesadillas with creative fillings and generous portions.",
    longDescription: "Tony Dillas specializes in taking the humble quesadilla to new heights with oversized flour tortillas and creative combinations.",
    address: "13 SE 1st Ave, Gainesville, FL 32601",
    phone: "(352) 555-0112",
    hours: {
      monday: "11:00 AM - 9:00 PM",
      tuesday: "11:00 AM - 9:00 PM",
      wednesday: "11:00 AM - 9:00 PM", 
      thursday: "11:00 AM - 9:00 PM",
      friday: "11:00 AM - 10:00 PM",
      saturday: "11:00 AM - 10:00 PM",
      sunday: "12:00 PM - 8:00 PM"
    },
    coordinates: { lat: 29.6516, lng: -82.3243 },
    distanceFromCampus: "0.4 miles",
    priceRange: '$',
    image: "/images/restaurants/tony-dillas.jpg",
    gallery: [],
    specialties: ["Gourmet quesadillas", "Creative fillings"],
    studentDiscount: "Free chips & salsa with quesadilla",
    menu: [
      {
        id: 'td1',
        name: "Mac & Cheese Quesadilla",
        description: "Creamy mac & cheese with bacon bits in a crispy tortilla",
        price: 9.99,
        category: "Signature Quesadillas",
        isPopular: true
      }
    ],
    popularItems: ["Mac & Cheese Quesadilla", "Buffalo Chicken Dilla"]
  },
  {
    id: '13',
    name: "Bite Down BBQ",
    slug: 'bite-down-bbq',
    cuisine: ['BBQ', 'Southern', 'American'],
    rating: 4.7,
    reviewCount: 523,
    description: "Authentic Southern BBQ with slow-smoked meats and homemade sides.",
    longDescription: "Bite Down BBQ brings authentic Southern barbecue with meats smoked low and slow for up to 14 hours using local hardwoods.",
    address: "2120 SW 13th St, Gainesville, FL 32608",
    phone: "(352) 555-0113",
    hours: {
      monday: "11:00 AM - 9:00 PM",
      tuesday: "11:00 AM - 9:00 PM",
      wednesday: "11:00 AM - 9:00 PM",
      thursday: "11:00 AM - 9:00 PM",
      friday: "11:00 AM - 10:00 PM",
      saturday: "11:00 AM - 10:00 PM",
      sunday: "12:00 PM - 8:00 PM"
    },
    coordinates: { lat: 29.6456, lng: -82.3378 },
    distanceFromCampus: "1.3 miles",
    priceRange: '$$',
    image: "/images/restaurants/bite-down-bbq.jpg",
    gallery: [],
    specialties: ["Smoked brisket", "Baby back ribs"],
    studentDiscount: "10% off with student ID",
    menu: [
      {
        id: 'bb1',
        name: "Pitmaster Platter",
        description: "1/4 lb each of brisket, pulled pork, ribs with two sides",
        price: 19.99,
        category: "Platters",
        isPopular: true
      }
    ],
    popularItems: ["Pitmaster Platter", "Baby Back Ribs"]
  },
  {
    id: '14',
    name: "Bagels and Noodles",
    slug: 'bagels-and-noodles',
    cuisine: ['Asian Fusion', 'Bagels', 'Noodles'],
    rating: 4.4,
    reviewCount: 389,
    description: "Unique fusion of Asian noodle dishes and New York-style bagels.",
    longDescription: "Bagels and Noodles offers a unique dining experience combining Asian noodle dishes with classic New York bagels in creative fusion combinations.",
    address: "1222 W University Ave, Gainesville, FL 32601",
    phone: "(352) 555-0114",
    hours: {
      monday: "8:00 AM - 9:00 PM",
      tuesday: "8:00 AM - 9:00 PM",
      wednesday: "8:00 AM - 9:00 PM",
      thursday: "8:00 AM - 9:00 PM",
      friday: "8:00 AM - 10:00 PM",
      saturday: "9:00 AM - 10:00 PM", 
      sunday: "9:00 AM - 8:00 PM"
    },
    coordinates: { lat: 29.6520, lng: -82.3367 },
    distanceFromCampus: "0.8 miles",
    priceRange: '$',
    image: "/images/restaurants/bagels-noodles.jpg",
    gallery: [],
    specialties: ["Ramen", "Bagel sandwiches"],
    studentDiscount: "Free drink with combo meal",
    menu: [
      {
        id: 'bn1',
        name: "Ramen Burger",
        description: "Beef patty between crispy ramen 'buns' with Asian slaw",
        price: 10.99,
        category: "Fusion Specials",
        isPopular: true
      }
    ],
    popularItems: ["Ramen Burger", "Tonkotsu Ramen"]
  },
  {
    id: '15',
    name: "Scuola2",
    slug: 'scuola2',
    cuisine: ['Italian', 'Pizza', 'Pasta'],
    rating: 4.6,
    reviewCount: 401,
    description: "Authentic Italian cuisine with handmade pasta and traditional recipes.",
    longDescription: "Scuola2 brings authentic Italian taste with recipes passed down through generations, fresh daily pasta, and imported ingredients.",
    address: "6 E University Ave, Gainesville, FL 32601",
    phone: "(352) 555-0115",
    hours: {
      monday: "11:30 AM - 10:00 PM",
      tuesday: "11:30 AM - 10:00 PM",
      wednesday: "11:30 AM - 10:00 PM",
      thursday: "11:30 AM - 10:00 PM",
      friday: "11:30 AM - 11:00 PM",
      saturday: "11:30 AM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM"
    },
    coordinates: { lat: 29.6526, lng: -82.3248 },
    distanceFromCampus: "0.2 miles",
    priceRange: '$$',
    image: "/images/restaurants/scuola2.jpg",
    gallery: [],
    specialties: ["Handmade pasta", "Wood-fired pizza"],
    studentDiscount: "15% off lunch menu",
    menu: [
      {
        id: 's21',
        name: "Spaghetti Carbonara",
        description: "Fresh pasta with guanciale, egg, pecorino romano, black pepper",
        price: 14.99,
        category: "Pasta",
        isPopular: true
      }
    ],
    popularItems: ["Carbonara", "Margherita Pizza"]
  },
  {
    id: '16',
    name: "Pampy's Cuban Cuisine",
    slug: 'pampys-cuban-cuisine',
    cuisine: ['Cuban', 'Caribbean', 'Latin'],
    rating: 4.8,
    reviewCount: 556,
    description: "Authentic Cuban sandwiches, rice dishes, and tropical flavors.",
    longDescription: "Pampy's Cuban Cuisine serves authentic Cuban food made with love and tradition, from pressed Cuban sandwiches to perfectly seasoned rice and beans.",
    address: "25 SE 2nd Pl, Gainesville, FL 32601",
    phone: "(352) 555-0116", 
    hours: {
      monday: "11:00 AM - 8:00 PM",
      tuesday: "11:00 AM - 8:00 PM",
      wednesday: "11:00 AM - 8:00 PM",
      thursday: "11:00 AM - 8:00 PM",
      friday: "11:00 AM - 9:00 PM",
      saturday: "11:00 AM - 9:00 PM",
      sunday: "Closed"
    },
    coordinates: { lat: 29.6514, lng: -82.3239 },
    distanceFromCampus: "0.5 miles",
    priceRange: '$$',
    image: "/images/restaurants/pampys-cuban.jpg",
    gallery: [],
    specialties: ["Cuban sandwich", "Ropa vieja"],
    studentDiscount: "10% off with student ID",
    menu: [
      {
        id: 'pc1',
        name: "Classic Cuban Sandwich",
        description: "Roast pork, ham, Swiss cheese, pickles, mustard on pressed Cuban bread",
        price: 10.99,
        category: "Sandwiches",
        isPopular: true
      }
    ],
    popularItems: ["Cuban Sandwich", "Ropa Vieja"]
  },
  {
    id: '17',
    name: "Frenchman's Street Food",
    slug: 'frenchmans-street-food',
    cuisine: ['Cajun', 'Creole', 'Southern'],
    rating: 4.7,
    reviewCount: 478,
    description: "New Orleans-style street food with authentic Cajun and Creole flavors.",
    longDescription: "Frenchman's Street Food brings vibrant New Orleans flavors with authentic Louisiana cuisine made with traditional recipes and imported spices.",
    address: "1017 W University Ave, Gainesville, FL 32601",
    phone: "(352) 555-0117",
    hours: {
      monday: "11:00 AM - 9:00 PM",
      tuesday: "11:00 AM - 9:00 PM",
      wednesday: "11:00 AM - 9:00 PM",
      thursday: "11:00 AM - 9:00 PM",
      friday: "11:00 AM - 10:00 PM",
      saturday: "11:00 AM - 10:00 PM",
      sunday: "12:00 PM - 8:00 PM"
    },
    coordinates: { lat: 29.6522, lng: -82.3345 },
    distanceFromCampus: "0.6 miles",
    priceRange: '$$',
    image: "/images/restaurants/frenchmans.jpg",
    gallery: [],
    specialties: ["Po'boys", "Jambalaya"],
    studentDiscount: "Free beignets with entrée purchase",
    menu: [
      {
        id: 'fs1',
        name: "Shrimp Po'boy",
        description: "Fried shrimp on French bread with lettuce, tomatoes, remoulade",
        price: 11.99,
        category: "Po'boys",
        isPopular: true
      }
    ],
    popularItems: ["Shrimp Po'boy", "Jambalaya"]
  },
  {
    id: '18',
    name: "Primo Hoagies",
    slug: 'primo-hoagies',
    cuisine: ['Sandwiches', 'Italian', 'Deli'],
    rating: 4.8,
    reviewCount: 612,
    description: "Award-winning hoagies with premium meats and cheeses on fresh-baked rolls.",
    longDescription: "Primo Hoagies perfects the art of hoagie making with finest meats and cheeses, sliced fresh daily, and rolls baked in-house.",
    address: "3520 SW Archer Rd, Gainesville, FL 32608",
    phone: "(352) 555-0118",
    hours: {
      monday: "10:00 AM - 9:00 PM",
      tuesday: "10:00 AM - 9:00 PM",
      wednesday: "10:00 AM - 9:00 PM",
      thursday: "10:00 AM - 9:00 PM",
      friday: "10:00 AM - 9:00 PM",
      saturday: "10:00 AM - 9:00 PM",
      sunday: "10:00 AM - 8:00 PM"
    },
    coordinates: { lat: 29.6341, lng: -82.3678 },
    distanceFromCampus: "2.1 miles",
    priceRange: '$$',
    image: "/images/restaurants/primo-hoagies.jpg",
    gallery: [],
    specialties: ["Italian hoagies", "Cheese steaks"],
    studentDiscount: "10% off any hoagie",
    menu: [
      {
        id: 'ph1',
        name: "The Italian",
        description: "Capicola, salami, pepperoni, provolone, lettuce, tomato, onions",
        price: 11.99,
        category: "Hoagies",
        isPopular: true
      }
    ],
    popularItems: ["The Italian", "Cheese Steak"]
  },
  {
    id: '19',
    name: "Tinker Latin Food",
    slug: 'tinker-latin-food',
    cuisine: ['Latin American', 'Venezuelan', 'Colombian'],
    rating: 4.6,
    reviewCount: 334,
    description: "Authentic Latin American street food with bold flavors and generous portions.",
    longDescription: "Tinker Latin Food celebrates diverse Latin American cuisines from Venezuelan arepas to Colombian empanadas, made fresh daily with traditional recipes.",
    address: "1830 W University Ave, Gainesville, FL 32603",
    phone: "(352) 555-0119",
    hours: {
      monday: "11:00 AM - 9:00 PM",
      tuesday: "11:00 AM - 9:00 PM",
      wednesday: "11:00 AM - 9:00 PM",
      thursday: "11:00 AM - 9:00 PM",
      friday: "11:00 AM - 10:00 PM",
      saturday: "11:00 AM - 10:00 PM",
      sunday: "12:00 PM - 8:00 PM"
    },
    coordinates: { lat: 29.6518, lng: -82.3445 },
    distanceFromCampus: "1.4 miles",
    priceRange: '$',
    image: "/images/restaurants/tinker-latin.jpg", 
    gallery: [],
    specialties: ["Arepas", "Empanadas"],
    studentDiscount: "Free empanada with entrée",
    menu: [
      {
        id: 'tl1',
        name: "Reina Pepiada Arepa",
        description: "Corn pocket filled with chicken salad, avocado, mayo",
        price: 8.99,
        category: "Arepas",
        isPopular: true
      }
    ],
    popularItems: ["Reina Pepiada", "Empanadas"]
  },
  {
    id: '20',
    name: "Tela",
    slug: 'tela',
    cuisine: ['Asian Fusion', 'Sushi', 'Modern'],
    rating: 4.7,
    reviewCount: 445,
    description: "Modern Asian fusion with creative sushi rolls and innovative dishes.",
    longDescription: "Tela combines traditional Asian techniques with modern culinary innovation, creating artistic sushi rolls and fusion dishes that blend flavors from across Asia.",
    address: "12 W University Ave, Gainesville, FL 32601",
    phone: "(352) 555-0120",
    hours: {
      monday: "11:30 AM - 10:00 PM",
      tuesday: "11:30 AM - 10:00 PM", 
      wednesday: "11:30 AM - 10:00 PM",
      thursday: "11:30 AM - 10:00 PM",
      friday: "11:30 AM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM"
    },
    coordinates: { lat: 29.6526, lng: -82.3252 },
    distanceFromCampus: "0.2 miles",
    priceRange: '$$$',
    image: "/images/restaurants/tela.jpg",
    gallery: [],
    specialties: ["Specialty rolls", "Ramen bowls"],
    studentDiscount: "15% off lunch specials",
    menu: [
      {
        id: 'te1',
        name: "Dragon Roll",
        description: "Shrimp tempura, cucumber topped with eel, avocado, eel sauce",
        price: 14.99,
        category: "Specialty Rolls",
        isPopular: true
      }
    ],
    popularItems: ["Dragon Roll", "Korean BBQ Bowl"]
  },
  {
    id: '21',
    name: "Gator Bodega", 
    slug: 'gator-bodega',
    cuisine: ['Convenience', 'Sandwiches', 'Snacks'],
    rating: 4.3,
    reviewCount: 267,
    description: "Campus convenience store with made-to-order sandwiches and late-night snacks.",
    longDescription: "Gator Bodega is your one-stop shop for quick meals, snacks, and essentials with made-to-order sandwiches and grab-and-go options.",
    address: "1614 W University Ave, Gainesville, FL 32603",
    phone: "(352) 555-0121",
    hours: {
      monday: "7:00 AM - 12:00 AM",
      tuesday: "7:00 AM - 12:00 AM",
      wednesday: "7:00 AM - 12:00 AM",
      thursday: "7:00 AM - 12:00 AM",
      friday: "7:00 AM - 2:00 AM",
      saturday: "8:00 AM - 2:00 AM",
      sunday: "8:00 AM - 12:00 AM"
    },
    coordinates: { lat: 29.6519, lng: -82.3408 },
    distanceFromCampus: "1.0 miles",
    priceRange: '$',
    image: "/images/restaurants/gator-bodega.jpg",
    gallery: [],
    specialties: ["Custom sandwiches", "Late night snacks"],
    studentDiscount: "5% off with student ID",
    menu: [
      {
        id: 'gb1',
        name: "Build Your Own Sub",
        description: "Choose bread, meat, cheese, veggies, and condiments",
        price: 7.99,
        category: "Sandwiches",
        isPopular: true
      }
    ],
    popularItems: ["Custom Subs", "Energy Drinks"]
  }
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
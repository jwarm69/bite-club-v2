import { loadStripe } from '@stripe/stripe-js'

// Initialize Stripe
export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

// Credit package configurations
export const creditPackages = [
  {
    id: 'starter',
    name: 'Starter Pack',
    amount: 25,
    price: 25,
    bonus_credits: 0,
    description: 'Perfect for trying out Bite Club',
    is_popular: false,
    priceId: 'price_starter_pack' // Stripe Price ID
  },
  {
    id: 'popular',
    name: 'Popular Pack',
    amount: 50,
    price: 45,
    bonus_credits: 5,
    description: 'Most popular choice - save $5!',
    is_popular: true,
    priceId: 'price_popular_pack'
  },
  {
    id: 'value',
    name: 'Value Pack',
    amount: 100,
    price: 85,
    bonus_credits: 15,
    description: 'Best value - save $15!',
    is_popular: false,
    priceId: 'price_value_pack'
  },
  {
    id: 'premium',
    name: 'Premium Pack',
    amount: 200,
    price: 160,
    bonus_credits: 40,
    description: 'Maximum savings - save $40!',
    is_popular: false,
    priceId: 'price_premium_pack'
  }
]

export interface CreatePaymentIntentData {
  creditPackageId: string
  userId: string
  userEmail: string
}

export async function createPaymentIntent(data: CreatePaymentIntentData) {
  const response = await fetch('/api/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to create payment intent')
  }

  return response.json()
}

export function getCreditPackageById(id: string) {
  return creditPackages.find(pkg => pkg.id === id)
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}
# MVP Integration Guide

This marketing site is designed to seamlessly integrate with your existing Bite Club MVP. Here's how to connect them:

## 🚀 Quick Setup

1. **Copy environment variables:**
   ```bash
   cp .env.example .env.local
   ```

2. **Update `.env.local` with your MVP details:**
   ```env
   # MVP API Configuration
   NEXT_PUBLIC_MVP_API_URL=https://your-mvp-api.com
   NEXT_PUBLIC_MVP_API_KEY=your_actual_api_key

   # MVP App URLs
   NEXT_PUBLIC_MVP_LOGIN_URL=https://your-mvp-app.com/login
   NEXT_PUBLIC_MVP_SIGNUP_URL=https://your-mvp-app.com/signup
   NEXT_PUBLIC_MVP_DASHBOARD_URL=https://your-mvp-app.com/dashboard
   NEXT_PUBLIC_MVP_ORDER_URL=https://your-mvp-app.com/order

   # Enable live data in production
   NEXT_PUBLIC_ENABLE_LIVE_DATA=true
   ```

3. **Test the integration:**
   ```bash
   npm run dev
   ```

## 📡 API Integration

### Restaurant Data
The marketing site can pull live restaurant data from your MVP's API. Expected endpoints:

```
GET /api/v1/restaurants          # List all restaurants
GET /api/v1/restaurants/:id      # Get restaurant by ID  
GET /api/v1/restaurants/slug/:slug # Get restaurant by slug
```

### Statistics
Live stats are displayed on the homepage from:

```
GET /api/v1/stats                # Get site statistics
```

Expected response format:
```json
{
  "total_users": 10000,
  "total_orders": 50000,
  "total_savings": 125000,
  "active_restaurants": 25,
  "avg_savings_per_meal": 2.50,
  "avg_pickup_time": 5
}
```

## 🔗 User Flow Integration

### Call-to-Action Buttons
Smart CTA components automatically redirect users to your MVP:

- **"Get Started"** → MVP signup page
- **"Order Now"** → MVP restaurant ordering page
- **"View Menu"** → MVP restaurant detail page

### URL Parameters
UTM parameters are automatically added for tracking:
- `utm_source=marketing_site`
- `utm_medium=website`
- `source=homepage-hero` (or other source identifiers)

## 🎨 Branding Consistency

### Design System
The marketing site uses CSS variables that can be updated to match your MVP:

```css
:root {
  --bite-club-green: #22c55e;
  --bite-club-green-dark: #16a34a;
  --accent-orange: #f97316;
}
```

### Component Library
Reusable components are available for consistent styling:
- `SmartCTA` - Context-aware call-to-action buttons
- `Navigation` - Responsive navigation header
- `Footer` - Branded footer with contact info

## ⚙️ Configuration

### Feature Flags
Control integration features via environment variables:

```env
NEXT_PUBLIC_ENABLE_LIVE_DATA=true   # Pull data from MVP API
NEXT_PUBLIC_DEBUG_API=true          # Log API calls for debugging
```

### Fallback Behavior
- **Live data fails** → Falls back to static restaurant data
- **API unavailable** → Shows cached statistics
- **MVP offline** → Marketing site continues working independently

## 🔧 Customization

### Restaurant Data Structure
If your MVP uses different field names, update the transformation in:
- `src/hooks/useRestaurants.ts`
- `src/hooks/useStats.ts`

### URL Structure
Update MVP URLs in `src/lib/config.ts` to match your routing:

```typescript
restaurant: (slug: string) => `${baseUrl}/restaurants/${slug}/order`
```

### Authentication
The integration helper supports various auth methods:
- JWT tokens
- Session cookies
- OAuth redirects

Update `src/lib/integration.ts` with your auth logic.

## 📊 Analytics Integration

### Google Analytics
```env
NEXT_PUBLIC_GA_ID=GA-XXXXXXXXX
```

### Mixpanel
```env  
NEXT_PUBLIC_MIXPANEL_TOKEN=your_token
```

## 🧪 Testing

### Development Mode
By default, live data is disabled in development:
- Uses static restaurant data
- No API calls to MVP
- Faster development iteration

### Production Mode
Enable live integration:
```env
NEXT_PUBLIC_ENABLE_LIVE_DATA=true
```

### Testing API Connection
```bash
# Test API endpoints
curl https://your-mvp-api.com/v1/restaurants

# Check CORS headers
curl -H "Origin: https://biteclubmealplan.com" \
     -H "Access-Control-Request-Method: GET" \
     -H "Access-Control-Request-Headers: X-Requested-With" \
     -X OPTIONS \
     https://your-mvp-api.com/v1/restaurants
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Set environment variables in Vercel dashboard
vercel env add NEXT_PUBLIC_MVP_API_URL
vercel env add NEXT_PUBLIC_MVP_API_KEY
# ... etc

# Deploy
vercel --prod
```

### Other Platforms
Ensure these environment variables are set:
- All `NEXT_PUBLIC_*` variables for client-side access
- API keys should be kept secure and only used server-side when possible

## 🆘 Troubleshooting

### Common Issues

**API calls failing:**
- Check CORS settings on MVP API
- Verify API key permissions
- Test endpoints directly

**Redirects not working:**
- Confirm MVP URLs are correct
- Check for HTTPS requirements
- Test in incognito mode

**Styling inconsistencies:**
- Update CSS variables in `src/app/globals.css`
- Check component props for brand customization

### Debug Mode
Enable detailed logging:
```env
NEXT_PUBLIC_DEBUG_API=true
```

This will log all API calls and responses to the browser console.

## 📋 Checklist

Before going live:

- [ ] MVP API endpoints are working
- [ ] CORS is configured for marketing site domain
- [ ] Environment variables are set correctly
- [ ] User flow from marketing → MVP is smooth
- [ ] Branding is consistent between sites
- [ ] Analytics tracking is working
- [ ] Fallback behavior tested (MVP offline)
- [ ] Mobile responsiveness verified
- [ ] Performance optimization completed

## 🤝 Support

For integration help:
1. Check the browser console for errors
2. Test API endpoints directly  
3. Verify environment configuration
4. Review the integration code in `src/lib/`

---

This marketing site is designed to be a powerful conversion tool that seamlessly hands off to your MVP while maintaining a professional, cohesive user experience.
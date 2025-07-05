# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bite Club V2 is a modern marketing website for a student meal plan service, built with Next.js 15, TypeScript, and Tailwind CSS. The site connects to both a Supabase database for real restaurant/menu data and integrates with an existing MVP application for user actions.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture Overview

### Dual Integration Strategy
The site operates with a hybrid architecture connecting to two backends:

1. **Supabase Database** - Real restaurant and menu data (1300+ menu items)
2. **MVP Application** - User authentication, ordering, and core functionality

### Key Configuration
- **Environment Variables**: Managed through `.env.local` with centralized config in `src/lib/config.ts`
- **Feature Flags**: Toggle between static data and live Supabase data via `NEXT_PUBLIC_ENABLE_LIVE_DATA`
- **Integration URLs**: MVP app URLs configured for seamless handoff from marketing site

### Data Flow Architecture

**Static Generation with Live Data Fallback**:
- Restaurant pages use `generateStaticParams()` to pre-build from Supabase data
- ISR (Incremental Static Regeneration) enabled with 1-hour revalidation
- Graceful degradation to static data if Supabase unavailable

**Smart CTA System**:
- `SmartCTA` component handles MVP integration with UTM tracking
- Automatic URL generation for signup/login/ordering flows
- Source attribution for analytics tracking

### Database Integration

**Supabase Schema Mapping**:
- TypeScript interfaces in `src/lib/supabase.ts` match Prisma schema from MVP
- Services: `restaurantService`, `menuService`, `userService`, `creditService`
- Real-time data fetching with static fallbacks

**Restaurant Pages**:
- Dynamic route `/restaurants/[slug]` supports both static and Supabase restaurants
- Menu transformation from Supabase format to website interface
- Performance optimized for large menu datasets (1300+ items)

### Component Architecture

**Page-Level Components**:
- University-specific messaging (UF-focused)
- Comparison tables against traditional dining options
- Social proof elements with live statistics

**Reusable Components**:
- `Navigation`: Global navigation with integration links
- `SmartCTA`: Intelligent call-to-action with MVP handoff
- `CampusMap`: Interactive campus restaurant locations

### Styling System

**Tailwind CSS with Custom Variables**:
- Brand colors defined in `globals.css` as CSS custom properties
- `--bite-club-green` family for brand consistency
- `--accent-orange` for highlights and CTAs
- Responsive design with mobile-first approach

### Environment Configuration

**Required Environment Variables**:
```bash
# Supabase (for live data)
NEXT_PUBLIC_SUPABASE_URL=https://[project].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[anon_key]
SUPABASE_SERVICE_ROLE_KEY=[service_role_key]

# MVP Integration
NEXT_PUBLIC_MVP_API_URL=https://api.biteclubmealplan.com
NEXT_PUBLIC_MVP_LOGIN_URL=https://app.biteclubmealplan.com/login
NEXT_PUBLIC_MVP_SIGNUP_URL=https://app.biteclubmealplan.com/signup

# Feature Flags
NEXT_PUBLIC_ENABLE_LIVE_DATA=true
NEXT_PUBLIC_DEBUG_API=false
```

### Performance Considerations

**Large Dataset Handling**:
- 1300+ menu items require efficient querying and transformation
- Restaurant pages use server-side data fetching with caching
- Static generation for performance with ISR for freshness

**SEO Optimization**:
- Comprehensive meta tags and OpenGraph data
- University-specific content for local SEO
- Structured data for restaurant listings

### Development Patterns

**Data Transformation**:
- Supabase data transforms to match existing TypeScript interfaces
- Graceful handling of missing or malformed data
- Default values for display consistency

**Error Handling**:
- Database connection failures fall back to static data
- User-friendly error states for failed operations
- Debug mode available via environment variables

**Integration Testing**:
- Test endpoints at `/api/test-db` and `/api/test-env`
- Verification of Supabase connection and data retrieval
- Manual testing required for MVP integration flows

### Deployment Notes

**Vercel Configuration**:
- Auto-deployment from GitHub main branch
- Environment variables must be configured in Vercel dashboard
- Build-time static generation with runtime fallbacks

**Domain Strategy**:
- Staging: `new.biteclubmealplan.com`
- Production: `biteclubmealplan.com`
- MVP app: `app.biteclubmealplan.com`

## University-Specific Customization

The site is currently optimized for University of Florida (UF) with:
- UF-specific messaging and comparisons
- Gainesville restaurant focus
- Competition analysis against UF dining halls
- Local terminology and references

To adapt for other universities, update messaging in homepage components and comparison tables.
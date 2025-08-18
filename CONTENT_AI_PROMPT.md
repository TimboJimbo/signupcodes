# AI Content Optimization Prompt - SignUpCodes Affiliate Site

## Your Mission
Transform this affiliate deals website into a high-converting sales machine by replacing placeholder content with compelling, real product data optimized for affiliate commissions.

## What You're Working With
- **Fully built React/TypeScript affiliate site** with conversion-optimized design
- **Professional UI** with sales psychology built-in (urgency colors, trust signals, CTAs)
- **Mobile-responsive** product cards and category grids
- **Ready for content** - just needs real products and copy

## Your Primary Task: Update `src/data/sampleProducts.ts`

Replace the 6 sample products with **20+ high-converting products** using this exact structure:

```typescript
{
  id: "unique-id",
  title: "Benefit-Focused Product Title - Key Feature + Bonus",
  image: "https://high-quality-image-url",
  price: "$XX.XX",
  originalPrice: "$XX.XX", // Show significant savings
  rating: 4.7, // High ratings only (4.5+)
  reviews: 8934, // Substantial social proof
  deal: "FLASH SALE: 45% OFF", // Urgency language
  affiliate_url: "https://affiliate-link",
  category: "category-slug",
  isFeatured: true // Mark top 3-5 products
}
```

## Product Selection Criteria
**ONLY choose products with:**
- High affiliate commissions (3%+ minimum)
- Strong ratings (4.5+ stars)
- High review counts (1000+ reviews)
- Significant discounts (20%+ off)
- Broad appeal (trending/popular items)

## Content Psychology Rules
**Every product title must:**
- Lead with the brand name for trust
- Include the key benefit/feature
- Add urgency or exclusivity when possible
- Stay under 60 characters for mobile

**Deal badges must create urgency:**
- "LIMITED TIME: 40% OFF"
- "FLASH SALE: Save $50"
- "TODAY ONLY: 35% OFF"
- "LAST CHANCE: 60% OFF"

## Required Categories (5+ products each):
1. **tech-gadgets** - AirPods, smart watches, phone accessories
2. **home-kitchen** - Popular appliances, organization tools
3. **health-fitness** - Fitness trackers, supplements, wellness
4. **travel-lifestyle** - Luggage, travel gear, lifestyle items

## Secondary Updates Needed:

### `src/components/layout/CategoryGrid.tsx`
Update category descriptions with benefit language:
```typescript
{
  name: "Tech & Gadgets",
  description: "Latest tech deals - Save up to 60% on top brands",
  count: "50+ deals" // Use motivating numbers
}
```

### `src/components/layout/HeroSection.tsx`
Enhance the headline and social proof numbers with realistic, compelling metrics.

## Success Metrics to Optimize For:
- **Click-through rates** on affiliate links
- **Mobile conversion** (60% of traffic)
- **Category distribution** (balanced product spread)
- **Average order value** through product selection

## Critical Requirements:
✅ **Real affiliate links** - No placeholder URLs  
✅ **High-quality images** - 400x400px minimum  
✅ **Mobile-optimized titles** - Test on mobile view  
✅ **Compelling copy** - Every word drives action  
✅ **Proper categorization** - Logical product grouping  

## Your Output Should Include:
1. **20+ optimized products** across all categories
2. **Updated category descriptions** with benefit language
3. **Enhanced hero messaging** with realistic social proof
4. **Mobile-tested** titles and descriptions

## Remember:
You're not just updating content - you're building a conversion machine. Every product, every word, every number should be chosen to maximize affiliate clicks and sales.

**Think like a direct-response marketer. Make it irresistible to click.**
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Category {
  name: string;
  description: string;
  icon: string;
  count: number;
  slug: string;
}

const categories: Category[] = [
  {
    name: "Tech & Gadgets",
    description: "Save up to 60% on top tech brands - AirPods, smartphones & more",
    icon: "📱",
    count: 12,
    slug: "tech-gadgets"
  },
  {
    name: "Home & Kitchen",
    description: "Transform your home for less - Premium appliances up to 50% OFF",
    icon: "🏠",
    count: 8,
    slug: "home-kitchen"
  },
  {
    name: "Health & Fitness",
    description: "Reach your goals faster - Fitness gear & supplements 40% OFF",
    icon: "💪",
    count: 4,
    slug: "health-fitness"
  },
  {
    name: "Beauty & Personal Care",
    description: "Look amazing for less - Skincare & beauty up to 70% OFF",
    icon: "✨",
    count: 6,
    slug: "beauty-personal-care"
  },
  {
    name: "Books & Education",
    description: "Learn & grow smarter - Courses & books up to 80% OFF",
    icon: "📚",
    count: 2,
    slug: "books-education"
  },
  {
    name: "Appliances",
    description: "Smart home living - Appliances & gadgets up to 45% OFF",
    icon: "⚡",
    count: 3,
    slug: "appliances"
  }
];

export const CategoryGrid = () => {
  const handleCategoryClick = (categorySlug: string) => {
    // Scroll to products section and trigger category filter
    const productsSection = document.querySelector('[data-products-section]');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
      // Trigger category filter - this would need to be connected to the main page filter
      window.dispatchEvent(new CustomEvent('filterByCategory', { detail: categorySlug }));
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Shop by Category</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover the best deals and sign-up bonuses across all categories. 
          Our experts curate only the most trusted offers.
        </p>
      </div>
      
      <div className="product-grid">
        {categories.map((category) => (
          <div
            key={category.slug}
            className="block cursor-pointer"
            onClick={() => handleCategoryClick(category.slug)}
          >
            <Card className="card-hover h-full">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl mb-3">{category.icon}</div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
                
                <Badge variant="secondary" className="mt-4">
                  {category.count} deals available
                </Badge>
                
                <div className="pt-2">
                  <span className="text-sm font-medium text-primary group-hover:text-primary-hover transition-colors">
                    Browse {category.name} →
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
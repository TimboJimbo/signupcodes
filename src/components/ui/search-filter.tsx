import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onCategoryFilter: (category: string) => void;
  onPriceFilter: (range: string) => void;
  onClearFilters: () => void;
  activeFilters: {
    search: string;
    category: string;
    priceRange: string;
  };
}

export const SearchFilter = ({ 
  onSearch, 
  onCategoryFilter, 
  onPriceFilter, 
  onClearFilters,
  activeFilters 
}: SearchFilterProps) => {
  const [searchQuery, setSearchQuery] = useState(activeFilters.search);

  const categories = [
    { id: "tech-gadgets", name: "Tech & Electronics", icon: "💻" },
    { id: "home-kitchen", name: "Home & Kitchen", icon: "🏠" },
    { id: "beauty-personal-care", name: "Beauty & Care", icon: "💄" },
    { id: "health-fitness", name: "Health & Fitness", icon: "💪" },
    { id: "books-education", name: "Books", icon: "📚" }
  ];

  const priceRanges = [
    { id: "under-25", name: "Under $25", icon: "💰" },
    { id: "25-50", name: "$25 - $50", icon: "💵" },
    { id: "50-100", name: "$50 - $100", icon: "💸" },
    { id: "over-100", name: "Over $100", icon: "🤑" }
  ];

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const hasActiveFilters = activeFilters.search || activeFilters.category || activeFilters.priceRange;

  return (
    <div className="bg-white/80 backdrop-blur-sm border border-border rounded-2xl p-6 space-y-6 shadow-lg">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search for products, brands, or deals..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 h-12 text-base border-primary/20 focus:border-primary"
        />
      </div>

      {/* Quick Categories */}
      <div className="space-y-3">
        <h3 className="font-semibold text-sm text-muted-foreground flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Shop by Category
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilters.category === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryFilter(category.id)}
              className="text-xs hover:scale-105 transition-transform"
            >
              <span className="mr-1">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Price Filters */}
      <div className="space-y-3">
        <h3 className="font-semibold text-sm text-muted-foreground">Price Range</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {priceRanges.map((range) => (
            <Button
              key={range.id}
              variant={activeFilters.priceRange === range.id ? "default" : "outline"}
              size="sm"
              onClick={() => onPriceFilter(range.id)}
              className="text-xs hover:scale-105 transition-transform"
            >
              <span className="mr-1">{range.icon}</span>
              {range.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Active Filters & Clear */}
      {hasActiveFilters && (
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {activeFilters.search && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Search: "{activeFilters.search}"
                <X className="w-3 h-3 cursor-pointer" onClick={() => handleSearch("")} />
              </Badge>
            )}
            {activeFilters.category && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {categories.find(c => c.id === activeFilters.category)?.name}
                <X className="w-3 h-3 cursor-pointer" onClick={() => onCategoryFilter("")} />
              </Badge>
            )}
            {activeFilters.priceRange && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {priceRanges.find(p => p.id === activeFilters.priceRange)?.name}
                <X className="w-3 h-3 cursor-pointer" onClick={() => onPriceFilter("")} />
              </Badge>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={onClearFilters}>
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
};
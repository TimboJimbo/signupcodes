import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Zap, Award, Clock, ShoppingCart } from "lucide-react";

interface QuickActionBarProps {
  onQuickFilter: (filter: string) => void;
  productCount: number;
}

export const QuickActionBar = ({ onQuickFilter, productCount }: QuickActionBarProps) => {
  const quickFilters = [
    { id: "featured", name: "🔥 Featured Deals", icon: Award, color: "destructive" },
    { id: "under-25", name: "💰 Under $25", icon: TrendingUp, color: "success" },
    { id: "trending", name: "⚡ Trending Now", icon: Zap, color: "primary" },
    { id: "new", name: "🆕 Just Added", icon: Clock, color: "accent" }
  ];

  return (
    <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-3">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              {productCount} Deals Available
            </Badge>
            
            <div className="hidden md:flex items-center space-x-2">
              {quickFilters.map((filter) => (
                <Button
                  key={filter.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => onQuickFilter(filter.id)}
                  className="text-xs hover:scale-105 transition-transform"
                >
                  {filter.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="cta" size="sm" className="animate-pulse-cta">
              🛒 Shop All Deals
            </Button>
          </div>
        </div>

        {/* Mobile Quick Filters */}
        <div className="md:hidden mt-3 flex flex-wrap gap-2">
          {quickFilters.map((filter) => (
            <Button
              key={filter.id}
              variant="outline"
              size="sm"
              onClick={() => onQuickFilter(filter.id)}
              className="text-xs"
            >
              {filter.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
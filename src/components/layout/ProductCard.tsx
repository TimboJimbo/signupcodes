import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Star } from "lucide-react";
import { trackAffiliateClick } from "@/lib/affiliate";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price?: string;
  originalPrice?: string;
  rating?: number;
  reviews?: number;
  deal?: string;
  affiliate_url: string;
  category: string;
  isFeatured?: boolean;
}

export const ProductCard = ({ 
  id,
  title, 
  image, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  deal, 
  affiliate_url,
  category,
  isFeatured = false 
}: ProductCardProps) => {
  const hasDiscount = originalPrice && price !== originalPrice;
  
  const handleAffiliateClick = () => {
    trackAffiliateClick(id, title, category);
  };
  
  return (
    <Card className={`card-hover animate-fade-in group ${isFeatured ? 'md:col-span-2 border-success/20' : ''}`}>
      <CardContent className="p-5 space-y-4">
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-contain bg-muted/50 rounded-lg transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {deal && (
            <Badge 
              variant="destructive" 
              className="absolute top-3 left-3 bg-gradient-to-r from-destructive to-red-600 text-destructive-foreground font-bold text-sm px-3 py-1 animate-pulse-cta"
            >
              {deal}
            </Badge>
          )}
        </div>
        
        <div className="space-y-3">
          <h3 className="font-bold leading-tight line-clamp-2 text-card-foreground text-lg group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          
          {rating && (
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {rating} ({reviews?.toLocaleString()} reviews)
              </span>
            </div>
          )}
          
          {price && (
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-success">{price}</span>
              {hasDiscount && (
                <span className="text-lg text-muted-foreground line-through">
                  {originalPrice}
                </span>
              )}
              {hasDiscount && (
                <Badge variant="outline" className="bg-success-light text-success border-success/30 font-bold">
                  SAVE {Math.round((parseFloat(originalPrice!.slice(1)) - parseFloat(price.slice(1))) / parseFloat(originalPrice!.slice(1)) * 100)}%
                </Badge>
              )}
            </div>
          )}
        </div>
        
        <Button 
          variant="cta" 
          size="lg" 
          className="w-full text-lg font-bold py-3 transition-all duration-200 hover:scale-105" 
          asChild
        >
          <a 
            href={affiliate_url} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleAffiliateClick}
            className="inline-flex items-center justify-center space-x-2"
          >
            <span>🛒 Get Deal Now</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </Button>
        
        <div className="flex items-center justify-center space-x-1 pt-2">
          <span className="text-xs text-muted-foreground">
            ✓ Verified deal • Commission earned
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
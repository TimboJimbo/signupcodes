import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-success/5 py-16 md:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-50"></div>
      
      <div className="container-custom relative">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* Urgency Badge */}
          <Badge variant="destructive" className="text-sm px-6 py-2 bg-gradient-to-r from-destructive to-red-600 animate-pulse font-bold text-base">
            🔥 NEW: Fresh deals added regularly!
          </Badge>
          
          {/* Hero Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
              Find the <span className="text-transparent bg-gradient-to-r from-primary via-orange-500 to-red-500 bg-clip-text animate-pulse-cta">BEST DEALS</span> 
              & <span className="text-success">Biggest Savings</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <strong className="text-primary">Expert-curated deals</strong> with up to <strong className="text-success">80% OFF</strong>. 
              Discover exclusive offers and sign-up bonuses from trusted retailers.
            </p>
            
            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">★★★★★</span>
                <span className="font-medium">Trusted by thousands of shoppers</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-muted-foreground rounded-full"></div>
              <span className="font-medium">💰 Start saving today</span>
            </div>
          </div>
          
          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="cta" size="lg" className="text-xl px-12 py-4 h-auto shadow-2xl animate-pulse">
              💸 Browse Today's Hottest Deals
            </Button>
            <Button variant="trust" size="lg" className="text-lg px-8 py-3 h-auto">
              🔍 How We Find These Deals
            </Button>
          </div>
          
          {/* Urgency Counter */}
          <div className="bg-warning/10 border-2 border-warning/30 rounded-xl p-4 max-w-md mx-auto">
            <p className="text-warning font-bold text-lg">
              🎯 Don't miss out on today's featured deals!
            </p>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="flex items-center justify-center space-x-3 p-4 bg-trust-light rounded-xl border border-trust/20">
              <Shield className="w-8 h-8 text-trust" />
              <div className="text-left">
                <div className="text-sm font-bold text-trust">100% Transparent</div>
                <div className="text-xs text-muted-foreground">All affiliate links disclosed</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-success-light rounded-xl border border-success/20">
              <TrendingUp className="w-8 h-8 text-success" />
              <div className="text-left">
                <div className="text-sm font-bold text-success">Updated Regularly</div>
                <div className="text-xs text-muted-foreground">Fresh deals from top retailers</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-primary/10 rounded-xl border border-primary/20">
              <Zap className="w-8 h-8 text-primary" />
              <div className="text-left">
                <div className="text-sm font-bold text-primary">Expert Curated</div>
                <div className="text-xs text-muted-foreground">Only the best deals make it</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
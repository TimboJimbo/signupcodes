import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";

export const FtcDisclosure = () => {
  return (
    <section className="py-8 bg-muted/50 border-t border-border">
      <div className="container-custom">
        <div className="flex items-start space-x-3 max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div className="space-y-2">
            <Badge variant="secondary" className="text-xs">
              FTC Disclosure
            </Badge>
            <div className="text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong>Affiliate Disclosure:</strong> SignUpCodes is a participant in various affiliate programs, 
                including the Amazon Services LLC Associates Program. This means we may earn a commission when you 
                click on or make purchases via links on our site, at no additional cost to you. 
              </p>
              <p className="mt-2">
                We only recommend products and deals we believe will add value to our readers. Our editorial content 
                is not influenced by affiliate commissions. Prices and availability are subject to change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
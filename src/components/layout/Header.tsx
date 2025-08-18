import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">
              SignUp<span className="text-accent">Codes</span>
            </h1>
            <Badge variant="secondary" className="text-xs">
              Trusted Deals
            </Badge>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Contact
            </Link>
            <Link to="/privacy-policy" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Privacy
            </Link>
            <Button variant="cta" size="sm">
              Best Deals
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
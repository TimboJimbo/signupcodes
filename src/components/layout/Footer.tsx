import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted border-t border-border mt-12">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <h3 className="text-xl font-bold text-primary">
                SignUp<span className="text-accent">Codes</span>
              </h3>
              <Badge variant="secondary" className="text-xs">
                Trusted
              </Badge>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted source for the best deals, sign-up bonuses, and product recommendations. 
              We help you save money with honest, expert guidance.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <div className="space-y-2 text-sm">
              <span className="block text-muted-foreground">Tech & Gadgets</span>
              <span className="block text-muted-foreground">Home & Kitchen</span>
              <span className="block text-muted-foreground">Health & Fitness</span>
              <span className="block text-muted-foreground">Beauty & Personal Care</span>
            </div>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-muted-foreground hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-accent transition-colors">
                Contact Us
              </Link>
              <Link to="/link-tester" className="block text-muted-foreground hover:text-accent transition-colors">
                Link Tester
              </Link>
              <span className="block text-muted-foreground">Partner Program</span>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2 text-sm">
              <Link to="/privacy-policy" className="block text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="block text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/dmca-policy" className="block text-muted-foreground hover:text-accent transition-colors">
                DMCA Policy
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-accent transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        <hr className="my-8 border-border" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} SignUpCodes. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            <strong>Affiliate Disclosure:</strong> We earn from qualifying purchases as Amazon Associates and other affiliate programs.
          </p>
        </div>
      </div>
    </footer>
  );
};
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive exclusive deals and updates in your inbox.",
    });
    
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-success/5">
      <div className="container-custom">
        <Card className="max-w-2xl mx-auto border-primary/20 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Gift className="w-8 h-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">Never Miss a Deal!</CardTitle>
            <CardDescription className="text-lg">
              Get exclusive deals, early access to sales, and insider tips delivered to your inbox.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="h-12 px-8"
                  disabled={isLoading}
                >
                  {isLoading ? "Subscribing..." : "Get Deals"}
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Exclusive deals first</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>No spam, unsubscribe anytime</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Weekly deal roundup</span>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
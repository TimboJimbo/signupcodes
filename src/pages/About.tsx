import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Clock, Shield, Zap, CheckCircle, Users, Search, ShoppingCart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">About SignUpCodes</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We Navigate Amazon<br />
            <span className="text-primary">So You Don't Have To</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tired of getting lost in Amazon's endless product maze? We cut through the clutter, 
            find the real deals, and bring them straight to you. No more endless scrolling, 
            fake reviews, or decision paralysis.
          </p>
        </div>

        {/* The Problem Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-destructive/10 to-orange/10 border-destructive/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-destructive">The Amazon Problem</CardTitle>
              <CardDescription className="text-lg">
                Shopping on Amazon has become overwhelming...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Search className="w-4 h-4 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Information Overload</h3>
                      <p className="text-sm text-muted-foreground">Millions of products, thousands of reviews, endless variations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-4 h-4 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Time Wasted</h3>
                      <p className="text-sm text-muted-foreground">Hours spent comparing prices, reading reviews, checking deals</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="w-4 h-4 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Fake Reviews</h3>
                      <p className="text-sm text-muted-foreground">Hard to distinguish genuine reviews from paid promotions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <ShoppingCart className="w-4 h-4 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Decision Paralysis</h3>
                      <p className="text-sm text-muted-foreground">Too many choices lead to poor decisions or no purchase at all</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Our Solution Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Solution: Curated Shopping Made Simple</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We do the hard work so you can shop with confidence. Every product is hand-picked, 
              verified, and presented with honest information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Expert Curation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We research thousands of products to find only the best deals worth your time and money.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <CardTitle className="text-lg">Verified Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Every product meets our quality standards with genuine reviews and proven track records.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-lg">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Find what you need in seconds, not hours. Our search and filters get you to the right product instantly.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-trust" />
                </div>
                <CardTitle className="text-lg">100% Transparent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Clear affiliate disclosure on every deal. We earn when you buy, so we're motivated to find you the best products.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-success/5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">How We Make Shopping Effortless</CardTitle>
              <CardDescription className="text-lg">
                Our 4-step process to bring you only the best deals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">1</div>
                  <h3 className="font-semibold mb-2">Research</h3>
                  <p className="text-sm text-muted-foreground">We scan thousands of products across Amazon daily</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">2</div>
                  <h3 className="font-semibold mb-2">Verify</h3>
                  <p className="text-sm text-muted-foreground">Check ratings, reviews, and seller reputation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">3</div>
                  <h3 className="font-semibold mb-2">Curate</h3>
                  <p className="text-sm text-muted-foreground">Select only the best deals that offer real value</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-trust rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">4</div>
                  <h3 className="font-semibold mb-2">Present</h3>
                  <p className="text-sm text-muted-foreground">Organize deals clearly with honest descriptions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Trust & Stats Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Smart Shoppers</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of people who've discovered a better way to find great deals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2019</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Products Reviewed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Partner Retailers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-trust mb-2">4.8★</div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-success/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Shop Smarter?</CardTitle>
              <CardDescription className="text-lg">
                Stop wasting time on Amazon. Start finding better deals faster.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Browse All Deals
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
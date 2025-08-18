import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Shield, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your question or feedback..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">General Inquiries</h3>
                    <p className="text-muted-foreground">hello@signupcodes.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Partnership Opportunities</h3>
                    <p className="text-muted-foreground">partnerships@signupcodes.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Press & Media</h3>
                    <p className="text-muted-foreground">press@signupcodes.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please mark your subject line with "URGENT".
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Legal Matters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <h3 className="font-semibold mb-1">DMCA Notices</h3>
                    <p className="text-sm text-muted-foreground">dmca@signupcodes.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Privacy Concerns</h3>
                    <p className="text-sm text-muted-foreground">privacy@signupcodes.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Legal Issues</h3>
                    <p className="text-sm text-muted-foreground">legal@signupcodes.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { AffiliateLinkTester } from "@/components/ui/affiliate-link-tester";

export default function LinkTester() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Affiliate Link Testing</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use this tool to verify that your affiliate links are working correctly and contain your Amazon Associate ID.
          </p>
        </div>
        
        <AffiliateLinkTester />
      </div>
    </div>
  );
}
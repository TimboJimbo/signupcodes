import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { sampleProducts } from "@/data/sampleProducts";

interface TestResult {
  productId: string;
  title: string;
  url: string;
  status: 'pending' | 'success' | 'error';
  hasAffiliateCode: boolean;
  responseTime?: number;
}

export const AffiliateLinkTester = () => {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const testAffiliateLink = async (product: any): Promise<TestResult> => {
    const startTime = Date.now();
    const result: TestResult = {
      productId: product.id,
      title: product.title,
      url: product.affiliate_url,
      status: 'pending',
      hasAffiliateCode: product.affiliate_url.includes('tag=signupcodes-20')
    };

    try {
      // Simple URL validation
      new URL(product.affiliate_url);
      
      // Check if it's an Amazon URL with our affiliate code
      if (product.affiliate_url.includes('amazon.com') && 
          product.affiliate_url.includes('tag=signupcodes-20')) {
        result.status = 'success';
        result.responseTime = Date.now() - startTime;
      } else {
        result.status = 'error';
      }
    } catch (error) {
      result.status = 'error';
    }

    return result;
  };

  const runAllTests = async () => {
    setIsRunning(true);
    setTestResults([]);

    const results: TestResult[] = [];
    
    // Test first 10 products to avoid overwhelming
    const productsToTest = sampleProducts.slice(0, 10);
    
    for (const product of productsToTest) {
      const result = await testAffiliateLink(product);
      results.push(result);
      setTestResults([...results]);
      
      // Small delay between tests
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    setIsRunning(false);
  };

  const successCount = testResults.filter(r => r.status === 'success').length;
  const errorCount = testResults.filter(r => r.status === 'error').length;

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ExternalLink className="w-5 h-5" />
          Affiliate Link Tester
        </CardTitle>
        <CardDescription>
          Test your affiliate links to ensure they're working correctly with your Amazon Associate ID
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              onClick={runAllTests} 
              disabled={isRunning}
              className="flex items-center gap-2"
            >
              {isRunning ? <Clock className="w-4 h-4 animate-spin" /> : <ExternalLink className="w-4 h-4" />}
              {isRunning ? "Testing..." : "Test Links"}
            </Button>
            
            {testResults.length > 0 && (
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="flex items-center gap-1 text-green-600">
                  <CheckCircle className="w-3 h-3" />
                  {successCount} Passed
                </Badge>
                {errorCount > 0 && (
                  <Badge variant="destructive" className="flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errorCount} Failed
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Test Results */}
        {testResults.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-semibold">Test Results</h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {testResults.map((result) => (
                <div key={result.productId} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-sm truncate max-w-xs">{result.title}</div>
                    <div className="text-xs text-muted-foreground truncate max-w-lg">{result.url}</div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {result.hasAffiliateCode ? (
                      <Badge variant="secondary" className="text-xs text-green-600">
                        Affiliate ID ✓
                      </Badge>
                    ) : (
                      <Badge variant="destructive" className="text-xs">
                        No Affiliate ID
                      </Badge>
                    )}
                    
                    {result.status === 'success' && (
                      <Badge variant="secondary" className="text-xs text-green-600">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Valid
                      </Badge>
                    )}
                    {result.status === 'error' && (
                      <Badge variant="destructive" className="text-xs">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Error
                      </Badge>
                    )}
                    {result.status === 'pending' && (
                      <Badge variant="secondary" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        Testing...
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Testing Instructions:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Click "Test Links" to validate your first 10 affiliate URLs</li>
            <li>• Ensure all links contain your Amazon Associate ID: signupcodes-20</li>
            <li>• Manually click a few links to verify they redirect to Amazon correctly</li>
            <li>• Check that products are still available and prices are current</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
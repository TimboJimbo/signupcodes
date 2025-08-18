import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DmcaPolicy from "./pages/DmcaPolicy";
import Contact from "./pages/Contact";
import LinkTester from "./pages/LinkTester";
import NotFound from "./pages/NotFound";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          } />
          <Route path="/privacy-policy" element={
            <>
              <Header />
              <PrivacyPolicy />
              <Footer />
            </>
          } />
          <Route path="/terms-of-service" element={
            <>
              <Header />
              <TermsOfService />
              <Footer />
            </>
          } />
          <Route path="/dmca-policy" element={
            <>
              <Header />
              <DmcaPolicy />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/link-tester" element={
            <>
              <Header />
              <LinkTester />
              <Footer />
            </>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

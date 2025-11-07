import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VulnerabilityScannerPage from "./pages/tools/vulnerability-scanner";
import SubdomainFinderPage from "./pages/tools/subdomain-finder";
import PhishingDetectorPage from "./pages/tools/phishing-detector";
import MalwareScannerPage from "./pages/tools/malware-scanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tools/vulnerability-scanner" element={<VulnerabilityScannerPage />} />
          <Route path="/tools/subdomain-finder" element={<SubdomainFinderPage />} />
          <Route path="/tools/phishing-detector" element={<PhishingDetectorPage />} />
          <Route path="/tools/malware-scanner" element={<MalwareScannerPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

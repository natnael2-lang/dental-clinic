import { Toaster } from "@/components/ui/toaster"; // your custom toast
import { Toaster as SonnerToaster } from "sonner";   // Sonner package
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TeethWhiteningSection from "./pages/services/TeethWhitening";
import CompositeBonding from "./pages/services/CompositeBonding";
import CompositeConditioning from "./pages/services/CompositeConditioning";
import CompositeVeneer from "./pages/services/PreDesignVeneer";
import PorceilainVeneer from "./pages/services/PorcelainVeneer";
import DentalBridge from "./pages/services/DentalBridge";
import Implant from "./pages/services/Implant";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />        {/* your custom toast */}
        <SonnerToaster />  {/* Sonner toast */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* services */}
            <Route path="/services/teeth-whitening" element={<TeethWhiteningSection />} />
            <Route path="/services/composite-bonding" element={<CompositeBonding />} />
            <Route path="/services/composite-conditioning" element={<CompositeConditioning/>} />
            <Route path="/services/composite-veneers" element={<CompositeVeneer/>} />
            <Route path="/services/porcelain-veneers" element={<PorceilainVeneer/>} />
            <Route path="/services/dental-bridges" element={<DentalBridge/>} />
            <Route path="/services/dental-implants" element={<Implant/>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import { Analytics } from "@vercel/analytics/react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/galeria" component={Galeria} />
      <Route path="/servicos" component={Servicos} />
      <Route path="/contato" component={Contato} />
      <Route path="/sobre" component={Sobre} />

      {/* Rota fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
          <Analytics />

          {/* WhatsApp Chat Elfsight */}
          <div 
            className="elfsight-app-d3f22ffb-c146-4c5c-ac30-943046dcad13"
            data-elfsight-app-lazy
          ></div>

        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
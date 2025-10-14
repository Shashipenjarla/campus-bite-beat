import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import CampusStreak from "./pages/CampusStreak";
import GroupOrders from "./pages/GroupOrders";
import DineOut from "./pages/DineOut";
import Leaderboard from "./pages/Leaderboard";
import Rewards from "./pages/Rewards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/streak" element={<CampusStreak />} />
          <Route path="/group-orders" element={<GroupOrders />} />
          <Route path="/dine-out" element={<DineOut />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

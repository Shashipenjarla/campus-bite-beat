import HeroSection from "@/components/HeroSection";
import StudentPopulation from "@/components/StudentPopulation";
import CuisinePreferences from "@/components/CuisinePreferences";
import PeakOrderingTimes from "@/components/PeakOrderingTimes";
import PainPoints from "@/components/PainPoints";
import CampusEvents from "@/components/CampusEvents";
import RestaurantCoverage from "@/components/RestaurantCoverage";
import Methodology from "@/components/Methodology";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StudentPopulation />
      <CuisinePreferences />
      <PeakOrderingTimes />
      <PainPoints />
      <CampusEvents />
      <RestaurantCoverage />
      <Methodology />
      <Footer />
    </div>
  );
};

export default Index;

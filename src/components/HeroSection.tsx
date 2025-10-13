import { TrendingUp, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative gradient-hero text-primary-foreground py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10 animate-fade-in">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-6 h-6" />
          <span className="text-sm font-semibold uppercase tracking-wider">Campus Food Culture Analysis</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          How College Students<br />Really Eat
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl">
          A data-driven exploration of food habits, preferences, and pain points across campus life
        </p>
        
        <div className="flex flex-wrap gap-8 mt-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl font-bold">45</div>
              <div className="text-sm text-primary-foreground/80">Students Surveyed</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl font-bold">87%</div>
              <div className="text-sm text-primary-foreground/80">Order Food Weekly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

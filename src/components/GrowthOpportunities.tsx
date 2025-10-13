import { Card } from "@/components/ui/card";
import { Moon, Home, Users, Tag, Trophy, TrendingUp } from "lucide-react";

const opportunities = [
  {
    icon: Moon,
    title: "Late-Night Affordability",
    gap: "High delivery charges + inflated prices make midnight orders unaffordable",
    opportunity: "Introduce ₹49-99 late-night combos (10 PM - 3 AM) with free delivery for students",
    impact: "180% increase in midnight orders",
    color: "bg-chart-1/10 text-chart-1 border-chart-1/20"
  },
  {
    icon: Home,
    title: "Hostel Delivery Restrictions",
    gap: "49% of hostels have limited/no delivery access, forcing students to walk to gates",
    opportunity: "Partner with colleges for in-campus delivery points, QR-based handoffs, or locker systems",
    impact: "Unlock 68% hosteller market",
    color: "bg-chart-2/10 text-chart-2 border-chart-2/20"
  },
  {
    icon: Users,
    title: "Group Dine-Out Discovery",
    gap: "Students struggle to find restaurants for group hangouts with student-friendly pricing",
    opportunity: "Launch 'Campus Hotspots' - curated dine-out map with group discounts, split-bill QR codes",
    impact: "42% boost in dine-out bookings",
    color: "bg-chart-3/10 text-chart-3 border-chart-3/20"
  },
  {
    icon: Tag,
    title: "No Student-Exclusive Deals",
    gap: "73% feel prices are too high, no special student pricing or verification system",
    opportunity: "Student ID verification → 20-30% automatic discounts + Swiggy Campus Pass subscription",
    impact: "3x order frequency per user",
    color: "bg-chart-4/10 text-chart-4 border-chart-4/20"
  },
  {
    icon: Trophy,
    title: "Missing Gamification & Loyalty",
    gap: "No incentive to order consistently, students switch platforms for better deals",
    opportunity: "Campus leaderboards, streak rewards, foodie badges, ambassador programs with perks",
    impact: "65% retention improvement",
    color: "bg-chart-5/10 text-chart-5 border-chart-5/20"
  }
];

const GrowthOpportunities = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Growth Opportunities</h2>
        </div>
        <p className="text-muted-foreground mb-8 text-lg">5 unaddressed gaps where Swiggy can dominate campus life</p>
        
        <div className="space-y-6">
          {opportunities.map((opp, index) => (
            <Card key={index} className={`p-6 gradient-card shadow-md border-l-4 ${opp.color} hover:shadow-lg transition-all`}>
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${opp.color}`}>
                  <opp.icon className="w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{opp.title}</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm font-semibold text-destructive mb-2">❌ Current Gap</div>
                      <p className="text-muted-foreground">{opp.gap}</p>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold text-accent mb-2">✅ Opportunity</div>
                      <p className="text-muted-foreground">{opp.opportunity}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 pt-3 border-t border-border">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-bold text-primary text-lg">Potential Impact: {opp.impact}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="mt-10 p-8 gradient-hero text-primary-foreground shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Why These Gaps Matter</h3>
          <div className="space-y-4 text-lg">
            <p className="text-primary-foreground/95">
              <span className="font-bold">Student Lifetime Value:</span> Capturing students early builds loyalty that extends into their professional lives. 
              A student who uses Swiggy for 4 years becomes a habit-driven user for decades.
            </p>
            <p className="text-primary-foreground/95">
              <span className="font-bold">Word-of-Mouth Amplification:</span> College students are highly social and influential within their networks. 
              One satisfied student can drive 10+ new sign-ups through dorm conversations and group orders.
            </p>
            <p className="text-primary-foreground/95">
              <span className="font-bold">Competitive Moat:</span> By solving these specific pain points, Swiggy can create a campus-exclusive experience 
              that competitors like Zomato can't easily replicate, establishing market dominance in the 18-24 demographic.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default GrowthOpportunities;

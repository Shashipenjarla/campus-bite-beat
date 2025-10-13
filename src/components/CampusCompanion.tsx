import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, CreditCard, Moon, Users, Flame, MapPin, PartyPopper, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Swiggy Campus Pass",
    subtitle: "₹199/month subscription",
    description: "Unlimited free delivery, 20% off all orders, early access to deals, exclusive midnight menu",
    preference: "First choice due to massive cost savings vs per-order charges",
    stickiness: "Monthly commitment locks users in, sunk-cost effect increases usage",
    metrics: ["3x order frequency", "85% renewal rate", "₹600+ avg monthly savings"]
  },
  {
    icon: Moon,
    title: "Midnight ₹49 Combos",
    subtitle: "10 PM - 3 AM only",
    description: "Budget snack packs: Maggi + Chai, Fries + Coke, Momos + Juice. Free delivery for Pass holders",
    preference: "Unbeatable price point captures late-night study sessions",
    stickiness: "Becomes ritual during exam seasons, habit-forming",
    metrics: ["42% of users order 2x/week", "Peak: 11 PM - 1 AM", "180% growth in midnight orders"]
  },
  {
    icon: Users,
    title: "Group Order & Auto-Split",
    subtitle: "One cart, multiple payers",
    description: "Host creates order, invites friends via QR/link, each pays their share directly through UPI split",
    preference: "Removes awkward payment conversations, seamless social ordering",
    stickiness: "Group dynamics encourage repeat usage, FOMO drives participation",
    metrics: ["35% of orders become group orders", "4.2 avg users per group", "65% higher cart value"]
  },
  {
    icon: Flame,
    title: "Campus Streak Challenges",
    subtitle: "Gamified daily rewards",
    description: "Order 3 days in a row → Unlock ₹50 off. 7-day streak → Free dessert. Leaderboard shows top foodies",
    preference: "Gamification creates addictive engagement loop",
    stickiness: "Streaks create psychological commitment, competitive leaderboard drives retention",
    metrics: ["7-day streak = 89% likely to order again", "60% check leaderboard daily", "2.5x engagement"]
  },
  {
    icon: MapPin,
    title: "Campus Dine-Out Planner",
    subtitle: "Discover + Save on Restaurants",
    description: "Interactive map of nearby spots with student discounts (15-25% off), group booking options, live wait times",
    preference: "One-stop solution for finding affordable group hangout spots",
    stickiness: "Builds dependency for weekend plans, replaces Google Maps",
    metrics: ["42% use for weekly plans", "28% dine-out booking growth", "4.3★ avg user rating"]
  },
  {
    icon: PartyPopper,
    title: "Campus Ambassador Program",
    subtitle: "Student-led foodie clubs",
    description: "200 ambassadors/college host tasting events, run challenges, get exclusive perks + ₹5000/month stipend",
    preference: "Peer influence makes Swiggy 'cool' and trusted on campus",
    stickiness: "Ambassadors become brand advocates, organize loyalty-driving events",
    metrics: ["1 ambassador = 50+ new users", "Event attendance: 300+ students", "Brand recall: 92%"]
  }
];

const CampusCompanion = () => {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto animate-slide-up">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-hero text-primary-foreground px-6 py-3 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-5 h-5" />
            <span className="font-bold text-lg">Innovative Solution</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Swiggy Campus Companion
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A digital + on-ground ecosystem that makes Swiggy the undisputed food companion for every campus moment
          </p>
        </div>
        
        <div className="space-y-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 gradient-card shadow-md hover:shadow-xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl gradient-hero text-primary-foreground flex items-center justify-center flex-shrink-0 shadow-lg">
                  <feature.icon className="w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                    <Badge variant="secondary" className="text-sm">{feature.subtitle}</Badge>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span className="font-bold text-primary">Why Swiggy First?</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{feature.preference}</p>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        <span className="font-bold text-accent">Why Stay Loyal?</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{feature.stickiness}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {feature.metrics.map((metric, i) => (
                      <Badge key={i} variant="outline" className="text-sm px-4 py-1.5 bg-background/50">
                        📊 {metric}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="mt-12 p-10 gradient-hero text-primary-foreground shadow-xl">
          <div className="text-center">
            <Sparkles className="w-12 h-12 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-6">The Campus Companion Effect</h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="text-4xl font-bold mb-2">3.2x</div>
                <div className="text-lg font-semibold mb-2">Higher Engagement</div>
                <p className="text-primary-foreground/90 text-sm">
                  Students with Campus Pass order 3.2x more frequently than regular users
                </p>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">87%</div>
                <div className="text-lg font-semibold mb-2">Brand Preference</div>
                <p className="text-primary-foreground/90 text-sm">
                  Campus Companion users choose Swiggy over competitors even without discounts
                </p>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">₹1,200</div>
                <div className="text-lg font-semibold mb-2">Avg Monthly Spend</div>
                <p className="text-primary-foreground/90 text-sm">
                  Active Campus Companion users spend 2.8x more than non-subscribers
                </p>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-primary-foreground/20">
              <p className="text-xl text-primary-foreground/95 font-medium">
                By solving affordability, convenience, and social needs simultaneously, 
                <span className="font-bold"> Swiggy Campus Companion transforms from a food delivery app into an essential campus lifestyle platform</span> 
                — creating unmatched preference and long-term loyalty among the next generation of consumers.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CampusCompanion;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, ShoppingCart, IndianRupee, RefreshCcw, MapPin, Calculator } from "lucide-react";

const ImpactEstimation = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Impact Estimation</h2>
        </div>
        <p className="text-muted-foreground mb-8 text-lg">Measurable business outcomes from Campus Companion launch</p>
        
        {/* Baseline Assumptions */}
        <Card className="p-8 gradient-card shadow-md mb-8">
          <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
            <Users className="w-6 h-6 text-secondary" />
            Baseline Assumptions
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
              <div className="text-sm text-muted-foreground mb-1">Total Students</div>
              <div className="text-3xl font-bold text-secondary">6,000</div>
              <div className="text-xs text-muted-foreground mt-1">Avg campus size</div>
            </div>
            
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <div className="text-sm text-muted-foreground mb-1">Hostellers</div>
              <div className="text-3xl font-bold text-primary">60%</div>
              <div className="text-xs text-muted-foreground mt-1">3,600 students</div>
            </div>
            
            <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
              <div className="text-sm text-muted-foreground mb-1">Adoption Rate</div>
              <div className="text-3xl font-bold text-accent">40%</div>
              <div className="text-xs text-muted-foreground mt-1">2,400 active users</div>
            </div>
            
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <div className="text-sm text-muted-foreground mb-1">Current AOV</div>
              <div className="text-3xl font-bold text-primary">₹250</div>
              <div className="text-xs text-muted-foreground mt-1">Average order value</div>
            </div>
          </div>
        </Card>
        
        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 gradient-card shadow-md border-l-4 border-l-primary">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">New Installs</div>
                <div className="text-3xl font-bold text-primary">+2,400</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              40% adoption × 6,000 students = 2,400 new active users in first semester
            </p>
          </Card>
          
          <Card className="p-6 gradient-card shadow-md border-l-4 border-l-accent">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Weekly Orders</div>
                <div className="text-3xl font-bold text-accent">7,200</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              2,400 users × 3 orders/week = 7,200 weekly orders (+180% from baseline)
            </p>
          </Card>
          
          <Card className="p-6 gradient-card shadow-md border-l-4 border-l-secondary">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <IndianRupee className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Monthly Revenue</div>
                <div className="text-3xl font-bold text-secondary">₹72L</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              28,800 monthly orders × ₹250 AOV = ₹72,00,000 additional revenue
            </p>
          </Card>
          
          <Card className="p-6 gradient-card shadow-md border-l-4 border-l-primary">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Avg Order Value</div>
                <div className="text-3xl font-bold text-primary">₹285</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Group orders increase AOV by 14% (₹250 → ₹285) due to bulk ordering
            </p>
          </Card>
          
          <Card className="p-6 gradient-card shadow-md border-l-4 border-l-accent">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <RefreshCcw className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Repeat Rate</div>
                <div className="text-3xl font-bold text-accent">+35%</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Campus Pass + streaks boost repeat orders from 42% to 77% monthly retention
            </p>
          </Card>
          
          <Card className="p-6 gradient-card shadow-md border-l-4 border-l-secondary">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Dine-Out/Week</div>
                <div className="text-3xl font-bold text-secondary">960</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              2,400 users × 40% dine-out usage = 960 bookings/week (+42% from baseline)
            </p>
          </Card>
        </div>
        
        {/* Key Insights */}
        <div className="space-y-6">
          <Card className="p-8 gradient-card shadow-md border-l-4 border-l-primary">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <Badge className="mb-3 bg-primary text-primary-foreground">Insight #1: Midnight Combos Impact</Badge>
                <p className="text-lg text-foreground mb-2">
                  <span className="font-bold">If 10% of students (600 users) use midnight combos 2x/week:</span>
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="p-4 rounded-lg bg-primary/5">
                    <div className="text-2xl font-bold text-primary">1,200</div>
                    <div className="text-sm text-muted-foreground">Additional orders/week</div>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5">
                    <div className="text-2xl font-bold text-primary">₹58,800</div>
                    <div className="text-sm text-muted-foreground">Weekly revenue (₹49/order)</div>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5">
                    <div className="text-2xl font-bold text-primary">₹2.35L</div>
                    <div className="text-sm text-muted-foreground">Monthly revenue add-on</div>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  This low-cost, high-volume strategy captures untapped late-night demand while building habit-forming behavior.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 gradient-card shadow-md border-l-4 border-l-accent">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <IndianRupee className="w-6 h-6 text-accent" />
              </div>
              <div>
                <Badge className="mb-3 bg-accent text-accent-foreground">Insight #2: Campus Pass Multiplier Effect</Badge>
                <p className="text-lg text-foreground mb-2">
                  <span className="font-bold">If 25% adopt Campus Pass (600 subscribers at ₹199/month):</span>
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="p-4 rounded-lg bg-accent/5">
                    <div className="text-2xl font-bold text-accent">₹1.19L</div>
                    <div className="text-sm text-muted-foreground">Monthly subscription revenue</div>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/5">
                    <div className="text-2xl font-bold text-accent">₹18L</div>
                    <div className="text-sm text-muted-foreground">Additional order revenue</div>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/5">
                    <div className="text-2xl font-bold text-accent">3.2x</div>
                    <div className="text-sm text-muted-foreground">Order frequency increase</div>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  Pass holders order 3.2x more (10 orders/month vs 3), generating ₹19.19L total monthly revenue from just 10% of campus.
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Growth KPIs Impact */}
        <Card className="mt-10 p-10 gradient-hero text-primary-foreground shadow-xl">
          <h3 className="text-3xl font-bold mb-6 text-center">Contribution to Swiggy's Growth KPIs</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">📈 Business Impact</h4>
              <ul className="space-y-3 text-primary-foreground/95">
                <li><span className="font-bold">User Acquisition:</span> 2,400 new installs per campus (scale to 100 campuses = 240K users)</li>
                <li><span className="font-bold">GMV Growth:</span> ₹72L monthly per campus (₹86.4 Cr annually across 100 campuses)</li>
                <li><span className="font-bold">Order Frequency:</span> 3x increase drives higher platform activity and merchant engagement</li>
                <li><span className="font-bold">Market Share:</span> First-mover advantage in campus segment creates competitive moat</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">🎯 Strategic Wins</h4>
              <ul className="space-y-3 text-primary-foreground/95">
                <li><span className="font-bold">Lifetime Value:</span> Acquiring 18-22 year-olds builds 40+ year customer relationships</li>
                <li><span className="font-bold">Brand Loyalty:</span> 87% preference rate ensures post-graduation retention</li>
                <li><span className="font-bold">Network Effects:</span> Campus ambassadors drive organic growth via peer influence</li>
                <li><span className="font-bold">Data Advantage:</span> Youth behavior insights inform future product development</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-xl font-bold">
              Campus Companion can drive <span className="text-3xl">₹86+ Cr annual GMV</span> across 100 campuses while establishing Swiggy as the dominant food platform for India's 40M+ college students.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ImpactEstimation;

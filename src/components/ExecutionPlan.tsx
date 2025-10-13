import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Rocket, Handshake, Megaphone, TrendingUp, Zap, Users, Code, Store, MessageSquare } from "lucide-react";

const phases = [
  {
    number: 1,
    title: "Pilot Phase",
    subtitle: "Campus Discovery & MVP Launch",
    duration: "Weeks 1-6",
    icon: Rocket,
    color: "bg-chart-1/10 text-chart-1 border-chart-1/20",
    activities: [
      "Conduct detailed surveys across 3 pilot campuses (500+ students each)",
      "Develop Campus Pass subscription module in Swiggy app",
      "Build group order + auto-split payment feature",
      "Create midnight combos menu with 5-7 partner restaurants",
      "Negotiate hostel delivery access with college administration",
      "Launch beta version with 200 early adopters per campus"
    ],
    requirements: {
      tech: ["Payment gateway integration for split bills", "Subscription management system", "Campus-specific menu filters"],
      partners: ["3 pilot colleges (MoU)", "10-15 budget restaurants per campus", "Hostel wardens/admin"],
      operations: ["Dedicated campus delivery fleet", "Late-night (10PM-3AM) operations", "Campus point coordinators"]
    }
  },
  {
    number: 2,
    title: "Partnership Phase",
    subtitle: "Scaling Relationships",
    duration: "Weeks 7-12",
    icon: Handshake,
    color: "bg-chart-2/10 text-chart-2 border-chart-2/20",
    activities: [
      "Sign 30+ restaurants for student discount program (15-25% off)",
      "Recruit 15 campus ambassadors per college (45 total)",
      "Launch ambassador training program + provide starter kits",
      "Deploy campus-exclusive promo codes (CAMPUS50, MIDNIGHT30)",
      "Create dine-out planner with live restaurant data",
      "Set up weekly feedback loops with ambassadors"
    ],
    requirements: {
      tech: ["Ambassador dashboard for tracking referrals", "Restaurant partner portal", "Dine-out booking system integration"],
      partners: ["Local restaurant chains", "Campus event committees", "Student councils"],
      operations: ["Ambassador stipend budget (₹5K/month each)", "Monthly restaurant reconciliation", "Campus event sponsorships"]
    }
  },
  {
    number: 3,
    title: "Marketing Blitz",
    subtitle: "Campus Domination",
    duration: "Weeks 13-20",
    icon: Megaphone,
    color: "bg-chart-3/10 text-chart-3 border-chart-3/20",
    activities: [
      "Set up Swiggy stalls at college fests (tasting booths, games, swag)",
      "Launch 'Refer 5 Friends, Get ₹500' campus referral challenge",
      "Partner with student Instagram influencers (10K+ followers)",
      "Run streak leaderboard with weekly prizes (free meals, merch)",
      "Organize 'Midnight Feast Fridays' with live music + food trucks",
      "Deploy campus wall posters, digital screens, and mess table tents"
    ],
    requirements: {
      tech: ["Gamification engine for streaks/leaderboards", "Referral tracking system", "Real-time leaderboard display"],
      partners: ["Campus fest organizers", "Student influencers (5-10 per campus)", "Local event vendors"],
      operations: ["Marketing budget: ₹15L per campus", "Event staff + logistics", "Prize fulfillment system"]
    }
  },
  {
    number: 4,
    title: "Scaling Phase",
    subtitle: "National Expansion",
    duration: "Weeks 21-40",
    icon: TrendingUp,
    color: "bg-chart-4/10 text-chart-4 border-chart-4/20",
    activities: [
      "Analyze pilot metrics: adoption rate, AOV, retention, NPS",
      "Expand to 20 new campuses in Tier 1 & 2 cities",
      "Launch inter-campus leaderboard competition",
      "Introduce 'Campus Champion' tier with exclusive perks",
      "Partner with EdTech platforms for cross-promotion",
      "Optimize midnight operations based on demand patterns"
    ],
    requirements: {
      tech: ["Multi-campus analytics dashboard", "Automated ambassador onboarding", "Location-based feature rollout"],
      partners: ["100+ campuses in expansion pipeline", "Regional restaurant chains", "EdTech platforms (Unacademy, Coursera)"],
      operations: ["Dedicated campus ops team (5-person squad)", "Regional marketing managers", "24/7 student support hotline"]
    }
  }
];

const quickWins = [
  {
    icon: Zap,
    title: "Campus Discount Codes",
    description: "Launch college-specific promo codes (e.g., 'IIT20', 'DU25') with 20-25% off + free delivery. Minimal tech effort, immediate adoption.",
    cost: "Low",
    impact: "High",
    timeline: "1 week"
  },
  {
    icon: Users,
    title: "WhatsApp Group Orders",
    description: "Enable shareable cart links via WhatsApp. Users create group orders, share link, friends add items. No complex app changes needed.",
    cost: "Low",
    impact: "High",
    timeline: "2 weeks"
  },
  {
    icon: MessageSquare,
    title: "Student Feedback Panels",
    description: "Form 50-student panels across 10 colleges for monthly surveys. Gain insights + build early advocates for ₹500/month incentive.",
    cost: "Minimal",
    impact: "Medium",
    timeline: "Immediate"
  }
];

const ExecutionPlan = () => {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <Rocket className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Execution Plan</h2>
        </div>
        <p className="text-muted-foreground mb-12 text-lg">End-to-end roadmap to launch Campus Companion across India</p>
        
        {/* Phases */}
        <div className="space-y-8 mb-16">
          {phases.map((phase, index) => (
            <Card key={index} className={`p-8 gradient-card shadow-md border-l-4 ${phase.color}`}>
              <div className="flex items-start gap-6 mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${phase.color}`}>
                  <phase.icon className="w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <Badge variant="outline" className="text-lg px-4 py-1">Phase {phase.number}</Badge>
                    <Badge variant="secondary">{phase.duration}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.subtitle}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  Key Activities
                </h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {phase.activities.map((activity, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-4 h-4 text-primary" />
                    <span className="font-bold text-sm">Tech Requirements</span>
                  </div>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {phase.requirements.tech.map((req, i) => (
                      <li key={i}>• {req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Handshake className="w-4 h-4 text-secondary" />
                    <span className="font-bold text-sm">Partners Needed</span>
                  </div>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {phase.requirements.partners.map((req, i) => (
                      <li key={i}>• {req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Store className="w-4 h-4 text-accent" />
                    <span className="font-bold text-sm">Operations</span>
                  </div>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {phase.requirements.operations.map((req, i) => (
                      <li key={i}>• {req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Quick Wins */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Quick Win Ideas</h3>
          </div>
          <p className="text-muted-foreground mb-6 text-lg">Roll out immediately with minimal cost for fast traction</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {quickWins.map((win, index) => (
              <Card key={index} className="p-6 gradient-card shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <win.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h4 className="text-xl font-bold mb-3 text-foreground">{win.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{win.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Cost: {win.cost}</Badge>
                  <Badge variant="outline" className="text-xs">Impact: {win.impact}</Badge>
                  <Badge variant="outline" className="text-xs">{win.timeline}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Implementation Timeline */}
        <Card className="p-10 gradient-hero text-primary-foreground shadow-xl">
          <h3 className="text-3xl font-bold mb-6 text-center">40-Week Implementation Timeline</h3>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-foreground/20 transform -translate-x-1/2"></div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-1/2 text-right pr-8">
                  <div className="font-bold text-xl">Weeks 1-6</div>
                  <div className="text-sm text-primary-foreground/80">Pilot Launch</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-chart-1 flex items-center justify-center text-white font-bold z-10 shadow-lg">1</div>
                <div className="w-1/2 pl-8">
                  <div className="text-sm text-primary-foreground/90">3 campuses, 600 beta users, MVP features</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-1/2 text-right pr-8">
                  <div className="font-bold text-xl">Weeks 7-12</div>
                  <div className="text-sm text-primary-foreground/80">Partnerships</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-chart-2 flex items-center justify-center text-white font-bold z-10 shadow-lg">2</div>
                <div className="w-1/2 pl-8">
                  <div className="text-sm text-primary-foreground/90">45 ambassadors, 90+ restaurants, full features</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-1/2 text-right pr-8">
                  <div className="font-bold text-xl">Weeks 13-20</div>
                  <div className="text-sm text-primary-foreground/80">Marketing Blitz</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-chart-3 flex items-center justify-center text-white font-bold z-10 shadow-lg">3</div>
                <div className="w-1/2 pl-8">
                  <div className="text-sm text-primary-foreground/90">Campus events, influencers, referral challenges</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-1/2 text-right pr-8">
                  <div className="font-bold text-xl">Weeks 21-40</div>
                  <div className="text-sm text-primary-foreground/80">Scale to 20+ Campuses</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-chart-4 flex items-center justify-center text-white font-bold z-10 shadow-lg">4</div>
                <div className="w-1/2 pl-8">
                  <div className="text-sm text-primary-foreground/90">National expansion, optimization, partnerships</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-xl font-bold mb-4">
              By Week 40: <span className="text-3xl">50,000+ active student users</span> across 23 campuses
            </p>
            <p className="text-primary-foreground/90">
              With proven playbook ready for accelerated rollout to 100+ colleges in Year 2
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ExecutionPlan;

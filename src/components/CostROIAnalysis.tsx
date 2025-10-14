import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Zap, Target, Users, Megaphone, Code, Handshake } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from "recharts";

const costBreakdown = [
  {
    category: "Tech Development",
    icon: Code,
    items: [
      { name: "Lovable web app development (UI/UX)", cost: 50000, note: "One-time" },
      { name: "Swiggy API integration (payments, orders)", cost: 75000, note: "One-time" },
      { name: "Gamification engine (streaks, leaderboard)", cost: 40000, note: "One-time" },
      { name: "Ambassador dashboard & analytics", cost: 35000, note: "One-time" }
    ],
    total: 200000,
    color: "bg-chart-1/10 text-chart-1 border-chart-1/20"
  },
  {
    category: "Marketing & Outreach",
    icon: Megaphone,
    items: [
      { name: "Campus posters, banners, standees", cost: 25000, note: "Per campus" },
      { name: "Social media ads (Instagram, YouTube)", cost: 40000, note: "3-month campaign" },
      { name: "College fest booth & activations", cost: 60000, note: "2 major events" },
      { name: "Influencer collaborations (5-8 micro)", cost: 30000, note: "Per semester" }
    ],
    total: 155000,
    color: "bg-chart-2/10 text-chart-2 border-chart-2/20"
  },
  {
    category: "Student Incentives",
    icon: Users,
    items: [
      { name: "Midnight ₹49 combo subsidies", cost: 80000, note: "₹20 loss × 4000 orders" },
      { name: "Referral rewards (₹100 per referral)", cost: 50000, note: "500 referrals" },
      { name: "Streak challenge prizes & merch", cost: 40000, note: "Weekly rewards" },
      { name: "Campus Pass first-month discount", cost: 30000, note: "30% off × 1000 users" }
    ],
    total: 200000,
    color: "bg-chart-3/10 text-chart-3 border-chart-3/20"
  },
  {
    category: "Partnerships & Operations",
    icon: Handshake,
    items: [
      { name: "Campus ambassador stipends", cost: 75000, note: "15 × ₹5K/month" },
      { name: "Restaurant onboarding & training", cost: 20000, note: "30 restaurants" },
      { name: "Hostel delivery logistics setup", cost: 35000, note: "Dedicated fleet" },
      { name: "Event coordination & staffing", cost: 20000, note: "Campus events" }
    ],
    total: 150000,
    color: "bg-chart-4/10 text-chart-4 border-chart-4/20"
  }
];

const totalCost = costBreakdown.reduce((sum, category) => sum + category.total, 0);

const costChartData = costBreakdown.map(cat => ({
  name: cat.category.replace(" & ", "\n& "),
  cost: cat.total / 1000,
  fill: `hsl(var(--chart-${costBreakdown.indexOf(cat) + 1}))`
}));

const revenueProjections = [
  {
    metric: "New Active Users",
    value: "2,400",
    calculation: "6,000 students × 40% adoption",
    revenue: 0
  },
  {
    metric: "Additional Orders/Month",
    value: "9,600",
    calculation: "2,400 users × 4 orders/month",
    revenue: 2880000
  },
  {
    metric: "Average Order Value (AOV)",
    value: "₹300",
    calculation: "Platform commission @ 20%",
    revenue: 0
  },
  {
    metric: "Monthly Commission Revenue",
    value: "₹5.76L",
    calculation: "9,600 orders × ₹300 × 20%",
    revenue: 576000
  },
  {
    metric: "Dine-out Bookings/Month",
    value: "1,200",
    calculation: "2,400 users × 50% dine-out rate",
    revenue: 72000
  },
  {
    metric: "Dine-out Commission",
    value: "₹72K",
    calculation: "1,200 × ₹600 × 10%",
    revenue: 72000
  }
];

const totalMonthlyRevenue = 576000 + 72000;
const sixMonthRevenue = totalMonthlyRevenue * 6;
const roi = ((sixMonthRevenue - totalCost) / totalCost * 100).toFixed(1);
const breakEvenMonths = (totalCost / totalMonthlyRevenue).toFixed(1);

const lowCostHighImpact = [
  {
    element: "Referral Gamification",
    cost: "₹50K",
    impact: "500+ new users",
    roi: "10x",
    description: "₹100 per referral creates viral loops. Students share to unlock rewards, driving organic growth."
  },
  {
    element: "Social Media Challenges",
    cost: "₹30K",
    impact: "100K+ impressions",
    description: "User-generated content (food pics, streak screenshots) acts as free advertising across Instagram/WhatsApp."
  },
  {
    element: "Campus Ambassador Program",
    cost: "₹75K/month",
    impact: "15 brand advocates",
    description: "Ambassadors drive word-of-mouth, organize events, and provide hyper-local insights—scales without heavy marketing."
  },
  {
    element: "WhatsApp Group Orders",
    cost: "₹20K",
    impact: "3x order size",
    description: "Shareable cart links increase AOV from ₹200 to ₹600 per group order. Minimal dev cost, massive impact."
  }
];

const CostROIAnalysis = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <DollarSign className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Cost & ROI Analysis</h2>
        </div>
        <p className="text-muted-foreground mb-12 text-lg">Financial breakdown for one campus pilot (6-month period)</p>
        
        {/* Cost Breakdown Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {costBreakdown.map((category, index) => (
            <Card key={index} className={`p-6 border-l-4 ${category.color}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.color}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                  <p className="text-2xl font-bold text-primary">₹{(category.total / 1000).toFixed(0)}K</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {category.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-start text-sm">
                    <span className="text-muted-foreground flex-1">{item.name}</span>
                    <div className="text-right ml-4">
                      <span className="font-bold text-foreground">₹{(item.cost / 1000).toFixed(0)}K</span>
                      <Badge variant="outline" className="ml-2 text-xs">{item.note}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Cost Distribution Chart */}
        <Card className="p-8 mb-12 gradient-card">
          <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            Total Investment Breakdown
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={costChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="cost"
                  >
                    {costChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `₹${value}K`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                <p className="text-sm text-muted-foreground mb-1">Total Investment (6 months)</p>
                <p className="text-4xl font-bold text-primary">₹{(totalCost / 100000).toFixed(1)}L</p>
                <p className="text-xs text-muted-foreground mt-2">Approximately ₹118/student for 6,000 campus population</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <p className="text-xs text-muted-foreground">One-time Tech</p>
                  <p className="text-xl font-bold text-foreground">₹2L</p>
                </div>
                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <p className="text-xs text-muted-foreground">Recurring Ops</p>
                  <p className="text-xl font-bold text-foreground">₹5.05L</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Revenue Projections */}
        <Card className="p-8 mb-12 gradient-card">
          <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-accent" />
            Revenue Projections & Returns
          </h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-bold text-foreground">Metric</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Value</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Calculation Basis</th>
                  <th className="text-right py-3 px-4 font-bold text-foreground">Monthly Revenue</th>
                </tr>
              </thead>
              <tbody>
                {revenueProjections.map((row, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-3 px-4 text-sm text-muted-foreground">{row.metric}</td>
                    <td className="py-3 px-4 font-bold text-foreground">{row.value}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{row.calculation}</td>
                    <td className="py-3 px-4 text-right font-bold text-accent">
                      {row.revenue > 0 ? `₹${(row.revenue / 1000).toFixed(0)}K` : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-accent/10 border border-accent/20">
              <p className="text-sm text-muted-foreground mb-2">Total Monthly Revenue</p>
              <p className="text-3xl font-bold text-accent">₹{(totalMonthlyRevenue / 100000).toFixed(2)}L</p>
              <p className="text-xs text-muted-foreground mt-2">Delivery + Dine-out combined</p>
            </div>
            
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm text-muted-foreground mb-2">6-Month Revenue</p>
              <p className="text-3xl font-bold text-primary">₹{(sixMonthRevenue / 100000).toFixed(1)}L</p>
              <p className="text-xs text-muted-foreground mt-2">Cumulative earnings from pilot</p>
            </div>
            
            <div className="p-6 rounded-xl bg-secondary/10 border border-secondary/20">
              <p className="text-sm text-muted-foreground mb-2">Break-even Period</p>
              <p className="text-3xl font-bold text-secondary">{breakEvenMonths} months</p>
              <p className="text-xs text-muted-foreground mt-2">Time to recover investment</p>
            </div>
          </div>
        </Card>
        
        {/* ROI Summary */}
        <Card className="p-10 gradient-hero text-primary-foreground shadow-xl mb-12">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">ROI Analysis</h3>
            <p className="text-primary-foreground/90 text-lg">Financial performance over 6-month pilot period</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-8 rounded-xl bg-primary-foreground/10 backdrop-blur">
              <p className="text-sm text-primary-foreground/80 mb-2">Total Investment</p>
              <p className="text-4xl font-bold mb-4">₹{(totalCost / 100000).toFixed(1)}L</p>
              <div className="space-y-2 text-sm text-primary-foreground/90">
                <p>• Tech: ₹2L (28%)</p>
                <p>• Marketing: ₹1.55L (22%)</p>
                <p>• Incentives: ₹2L (28%)</p>
                <p>• Operations: ₹1.5L (22%)</p>
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-primary-foreground/10 backdrop-blur">
              <p className="text-sm text-primary-foreground/80 mb-2">Total Returns (6 months)</p>
              <p className="text-4xl font-bold mb-4">₹{(sixMonthRevenue / 100000).toFixed(1)}L</p>
              <div className="space-y-2 text-sm text-primary-foreground/90">
                <p>• Delivery commission: ₹34.56L</p>
                <p>• Dine-out commission: ₹4.32L</p>
                <p>• Net profit: ₹{((sixMonthRevenue - totalCost) / 100000).toFixed(1)}L</p>
              </div>
            </div>
          </div>
          
          <div className="text-center p-8 rounded-xl bg-primary-foreground/20 backdrop-blur">
            <p className="text-xl font-bold mb-3">Return on Investment (ROI)</p>
            <p className="text-6xl font-bold mb-4">{roi}%</p>
            <p className="text-lg text-primary-foreground/90">
              For every ₹1 invested, Swiggy earns <span className="font-bold text-2xl">₹{(sixMonthRevenue / totalCost).toFixed(2)}</span> in 6 months
            </p>
          </div>
        </Card>
        
        {/* Low-Cost High-Impact Elements */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Low-Cost, High-Impact Strategies</h3>
          </div>
          <p className="text-muted-foreground mb-8 text-lg">Elements that scale cheaply with viral potential</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {lowCostHighImpact.map((element, index) => (
              <Card key={index} className="p-6 gradient-card hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-2">{element.element}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{element.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="bg-chart-1/10 text-chart-1 border-chart-1/20">
                    Cost: {element.cost}
                  </Badge>
                  <Badge variant="outline" className="bg-chart-2/10 text-chart-2 border-chart-2/20">
                    Impact: {element.impact}
                  </Badge>
                  {element.roi && (
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                      ROI: {element.roi}
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
          
          <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-foreground mb-2">Why These Scale Efficiently</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  These strategies leverage network effects and user-generated content. Once the initial infrastructure is built, each new user acquisition costs significantly less than traditional marketing channels.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span><strong>Viral Loops:</strong> Students naturally share food experiences, creating organic reach without ad spend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span><strong>Community-Driven:</strong> Campus ambassadors and influencers build trust faster than brand messaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span><strong>Tech Reusability:</strong> Once built for one campus, same infrastructure scales to 100+ colleges</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CostROIAnalysis;

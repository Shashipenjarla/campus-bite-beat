import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, MapPin, Trophy, Wallet, BarChart3, Clock, Zap, Heart } from "lucide-react";

const quickStats = [
  { label: "Active Students", value: "2,400+", icon: Users, color: "text-chart-1" },
  { label: "Partner Restaurants", value: "90+", icon: MapPin, color: "text-chart-2" },
  { label: "Orders This Week", value: "4,800", icon: TrendingUp, color: "text-chart-3" },
  { label: "Total Savings", value: "₹2.4L", icon: Wallet, color: "text-chart-4" },
];

const features = [
  {
    title: "Campus Analysis",
    description: "Detailed insights on student food preferences, ordering patterns, and market opportunities",
    icon: BarChart3,
    path: "/analysis",
    color: "bg-chart-1/10 text-chart-1 border-chart-1/20",
  },
  {
    title: "Campus Streak",
    description: "Track your campus's collective ordering progress and unlock community rewards",
    icon: TrendingUp,
    path: "/streak",
    color: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  },
  {
    title: "Group Orders",
    description: "Create or join group orders with friends, split bills automatically",
    icon: Users,
    path: "/group-orders",
    color: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  },
  {
    title: "Dine-Out Planner",
    description: "Discover nearby restaurants with exclusive student discounts and book tables",
    icon: MapPin,
    path: "/dine-out",
    color: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  },
  {
    title: "Leaderboard",
    description: "See top ordering students, compete for badges, and win exciting rewards",
    icon: Trophy,
    path: "/leaderboard",
    color: "bg-chart-5/10 text-chart-5 border-chart-5/20",
  },
  {
    title: "Rewards Wallet",
    description: "Track your Swiggy Cash, coupons, referral bonuses, and exclusive offers",
    icon: Wallet,
    path: "/rewards",
    color: "bg-primary/10 text-primary border-primary/20",
  },
];

const liveOffers = [
  { title: "Midnight Combo", subtitle: "₹49 Snack Packs", time: "10PM - 3AM", icon: Clock },
  { title: "Campus Pass", subtitle: "Unlimited Free Delivery", time: "₹99/month", icon: Zap },
  { title: "Group Feast", subtitle: "25% Off on Orders ₹600+", time: "4+ Friends", icon: Users },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary py-20 px-6">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="text-center text-primary-foreground">
            <Badge variant="secondary" className="mb-4 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              Powered by Swiggy
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Campus Food Companion
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Discover the ultimate food ecosystem designed exclusively for college students — from midnight snacks to group dinners
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/analysis">
                <Button size="lg" variant="secondary" className="gap-2">
                  <BarChart3 className="w-5 h-5" />
                  View Campus Analysis
                </Button>
              </Link>
              <Link to="/group-orders">
                <Button size="lg" variant="outline" className="gap-2 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                  <Users className="w-5 h-5" />
                  Start Group Order
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-foreground/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-3xl"></div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickStats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover-scale animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Offers */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Live Campus Offers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {liveOffers.map((offer, index) => (
              <Card key={index} className="p-6 gradient-card border-l-4 border-l-primary hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <offer.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">{offer.title}</h3>
                    <p className="text-lg text-primary font-semibold mb-2">{offer.subtitle}</p>
                    <Badge variant="outline">{offer.time}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Campus Companion
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a seamless food experience on campus
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link key={index} to={feature.path} className="group">
                <Card className={`p-6 h-full border-l-4 ${feature.color} hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${feature.color}`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-10 gradient-hero text-primary-foreground shadow-xl text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Campus Food Revolution
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Be part of India's largest student food community. Save money, discover new restaurants, and enjoy exclusive campus perks.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/streak">
                <Button size="lg" variant="secondary" className="gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Check Campus Streak
                </Button>
              </Link>
              <Link to="/rewards">
                <Button size="lg" variant="outline" className="gap-2 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                  <Wallet className="w-5 h-5" />
                  View My Rewards
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;

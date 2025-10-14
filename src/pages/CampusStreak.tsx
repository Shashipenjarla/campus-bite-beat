import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Target, Users, Award, Zap, Clock, Calendar } from "lucide-react";

const streakGoals = [
  { label: "Daily Target", current: 82, target: 100, unit: "orders", icon: Target },
  { label: "Weekly Goal", current: 487, target: 700, unit: "orders", icon: Calendar },
  { label: "Active Users Today", current: 234, target: 300, unit: "students", icon: Users },
];

const milestones = [
  { orders: 100, reward: "₹100 Campus Cash", unlocked: true },
  { orders: 300, reward: "Free Delivery Weekend", unlocked: true },
  { orders: 500, reward: "25% Off Party Platter", unlocked: false, current: 487 },
  { orders: 1000, reward: "Campus Food Fest Sponsored", unlocked: false },
];

const topContributors = [
  { name: "Aarav Kumar", hostel: "Hostel A", orders: 23, badge: "🔥 Streak King" },
  { name: "Priya Sharma", hostel: "Hostel C", orders: 19, badge: "⚡ Speed Orderer" },
  { name: "Rohit Verma", hostel: "Hostel B", orders: 17, badge: "🍕 Pizza Master" },
  { name: "Sneha Patel", hostel: "Hostel D", orders: 15, badge: "🌟 Night Owl" },
  { name: "Arjun Singh", hostel: "Hostel A", orders: 14, badge: "👑 VIP Member" },
];

const liveActivity = [
  { time: "2 mins ago", action: "Hostel A placed 3 midnight combos", icon: "🌙" },
  { time: "5 mins ago", action: "Hostel C unlocked Free Delivery perk", icon: "🎉" },
  { time: "12 mins ago", action: "Day Scholars hit 50 orders milestone", icon: "🎯" },
  { time: "18 mins ago", action: "Hostel B started a group order (8 students)", icon: "👥" },
];

const CampusStreak = () => {
  const weeklyProgress = (487 / 700) * 100;
  const dailyProgress = (82 / 100) * 100;

  return (
    <div className="min-h-screen bg-background py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Campus Streak</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Track your campus's collective ordering progress and unlock amazing community rewards!
          </p>
        </div>

        {/* Main Streak Card */}
        <Card className="p-8 md:p-12 gradient-hero text-primary-foreground mb-8 shadow-glow animate-scale-in">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 bg-primary-foreground/20 text-primary-foreground">
              This Week
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-2">487/700</h2>
            <p className="text-xl text-primary-foreground/90">Collective Orders</p>
          </div>

          <div className="mb-6">
            <Progress value={weeklyProgress} className="h-4 bg-primary-foreground/20" />
            <div className="flex justify-between mt-2 text-sm text-primary-foreground/80">
              <span>69% Complete</span>
              <span>213 orders to go</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur text-center">
              <Clock className="w-6 h-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">3.2</p>
              <p className="text-sm text-primary-foreground/80">Days Left</p>
            </div>
            <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur text-center">
              <Zap className="w-6 h-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">66</p>
              <p className="text-sm text-primary-foreground/80">Orders/Day Avg</p>
            </div>
            <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur text-center">
              <Award className="w-6 h-6 mx-auto mb-2" />
              <p className="text-2xl font-bold">₹2.4L</p>
              <p className="text-sm text-primary-foreground/80">Total Savings</p>
            </div>
          </div>
        </Card>

        {/* Streak Goals */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {streakGoals.map((goal, index) => {
            const progress = (goal.current / goal.target) * 100;
            return (
              <Card key={index} className="p-6 hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <goal.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{goal.label}</h3>
                    <p className="text-sm text-muted-foreground">
                      {goal.current}/{goal.target} {goal.unit}
                    </p>
                  </div>
                </div>
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-muted-foreground mt-2">{progress.toFixed(0)}% achieved</p>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Milestones */}
          <Card className="p-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Unlock Milestones
            </h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-lg border-l-4 ${
                    milestone.unlocked
                      ? "bg-accent/10 border-l-accent"
                      : "bg-muted/30 border-l-border"
                  }`}
                >
                  <div className="text-3xl">{milestone.unlocked ? "✅" : "🔒"}</div>
                  <div className="flex-1">
                    <p className="font-bold text-foreground">{milestone.orders} Orders</p>
                    <p className="text-sm text-muted-foreground">{milestone.reward}</p>
                    {!milestone.unlocked && milestone.current && (
                      <Progress value={(milestone.current / milestone.orders) * 100} className="h-1 mt-2" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Top Contributors */}
          <Card className="p-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Top Contributors (This Week)
            </h3>
            <div className="space-y-3">
              {topContributors.map((contributor, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-3 rounded-lg ${
                    index === 0
                      ? "bg-gradient-primary text-primary-foreground"
                      : "bg-muted/50"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">
                    #{index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold">{contributor.name}</p>
                    <p className={`text-xs ${index === 0 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      {contributor.hostel}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{contributor.orders}</p>
                    <p className={`text-xs ${index === 0 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      orders
                    </p>
                  </div>
                  <div className="text-xl">{contributor.badge.split(" ")[0]}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Live Activity Feed */}
        <Card className="p-6">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            Live Campus Activity
          </h3>
          <div className="space-y-3">
            {liveActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl">{activity.icon}</div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CampusStreak;

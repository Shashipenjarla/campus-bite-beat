import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Crown, Zap, TrendingUp } from "lucide-react";

const topUsers = [
  { rank: 1, name: "Aarav Kumar", hostel: "Hostel A", orders: 145, savings: "₹12,500", badge: "👑 Campus King" },
  { rank: 2, name: "Priya Sharma", hostel: "Hostel C", orders: 132, savings: "₹11,200", badge: "⚡ Speed Queen" },
  { rank: 3, name: "Rohit Verma", hostel: "Hostel B", orders: 118, savings: "₹9,800", badge: "🔥 Foodie Pro" },
  { rank: 4, name: "Sneha Patel", hostel: "Hostel D", orders: 105, savings: "₹8,900", badge: "🌟 Star Orderer" },
  { rank: 5, name: "Arjun Singh", hostel: "Hostel A", orders: 98, savings: "₹8,100", badge: "💎 VIP Member" },
];

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <Trophy className="w-10 h-10 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Leaderboard</h1>
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {topUsers.slice(0, 3).map((user, index) => (
            <Card key={user.rank} className={`p-6 text-center ${index === 0 ? 'md:order-2 gradient-primary text-primary-foreground' : index === 1 ? 'md:order-1' : 'md:order-3'}`}>
              <div className="text-5xl mb-2">{index === 0 ? '👑' : index === 1 ? '🥈' : '🥉'}</div>
              <h3 className="text-2xl font-bold mb-1">{user.name}</h3>
              <p className={`text-sm mb-3 ${index === 0 ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{user.hostel}</p>
              <p className="text-3xl font-bold mb-2">{user.orders}</p>
              <p className={`text-sm ${index === 0 ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>Orders</p>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6">Campus Rankings</h2>
          <div className="space-y-3">
            {topUsers.map((user, index) => (
              <div key={user.rank} className={`flex items-center gap-4 p-4 rounded-lg ${index < 3 ? 'bg-gradient-primary text-primary-foreground' : 'bg-muted/30'}`}>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-xl">
                  #{user.rank}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg">{user.name}</p>
                  <p className="text-sm opacity-80">{user.hostel}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-2xl">{user.orders}</p>
                  <p className="text-xs opacity-80">orders</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;

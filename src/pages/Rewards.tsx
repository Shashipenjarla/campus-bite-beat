import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet, Gift, Tag, Star } from "lucide-react";

const Rewards = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <Wallet className="w-10 h-10 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Rewards Wallet</h1>
        </div>

        <Card className="p-8 gradient-primary text-primary-foreground mb-8">
          <h2 className="text-3xl font-bold mb-2">Available Balance</h2>
          <p className="text-6xl font-bold mb-4">₹850</p>
          <p className="text-primary-foreground/80">Use on your next order</p>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Gift, label: "Active Coupons", value: "12" },
            { icon: Tag, label: "Total Savings", value: "₹8,500" },
            { icon: Star, label: "Rewards Points", value: "2,450" },
          ].map((item, index) => (
            <Card key={index} className="p-6 text-center">
              <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <p className="text-3xl font-bold text-foreground mb-1">{item.value}</p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Plus, Clock, MapPin, DollarSign, Share2, CheckCircle2 } from "lucide-react";

const activeGroupOrders = [
  {
    id: 1,
    creator: "Rahul Mehta",
    hostel: "Hostel A - Room 204",
    restaurant: "Domino's Pizza",
    participants: 4,
    maxParticipants: 6,
    totalAmount: 890,
    deliveryTime: "25 mins",
    status: "open",
  },
  {
    id: 2,
    creator: "Ananya Singh",
    hostel: "Hostel C - Room 315",
    restaurant: "KFC",
    participants: 3,
    maxParticipants: 5,
    totalAmount: 675,
    deliveryTime: "30 mins",
    status: "open",
  },
  {
    id: 3,
    creator: "Vikram Patel",
    hostel: "Hostel B - Room 108",
    restaurant: "Subway",
    participants: 5,
    maxParticipants: 5,
    totalAmount: 1250,
    deliveryTime: "20 mins",
    status: "full",
  },
];

const myOrders = [
  {
    restaurant: "Burger King",
    items: "Whopper Meal + Fries",
    myShare: 285,
    totalParticipants: 3,
    status: "delivered",
  },
  {
    restaurant: "Starbucks",
    items: "Cappuccino + Sandwich",
    myShare: 420,
    totalParticipants: 2,
    status: "in_transit",
  },
];

const GroupOrders = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Users className="w-10 h-10 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Group Orders</h1>
            </div>
            <Button size="lg" className="gap-2 shadow-glow">
              <Plus className="w-5 h-5" />
              Create Group Order
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">
            Order together, split the bill automatically, and save more with group discounts!
          </p>
        </div>

        {/* Benefits Banner */}
        <Card className="p-6 mb-8 gradient-primary text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">Why Order in Groups?</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold mb-1">Save 25% on Orders ₹600+</p>
                <p className="text-sm text-primary-foreground/80">Automatic group discounts applied</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold mb-1">Auto Bill Split</p>
                <p className="text-sm text-primary-foreground/80">Everyone pays their share instantly</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold mb-1">Single Delivery</p>
                <p className="text-sm text-primary-foreground/80">One delivery fee shared by all</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Active Group Orders */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Users className="w-7 h-7 text-primary" />
            Join Open Group Orders
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeGroupOrders.map((order, index) => (
              <Card key={order.id} className={`p-6 hover-scale animate-fade-in ${order.status === "full" ? "opacity-60" : ""}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={order.status === "open" ? "default" : "secondary"}>
                    {order.status === "open" ? "🟢 Open" : "🔴 Full"}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {order.deliveryTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{order.restaurant}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{order.creator} • {order.hostel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Share2 className="w-4 h-4" />
                    <span>
                      {order.participants}/{order.maxParticipants} participants
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 mb-4">
                  <span className="text-sm text-muted-foreground">Total Amount</span>
                  <span className="text-xl font-bold text-primary">₹{order.totalAmount}</span>
                </div>

                <Button
                  className="w-full"
                  disabled={order.status === "full"}
                  variant={order.status === "open" ? "default" : "outline"}
                >
                  {order.status === "open" ? "Join This Order" : "Order Full"}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* My Recent Orders */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-accent" />
            My Recent Group Orders
          </h2>
          <div className="space-y-4">
            {myOrders.map((order, index) => (
              <div key={index} className={`flex items-center justify-between p-4 rounded-lg border ${order.status === "delivered" ? "bg-accent/10 border-accent/20" : "bg-muted/30 border-border"}`}>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground mb-1">{order.restaurant}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{order.items}</p>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className="text-xs">
                      {order.totalParticipants} people
                    </Badge>
                    <Badge variant={order.status === "delivered" ? "default" : "secondary"} className="text-xs">
                      {order.status === "delivered" ? "✓ Delivered" : "🚚 In Transit"}
                    </Badge>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="text-sm text-muted-foreground mb-1">My Share</p>
                  <p className="text-2xl font-bold text-primary">₹{order.myShare}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* How It Works */}
        <Card className="p-8 mt-8 gradient-card">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">How Group Orders Work</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Create or Join", desc: "Start a new order or join an existing one", icon: Plus },
              { step: 2, title: "Add Items", desc: "Everyone adds their food choices", icon: Users },
              { step: 3, title: "Auto Split", desc: "Bill splits automatically", icon: DollarSign },
              { step: 4, title: "Single Delivery", desc: "Food arrives together", icon: CheckCircle2 },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 font-bold">
                  {step.step}
                </div>
                <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GroupOrders;

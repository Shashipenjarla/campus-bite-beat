import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Tag, Clock, Users, Phone, Navigation } from "lucide-react";

const restaurants = [
  {
    name: "Cafe Coffee Day",
    cuisine: "Coffee & Snacks",
    distance: "0.5 km",
    rating: 4.2,
    discount: "20% Student Discount",
    timing: "8 AM - 11 PM",
    seats: "Available",
    phone: "+91 98765 43210",
    popular: true,
  },
  {
    name: "Domino's Pizza",
    cuisine: "Italian, Fast Food",
    distance: "0.8 km",
    rating: 4.5,
    discount: "15% Off on Bills ₹500+",
    timing: "10 AM - 12 AM",
    seats: "Limited",
    phone: "+91 98765 43211",
    popular: true,
  },
  {
    name: "Haldiram's",
    cuisine: "Indian, Sweets",
    distance: "1.2 km",
    rating: 4.3,
    discount: "10% Student ID Discount",
    timing: "9 AM - 10 PM",
    seats: "Available",
    phone: "+91 98765 43212",
    popular: false,
  },
  {
    name: "KFC",
    cuisine: "American, Chicken",
    distance: "0.6 km",
    rating: 4.4,
    discount: "₹100 Off on ₹400+",
    timing: "11 AM - 11 PM",
    seats: "Available",
    phone: "+91 98765 43213",
    popular: true,
  },
  {
    name: "Subway",
    cuisine: "Sandwiches, Healthy",
    distance: "0.9 km",
    rating: 4.1,
    discount: "Buy 1 Get 1 Free (Selected Items)",
    timing: "9 AM - 10 PM",
    seats: "Available",
    phone: "+91 98765 43214",
    popular: false,
  },
  {
    name: "Biryani Blues",
    cuisine: "Indian, Biryani",
    distance: "1.5 km",
    rating: 4.6,
    discount: "25% Off Student Special",
    timing: "12 PM - 11 PM",
    seats: "Limited",
    phone: "+91 98765 43215",
    popular: true,
  },
];

const popularTimes = [
  { time: "Breakfast (8-10 AM)", crowd: "Low", color: "bg-accent/20 text-accent" },
  { time: "Lunch (12-2 PM)", crowd: "High", color: "bg-destructive/20 text-destructive" },
  { time: "Evening (5-7 PM)", crowd: "Medium", color: "bg-chart-4/20 text-chart-4" },
  { time: "Dinner (8-10 PM)", crowd: "High", color: "bg-destructive/20 text-destructive" },
];

const DineOut = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Dine-Out Planner</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Discover nearby restaurants with exclusive student discounts and book your table!
          </p>
        </div>

        {/* Map Placeholder & Quick Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="md:col-span-2 p-0 overflow-hidden gradient-card animate-scale-in">
            <div className="aspect-video bg-muted/30 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
              <div className="relative text-center p-8">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Interactive Campus Map</h3>
                <p className="text-muted-foreground mb-4">
                  View all restaurants on an interactive map with real-time availability
                </p>
                <Button className="gap-2">
                  <Navigation className="w-4 h-4" />
                  Open Map View
                </Button>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <Card className="p-6 gradient-primary text-primary-foreground">
              <h3 className="font-bold mb-2">Today's Best Deals</h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  25% off at 12 restaurants
                </p>
                <p className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Group booking discounts
                </p>
                <p className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Student ID required
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-4">Best Times to Visit</h3>
              <div className="space-y-2">
                {popularTimes.map((time, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{time.time}</span>
                    <Badge variant="outline" className={time.color}>
                      {time.crowd}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Restaurants List */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Star className="w-7 h-7 text-primary" />
            Restaurants Near Campus ({restaurants.length})
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant, index) => (
              <Card
                key={index}
                className={`p-6 hover-scale animate-fade-in ${
                  restaurant.popular ? "border-l-4 border-l-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {restaurant.popular && (
                  <Badge variant="default" className="mb-3">
                    🔥 Popular
                  </Badge>
                )}

                <h3 className="text-xl font-bold text-foreground mb-2">{restaurant.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{restaurant.cuisine}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {restaurant.distance}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="font-bold text-foreground">{restaurant.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {restaurant.timing}
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <Badge variant={restaurant.seats === "Available" ? "default" : "secondary"} className="text-xs">
                      {restaurant.seats}
                    </Badge>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 mb-4">
                  <div className="flex items-start gap-2">
                    <Tag className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-bold text-accent">{restaurant.discount}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button variant="default" size="sm" className="gap-1">
                    <Users className="w-4 h-4" />
                    Book Table
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Phone className="w-4 h-4" />
                    Call
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tips Card */}
        <Card className="p-8 gradient-card">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-primary" />
            Pro Tips for Students
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-1">Carry Your Student ID</p>
                  <p className="text-sm text-muted-foreground">
                    Most restaurants require valid student ID for discounts
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-1">Book in Advance</p>
                  <p className="text-sm text-muted-foreground">
                    Weekend evenings get crowded - reserve your table ahead
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-1">Group Discounts</p>
                  <p className="text-sm text-muted-foreground">
                    Many restaurants offer extra 10% off for groups of 4+
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-1">Check Combo Deals</p>
                  <p className="text-sm text-muted-foreground">
                    Combo meals are often 30-40% cheaper than individual items
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DineOut;

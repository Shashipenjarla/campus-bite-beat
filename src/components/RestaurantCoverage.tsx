import { Card } from "@/components/ui/card";
import { Store, TrendingUp, TrendingDown, MapPin } from "lucide-react";

const restaurantData = [
  { name: "Campus Canteen", delivery: "Yes", rating: 4.2, popular: true },
  { name: "Domino's Pizza", delivery: "Yes", rating: 4.5, popular: true },
  { name: "Biryani House", delivery: "Limited", rating: 4.3, popular: true },
  { name: "Chai Tapri", delivery: "No", rating: 4.0, popular: false },
  { name: "McDonald's", delivery: "Yes", rating: 4.4, popular: true },
  { name: "Local Dhabas (3)", delivery: "No", rating: 3.8, popular: false },
  { name: "Subway", delivery: "Yes", rating: 4.1, popular: false },
  { name: "Street Food Vendors (5)", delivery: "No", rating: 4.2, popular: true }
];

const RestaurantCoverage = () => {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Restaurant Coverage</h2>
        <p className="text-muted-foreground mb-8 text-lg">Food outlets near campus and delivery status</p>
        
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 gradient-card shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Store className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">18</div>
                <div className="text-sm text-muted-foreground">Total Outlets</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Restaurants and food stalls within 2km radius</p>
          </Card>
          
          <Card className="p-6 gradient-card shadow-md border-l-4 border-l-accent">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">61%</div>
                <div className="text-sm text-muted-foreground">On Swiggy</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Available for delivery through platforms</p>
          </Card>
          
          <Card className="p-6 gradient-card shadow-md border-l-4 border-l-destructive">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <div className="text-3xl font-bold text-destructive">39%</div>
                <div className="text-sm text-muted-foreground">Not Listed</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Local favorites missing from delivery apps</p>
          </Card>
        </div>
        
        <Card className="p-8 gradient-card shadow-md">
          <h3 className="text-xl font-bold mb-6 text-foreground">Top Food Outlets Near Campus</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Outlet Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Delivery Status</th>
                  <th className="text-left py-3 px-4 font-semibold">Rating</th>
                  <th className="text-left py-3 px-4 font-semibold">Popular</th>
                </tr>
              </thead>
              <tbody>
                {restaurantData.map((restaurant, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4 font-medium">{restaurant.name}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        restaurant.delivery === "Yes" 
                          ? "bg-accent/20 text-accent" 
                          : restaurant.delivery === "Limited"
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {restaurant.delivery}
                      </span>
                    </td>
                    <td className="py-3 px-4">⭐ {restaurant.rating}</td>
                    <td className="py-3 px-4">
                      {restaurant.popular && (
                        <span className="text-primary font-semibold">🔥 Top Pick</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        
        <Card className="mt-8 p-8 gradient-card shadow-md border-l-4 border-l-primary">
          <div className="flex items-start gap-4">
            <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Coverage Gap</h3>
              <p className="text-muted-foreground text-lg mb-4">
                <span className="font-semibold text-foreground">7 popular outlets</span> (including 5 street food vendors and 3 local dhabas) 
                are not on Swiggy despite high student demand. These spots are known for affordability and authenticity.
              </p>
              <p className="text-muted-foreground">
                Students often walk 15-20 minutes to these places, especially during exam prep and late nights. 
                Adding them to delivery platforms could capture a <span className="font-semibold text-primary">significant untapped market</span>.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RestaurantCoverage;

import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const cuisineData = [
  { name: "North Indian", percentage: 42, color: "hsl(var(--chart-1))" },
  { name: "Chinese", percentage: 28, color: "hsl(var(--chart-2))" },
  { name: "South Indian", percentage: 18, color: "hsl(var(--chart-3))" },
  { name: "Fast Food", percentage: 35, color: "hsl(var(--chart-4))" },
  { name: "Snacks", percentage: 31, color: "hsl(var(--chart-5))" },
];

const CuisinePreferences = () => {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Favorite Cuisines</h2>
        <p className="text-muted-foreground mb-8 text-lg">What students love to order</p>
        
        <Card className="p-8 gradient-card shadow-md">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={cuisineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Preference %', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Bar dataKey="percentage" radius={[8, 8, 0, 0]}>
                {cuisineData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="text-sm text-muted-foreground mb-1">Top Choice</div>
              <div className="text-2xl font-bold text-primary">North Indian</div>
              <div className="text-sm text-muted-foreground">42% prefer biryani, curries, and rotis</div>
            </div>
            
            <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
              <div className="text-sm text-muted-foreground mb-1">Fast Favorite</div>
              <div className="text-2xl font-bold text-secondary">Fast Food</div>
              <div className="text-sm text-muted-foreground">Quick bites between classes</div>
            </div>
            
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <div className="text-sm text-muted-foreground mb-1">Late Night</div>
              <div className="text-2xl font-bold text-accent">Snacks</div>
              <div className="text-sm text-muted-foreground">31% order during study sessions</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CuisinePreferences;

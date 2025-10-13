import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const orderingData = [
  { time: "6 AM", orders: 2 },
  { time: "9 AM", orders: 8 },
  { time: "12 PM", orders: 35 },
  { time: "3 PM", orders: 18 },
  { time: "6 PM", orders: 28 },
  { time: "9 PM", orders: 42 },
  { time: "12 AM", orders: 31 },
  { time: "3 AM", orders: 12 },
];

const PeakOrderingTimes = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Peak Ordering Times</h2>
        <p className="text-muted-foreground mb-8 text-lg">When hunger strikes on campus</p>
        
        <Card className="p-8 gradient-card shadow-md">
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={orderingData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="time" />
              <YAxis label={{ value: 'Orders', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="orders" 
                stroke="hsl(var(--primary))" 
                fillOpacity={1} 
                fill="url(#colorOrders)" 
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="text-sm text-muted-foreground mb-1">🌙 Peak Hours</div>
              <div className="text-2xl font-bold text-primary">9 PM - 12 AM</div>
              <div className="text-sm text-muted-foreground">42% of daily orders happen during late night study sessions</div>
            </div>
            
            <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
              <div className="text-sm text-muted-foreground mb-1">🍽️ Lunch Rush</div>
              <div className="text-2xl font-bold text-secondary">12 PM - 2 PM</div>
              <div className="text-sm text-muted-foreground">35% order during class breaks</div>
            </div>
            
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <div className="text-sm text-muted-foreground mb-1">☕ Morning Slow</div>
              <div className="text-2xl font-bold text-accent">6 AM - 9 AM</div>
              <div className="text-sm text-muted-foreground">Only 8% order breakfast</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PeakOrderingTimes;

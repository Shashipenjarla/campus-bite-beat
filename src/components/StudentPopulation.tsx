import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const populationData = [
  { name: "Hostellers", value: 68, color: "hsl(var(--chart-1))" },
  { name: "Day Scholars", value: 32, color: "hsl(var(--chart-2))" },
];

const StudentPopulation = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Student Demographics</h2>
        <p className="text-muted-foreground mb-8 text-lg">Understanding who orders food on campus</p>
        
        <Card className="p-8 gradient-card shadow-md">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={populationData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {populationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-background/50 border border-border">
                <div className="text-4xl font-bold text-primary mb-2">68%</div>
                <div className="text-lg font-semibold mb-1">Hostellers</div>
                <p className="text-muted-foreground">Live on campus, order frequently due to limited cooking facilities</p>
              </div>
              
              <div className="p-6 rounded-xl bg-background/50 border border-border">
                <div className="text-4xl font-bold text-secondary mb-2">32%</div>
                <div className="text-lg font-semibold mb-1">Day Scholars</div>
                <p className="text-muted-foreground">Commute daily, order mainly during late hours and group study sessions</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default StudentPopulation;

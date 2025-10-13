import { Card } from "@/components/ui/card";
import { Clock, DollarSign, ShieldAlert, MapPin, ThumbsDown } from "lucide-react";

const painPoints = [
  {
    icon: DollarSign,
    title: "High Prices",
    percentage: 73,
    description: "Students feel delivery charges and inflated menu prices make food unaffordable",
    color: "text-chart-1"
  },
  {
    icon: Clock,
    title: "Long Delivery Times",
    percentage: 64,
    description: "30-45 min delays frustrate students during tight class schedules",
    color: "text-chart-2"
  },
  {
    icon: ShieldAlert,
    title: "Trust Issues",
    percentage: 58,
    description: "Concerns about food quality, hygiene, and packaging from unknown vendors",
    color: "text-chart-3"
  },
  {
    icon: MapPin,
    title: "Limited Coverage",
    percentage: 49,
    description: "Many campus hostels and remote areas have no delivery options",
    color: "text-chart-4"
  },
  {
    icon: ThumbsDown,
    title: "Dine-Out Hassles",
    percentage: 42,
    description: "Long queues, limited seating, and inflexible timing at nearby restaurants",
    color: "text-chart-5"
  }
];

const PainPoints = () => {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Key Pain Points</h2>
        <p className="text-muted-foreground mb-8 text-lg">Where Swiggy and competitors currently fail students</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <Card key={index} className="p-6 gradient-card shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0`}>
                  <point.icon className={`w-6 h-6 ${point.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{point.title}</h3>
                    <span className={`text-2xl font-bold ${point.color}`}>{point.percentage}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="mt-8 p-8 gradient-card shadow-md border-l-4 border-l-primary">
          <h3 className="text-xl font-bold mb-4 text-foreground">Key Insight</h3>
          <p className="text-muted-foreground text-lg">
            <span className="font-semibold text-primary">73% of students</span> cite affordability as the biggest barrier to ordering food online. 
            They want <span className="font-semibold">transparent pricing, student discounts, and bulk order options</span> to make regular ordering feasible on their budgets.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default PainPoints;

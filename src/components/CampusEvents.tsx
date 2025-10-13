import { Card } from "@/components/ui/card";
import { Calendar, BookOpen, PartyPopper, Moon } from "lucide-react";

const events = [
  {
    icon: PartyPopper,
    title: "College Fests",
    impact: "300% spike",
    description: "Cultural and tech fest weeks see massive food orders with students ordering in groups",
    color: "bg-chart-1/10 text-chart-1 border-chart-1/20"
  },
  {
    icon: BookOpen,
    title: "Exam Seasons",
    impact: "180% increase",
    description: "Late night study sessions drive snack and comfort food orders between 10 PM - 3 AM",
    color: "bg-chart-2/10 text-chart-2 border-chart-2/20"
  },
  {
    icon: Moon,
    title: "Weekend Nights",
    impact: "220% boost",
    description: "Friday and Saturday nights see peak orders as students relax and socialize",
    color: "bg-chart-3/10 text-chart-3 border-chart-3/20"
  },
  {
    icon: Calendar,
    title: "Hostel Events",
    impact: "150% rise",
    description: "Birthday celebrations, movie nights, and gaming sessions trigger bulk orders",
    color: "bg-chart-4/10 text-chart-4 border-chart-4/20"
  }
];

const CampusEvents = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Campus Events Impact</h2>
        <p className="text-muted-foreground mb-8 text-lg">How student life drives food ordering patterns</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <Card key={index} className={`p-6 gradient-card shadow-md border ${event.color}`}>
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${event.color}`}>
                  <event.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-1">{event.title}</h3>
                  <div className="text-2xl font-bold mb-3">{event.impact}</div>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="mt-8 p-8 gradient-card shadow-md">
          <h3 className="text-xl font-bold mb-4 text-foreground">Seasonal Patterns</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Aug - Oct</div>
              <div className="font-semibold mb-1">Fest Season Peak</div>
              <p className="text-sm text-muted-foreground">Cultural events, tech fests, and sports meets drive maximum orders</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">Nov - Dec</div>
              <div className="font-semibold mb-1">Exam Crunch</div>
              <p className="text-sm text-muted-foreground">Sustained high orders during mid-term and final exams</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">Jan - Feb</div>
              <div className="font-semibold mb-1">Winter Dip</div>
              <p className="text-sm text-muted-foreground">Cold weather and holidays reduce ordering frequency</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CampusEvents;

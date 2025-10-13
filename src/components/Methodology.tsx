import { Card } from "@/components/ui/card";
import { ClipboardCheck, Users, MessageSquare, BarChart3 } from "lucide-react";

const Methodology = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Research Methodology</h2>
        <p className="text-muted-foreground mb-8 text-lg">How we gathered these insights</p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 gradient-card shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Survey Sample</h3>
              </div>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <span className="font-semibold text-foreground">45 students</span> surveyed across campus</li>
              <li>• 31 hostellers, 14 day scholars</li>
              <li>• Mixed demographics: UG and PG students</li>
              <li>• Engineering, Management, and Liberal Arts</li>
            </ul>
          </Card>
          
          <Card className="p-6 gradient-card shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <ClipboardCheck className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Data Collection</h3>
              </div>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Online forms + in-person interviews</li>
              <li>• Duration: 2 weeks (Oct 15 - Oct 28)</li>
              <li>• 18 questions covering habits & pain points</li>
              <li>• Anonymous responses for honest feedback</li>
            </ul>
          </Card>
          
          <Card className="p-6 gradient-card shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Key Questions</h3>
              </div>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Ordering frequency & preferred cuisines</li>
              <li>• Budget constraints & spending patterns</li>
              <li>• Delivery experience & satisfaction levels</li>
              <li>• Trust factors & hygiene concerns</li>
            </ul>
          </Card>
          
          <Card className="p-6 gradient-card shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Analysis</h3>
              </div>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Quantitative data from multiple choice Qs</li>
              <li>• Qualitative insights from open responses</li>
              <li>• Cross-tabulation by student type</li>
              <li>• Behavioral pattern identification</li>
            </ul>
          </Card>
        </div>
        
        <Card className="p-8 gradient-card shadow-md border-l-4 border-l-secondary">
          <h3 className="text-xl font-bold mb-4 text-foreground">Key Findings Summary</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-foreground">What's Working</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>✅ Wide restaurant selection on Swiggy</li>
                <li>✅ Convenience during late hours</li>
                <li>✅ Group ordering for events</li>
                <li>✅ Real-time tracking features</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Gaps to Address</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>❌ High prices for budget-conscious students</li>
                <li>❌ Missing popular local vendors</li>
                <li>❌ Limited hostel delivery coverage</li>
                <li>❌ No student-specific discounts/plans</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Methodology;

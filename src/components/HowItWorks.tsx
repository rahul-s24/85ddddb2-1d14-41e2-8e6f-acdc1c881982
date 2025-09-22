import { Card } from "@/components/ui/card";
import { Search, CreditCard, Ticket, Shield } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Search",
      description: "Find tickets for sold-out shows",
    },
    {
      icon: CreditCard,
      title: "Buy",
      description: "Secure payment with buyer protection",
    },
    {
      icon: Ticket,
      title: "Receive",
      description: "Get verified tickets instantly",
    },
    {
      icon: Shield,
      title: "Guaranteed",
      description: "100% authentic or full refund",
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto font-light">
            Simple, secure, guaranteed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto bg-card border border-border rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-foreground" />
                </div>
                
                <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm font-light">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
import { Card } from "@/components/ui/card";
import { Search, CreditCard, Ticket, Shield } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Find Your Show",
      description: "Search for sold-out concerts and events. Filter by artist, venue, date, or price range.",
      color: "text-electric"
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Complete your purchase with our secure payment system. Your money is protected until delivery.",
      color: "text-green-500"
    },
    {
      icon: Ticket,
      title: "Get Your Tickets",
      description: "Receive verified tickets instantly via mobile transfer or email. Ready to use at the venue.",
      color: "text-gold"
    },
    {
      icon: Shield,
      title: "100% Guaranteed",
      description: "Every ticket is verified authentic. If there's any issue, we'll refund you or find replacements.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting into your dream show has never been easier or more secure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="p-8 text-center border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-4">
                    <IconComponent className={`h-8 w-8 ${step.color}`} />
                  </div>
                  <div className="w-8 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2" />
                )}
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">
              Trusted by over 50,000 music fans worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
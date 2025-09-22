import { Card } from "@/components/ui/card";
import { Search, CreditCard, Ticket, Shield, Sparkles, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "Find tickets for sold-out shows using our smart search",
      color: "text-primary"
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Protected transactions with buyer guarantee",
      color: "text-accent"
    },
    {
      icon: Ticket,
      title: "Instant Access",
      description: "Get verified tickets delivered immediately",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Guaranteed",
      description: "100% authentic tickets or full refund",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 via-muted/10 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-card border border-border rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Simple Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From search to show in just a few clicks. 
            <span className="text-foreground">Your concert experience starts here.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="group p-8 text-center bg-gradient-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-glow relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="w-12 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-card border border-border rounded-2xl shadow-card">
            <CheckCircle className="h-6 w-6 text-green-400" />
            <span className="text-foreground font-semibold text-lg">
              Trusted by 50,000+ fans worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
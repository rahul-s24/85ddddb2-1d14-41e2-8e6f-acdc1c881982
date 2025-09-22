import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedTickets from "@/components/FeaturedTickets";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedTickets />
        <HowItWorks />
      </main>
    </div>
  );
};

export default Index;

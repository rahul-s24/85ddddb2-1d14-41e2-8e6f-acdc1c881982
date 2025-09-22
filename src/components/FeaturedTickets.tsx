import TicketCard from "./TicketCard";

const FeaturedTickets = () => {
  const featuredTickets = [
    {
      artist: "Taylor Swift - Eras Tour",
      venue: "MetLife Stadium",
      date: "Dec 15, 2024",
      price: 299,
      originalPrice: 399,
      section: "133",
      row: "12",
      seats: "5-6",
      quantity: 2,
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      isHot: true
    },
    {
      artist: "Bad Bunny",
      venue: "Madison Square Garden",
      date: "Jan 8, 2025",
      price: 245,
      originalPrice: 300,
      section: "112",
      row: "8",
      seats: "1-2",
      quantity: 2,
      imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop"
    },
    {
      artist: "Billie Eilish",
      venue: "The Forum",
      date: "Feb 22, 2025",
      price: 180,
      section: "101",
      row: "15",
      seats: "7-8",
      quantity: 2,
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop"
    },
    {
      artist: "Drake",
      venue: "Barclays Center",
      date: "Mar 5, 2025",
      price: 220,
      originalPrice: 275,
      section: "22",
      row: "A",
      seats: "3-4",
      quantity: 2,
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      isHot: true
    },
    {
      artist: "The Weeknd",
      venue: "Crypto.com Arena",
      date: "Apr 12, 2025",
      price: 199,
      section: "201",
      row: "5",
      seats: "9-10",
      quantity: 2,
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop"
    },
    {
      artist: "Olivia Rodrigo",
      venue: "American Airlines Center",
      date: "May 18, 2025",
      price: 165,
      originalPrice: 200,
      section: "115",
      row: "10",
      seats: "15-16",
      quantity: 2,
      imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Hot Tickets Right Now
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these in-demand shows. Prices are moving fast!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTickets.map((ticket, index) => (
            <TicketCard key={index} {...ticket} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary/80 font-semibold text-lg transition-colors">
            View All Available Tickets →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTickets;
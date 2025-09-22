import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users } from "lucide-react";

interface TicketCardProps {
  artist: string;
  venue: string;
  date: string;
  price: number;
  originalPrice?: number;
  section: string;
  row: string;
  seats: string;
  quantity: number;
  imageUrl: string;
  isHot?: boolean;
}

const TicketCard = ({
  artist,
  venue,
  date,
  price,
  originalPrice,
  section,
  row,
  seats,
  quantity,
  imageUrl,
  isHot = false
}: TicketCardProps) => {
  const savings = originalPrice ? originalPrice - price : 0;
  const savingsPercent = originalPrice ? Math.round((savings / originalPrice) * 100) : 0;

  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={artist}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isHot && (
          <Badge className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
            🔥 Hot
          </Badge>
        )}
        {savings > 0 && (
          <Badge className="absolute top-3 right-3 bg-green-600 hover:bg-green-700">
            Save ${savings}
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {artist}
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground mt-1">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{venue}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground mt-1">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{date}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Section {section}, Row {row}</span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{quantity} tickets</span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">Seats: {seats}</div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">${price}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${originalPrice}
                </span>
              )}
            </div>
            {savingsPercent > 0 && (
              <span className="text-xs text-green-600 font-medium">
                {savingsPercent}% below face value
              </span>
            )}
            <div className="text-xs text-muted-foreground">per ticket</div>
          </div>
          
          <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
            Buy Now
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TicketCard;
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Zap } from "lucide-react";

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
    <Card className="group overflow-hidden bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={artist}
          className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {isHot && (
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg">
            <Zap className="h-3 w-3 mr-1" />
            Hot
          </Badge>
        )}
        {savings > 0 && (
          <Badge className="absolute top-4 right-4 bg-green-500 text-white shadow-lg">
            Save ${savings}
          </Badge>
        )}
        
        {/* Overlay Info */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-bold mb-1">{artist}</h3>
          <div className="flex items-center gap-4 text-sm opacity-90">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>{venue}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Section {section} • Row {row}</span>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{quantity} tickets</span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">Seats {seats}</div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-border">
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
              <span className="text-xs text-green-400 font-medium">
                {savingsPercent}% below face value
              </span>
            )}
            <div className="text-xs text-muted-foreground">per ticket</div>
          </div>
          
          <Button 
            variant="default" 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TicketCard;
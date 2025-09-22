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
    <Card className="group overflow-hidden border-border hover:border-border/80 transition-all duration-200">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={artist}
          className="w-full h-40 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
        />
        {isHot && (
          <Badge className="absolute top-3 left-3 bg-foreground text-background">
            Hot
          </Badge>
        )}
        {savings > 0 && (
          <Badge className="absolute top-3 right-3 bg-green-500 text-white">
            -${savings}
          </Badge>
        )}
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-medium text-foreground">
            {artist}
          </h3>
          <div className="text-sm text-muted-foreground mt-1">{venue}</div>
          <div className="text-sm text-muted-foreground">{date}</div>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Section {section}, Row {row}</span>
            <span>{quantity} tickets</span>
          </div>
          <div className="text-sm text-muted-foreground">Seats {seats}</div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-medium text-foreground">${price}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${originalPrice}
                </span>
              )}
            </div>
            {savingsPercent > 0 && (
              <span className="text-xs text-green-500">
                {savingsPercent}% off
              </span>
            )}
          </div>
          
          <Button variant="default" size="sm">
            Buy
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TicketCard;
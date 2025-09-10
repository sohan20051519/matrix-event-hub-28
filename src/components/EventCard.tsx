import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  registrationUrl?: string;
  entryFees?: { [key: string]: string };
  prizePool?: { [key: string]: { winner: string; runnerUp: string; thirdPlace: string } };
  onRegister: () => void;
  onViewDetails?: () => void;
}

const EventCard = ({ title, description, category, date, registrationUrl, entryFees, prizePool, onRegister, onViewDetails }: EventCardProps) => {
  const handleRegisterClick = () => {
    if (registrationUrl) {
      window.open(registrationUrl, '_blank');
    }
    // No popup modal when there's no registration URL
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-gold group h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="text-primary border-primary/50">
            {category}
          </Badge>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <CardTitle className="text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-4 flex-1">
          {entryFees && Object.keys(entryFees).length > 0 && (
            <div className="text-sm">
              <span className="font-semibold text-primary">Entry Fees: </span>
              <span className="text-muted-foreground">
                {Object.entries(entryFees).map(([key, value]) => `${key}: ${value}`).join(', ')}
              </span>
            </div>
          )}
          {prizePool && Object.keys(prizePool).length > 0 && (
            <div className="text-sm">
              <span className="font-semibold text-cosmic-red">Prize Pool: </span>
              <div className="text-muted-foreground">
                {Object.entries(prizePool).map(([category, prizes]) => (
                  <div key={category}>
                    <span className="font-medium">{category}: </span>
                    1st: {prizes.winner}, 2nd: {prizes.runnerUp}, 3rd: {prizes.thirdPlace}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-2 mt-4">
          {onViewDetails && (
            <EnhancedButton 
              variant="outline" 
              size="sm" 
              onClick={onViewDetails}
              className="flex-1"
            >
              View Details
            </EnhancedButton>
          )}
          <EnhancedButton 
            variant="matrix" 
            size="sm" 
            onClick={handleRegisterClick}
            className="flex-1"
          >
            Register
          </EnhancedButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
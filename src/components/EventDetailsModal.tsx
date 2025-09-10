import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Event } from "@/data/events";
import { Separator } from "@/components/ui/separator";

interface EventDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
  onRegister: () => void;
}

const EventDetailsModal = ({ isOpen, onClose, event, onRegister }: EventDetailsModalProps) => {
  if (!event) return null;

  const handleRegister = () => {
    if (event.registrationUrl) {
      window.open(event.registrationUrl, '_blank');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-sm border-primary/20">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {event.title}
              </DialogTitle>
              <DialogDescription className="text-lg text-muted-foreground mb-4">
                {event.description}
              </DialogDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-primary border-primary/50">
                  {event.category}
                </Badge>
                <Badge variant="outline" className="text-cosmic-red border-cosmic-red/50">
                  {event.date}
                </Badge>
                {event.teamSize && (
                  <Badge variant="outline" className="text-muted-foreground border-muted-foreground/50">
                    {event.teamSize}
                  </Badge>
                )}
              </div>
            </div>
            <EnhancedButton 
              variant="matrix" 
              size="lg" 
              onClick={handleRegister}
              className="shrink-0"
            >
              Register Now
            </EnhancedButton>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Entry Fees Section */}
          {event.entryFees && (
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                💰 Entry Fees
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(event.entryFees).map(([category, fee]) => (
                  <div key={category} className="bg-card/50 p-4 rounded-lg border border-primary/20">
                    <div className="text-lg font-semibold text-primary">{category}</div>
                    <div className="text-2xl font-bold text-cosmic-red">{fee}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prize Pool Section */}
          {event.prizePool && (
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                🏆 Prize Pool
              </h3>
              <div className="space-y-6">
                {Object.entries(event.prizePool).map(([category, prizes]) => (
                  <div key={category}>
                    <h4 className="text-lg font-semibold text-primary mb-3">{category}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-cosmic-gold/20 to-cosmic-gold/10 p-4 rounded-lg border border-cosmic-gold/30">
                        <div className="text-center">
                          <div className="text-3xl mb-2">🥇</div>
                          <div className="font-semibold text-foreground">Winner</div>
                          <div className="text-xl font-bold text-cosmic-gold">{prizes.winner}</div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-muted/20 to-muted/10 p-4 rounded-lg border border-muted/30">
                        <div className="text-center">
                          <div className="text-3xl mb-2">🥈</div>
                          <div className="font-semibold text-foreground">Runner Up</div>
                          <div className="text-xl font-bold text-muted-foreground">{prizes.runnerUp}</div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-cosmic-red/20 to-cosmic-red/10 p-4 rounded-lg border border-cosmic-red/30">
                        <div className="text-center">
                          <div className="text-3xl mb-2">🥉</div>
                          <div className="font-semibold text-foreground">Third Place</div>
                          <div className="text-xl font-bold text-cosmic-red">{prizes.thirdPlace}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rules Section */}
          {event.rules && event.rules.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                📋 Rules & Regulations
              </h3>
              <div className="bg-card/30 p-6 rounded-lg border border-primary/20">
                <ul className="space-y-3">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cosmic-gold rounded-full mt-2 shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <Separator className="bg-primary/20" />

          <div className="text-center">
            <EnhancedButton 
              variant="matrix" 
              size="lg" 
              onClick={handleRegister}
              className="w-full md:w-auto"
            >
              Register for {event.title}
            </EnhancedButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailsModal;
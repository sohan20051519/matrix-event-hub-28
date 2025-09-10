import { Badge } from "@/components/ui/badge";

const prizeData = [
  { event: "Basketball", prize: "₹60,000" },
  { event: "Dance", prize: "₹50,000" },
  { event: "Chess", prize: "₹20,000" },
  { event: "Carrom", prize: "₹20,000" },
];

const MovingPrizePool = () => {
  return (
    <section className="py-8 overflow-hidden bg-gradient-to-r from-primary/10 via-cosmic-red/10 to-primary/10 border-y border-primary/20">
      <div className="container mx-auto text-center mb-6">
        <div className="relative mx-auto max-w-fit">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-cosmic-red/5 to-primary/5 rounded-2xl"></div>
          <div className="relative bg-background/5 border border-white/10 rounded-2xl px-6 py-3">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent font-orbitron animate-glow mb-1">
              PRIZE POOL
            </h2>
            <p className="text-xl text-foreground/90 font-semibold tracking-wide">
              Win Big in Our Competitions!
            </p>
          </div>
        </div>
      </div>
      <div className="flex animate-scroll-left">
        {/* First set of items */}
        <div className="flex items-center gap-8 shrink-0">
          {prizeData.map((item, index) => (
            <div key={index} className="flex items-center gap-4 bg-card/50 backdrop-blur-sm rounded-lg px-6 py-3 border border-primary/30 whitespace-nowrap">
              <Badge variant="outline" className="text-primary border-primary/50 text-sm font-semibold">
                {item.event}
              </Badge>
              <span className="text-2xl font-bold text-cosmic-red">
                {item.prize}
              </span>
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-8 shrink-0 ml-8">
          {prizeData.map((item, index) => (
            <div key={`duplicate-${index}`} className="flex items-center gap-4 bg-card/50 backdrop-blur-sm rounded-lg px-6 py-3 border border-primary/30 whitespace-nowrap">
              <Badge variant="outline" className="text-primary border-primary/50 text-sm font-semibold">
                {item.event}
              </Badge>
              <span className="text-2xl font-bold text-cosmic-red">
                {item.prize}
              </span>
            </div>
          ))}
        </div>

        {/* Third set for extra smoothness */}
        <div className="flex items-center gap-8 shrink-0 ml-8">
          {prizeData.map((item, index) => (
            <div key={`triple-${index}`} className="flex items-center gap-4 bg-card/50 backdrop-blur-sm rounded-lg px-6 py-3 border border-primary/30 whitespace-nowrap">
              <Badge variant="outline" className="text-primary border-primary/50 text-sm font-semibold">
                {item.event}
              </Badge>
              <span className="text-2xl font-bold text-cosmic-red">
                {item.prize}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovingPrizePool;
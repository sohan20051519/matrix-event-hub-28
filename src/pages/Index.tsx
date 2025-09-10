import { Link } from "react-router-dom";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Card, CardContent } from "@/components/ui/card";
import MatrixBackground from "@/components/MatrixBackground";
import MapComponent from "@/components/MapComponent";
import MovingPrizePool from "@/components/MovingPrizePool";
import ScrollReveal from "@/components/ScrollReveal";
import useTypewriter from "@/hooks/use-typewriter";
import { Phone, Mail, Globe, MapPin, Instagram, Youtube } from "lucide-react";
const Index = () => {
  const {
    displayText,
    isComplete
  } = useTypewriter({
    text: "MATRIX 2K25",
    speed: 150,
    delay: 1000
  });
  return <div className="min-h-screen bg-background relative overflow-hidden">
      <MatrixBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto w-full">
            {/* College Branding */}
            <ScrollReveal delay={0} variant="up-sm">
              <div className="mb-8 sm:mb-6 md:mb-8">
                <h2 className="text-sm sm:text-sm md:text-lg lg:text-xl text-primary mb-2 sm:mb-2 px-4 leading-relaxed">
                  KLE SOCIETY'S DEGREE COLLEGE, NAGARBHAVI
                </h2>
                <p className="text-xs sm:text-xs md:text-sm text-muted-foreground px-4 leading-relaxed">(Affiliated to Bangalore University, Approved by AICTE)</p>
              </div>
            </ScrollReveal>

            {/* Main Title */}
            <ScrollReveal delay={0} variant="up-lg">
              <div className="mb-6 sm:mb-4 md:mb-6 px-4">
                <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-gold bg-clip-text text-transparent font-orbitron font-black block">
                    {displayText}
                    <span className={`inline-block w-0.5 h-8 sm:h-8 md:h-12 lg:h-14 xl:h-16 bg-gradient-gold ml-1 ${isComplete ? 'animate-pulse' : 'animate-pulse'}`} />
                  </span>
                </h1>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0} variant="up">
              <p className="text-lg sm:text-lg md:text-xl lg:text-2xl text-foreground mb-6 sm:mb-6 font-semibold px-4">
                The Inter-College Fest
              </p>
            </ScrollReveal>

            {/* Event Details */}
            <ScrollReveal delay={0} variant="up">
              <div className="bg-gradient-glass backdrop-blur-sm rounded-lg p-6 sm:p-4 md:p-6 mb-6 sm:mb-6 md:mb-8 border border-primary/20 mx-4 sm:mx-4 md:mx-0">
                <p className="text-sm sm:text-sm md:text-lg lg:text-xl text-foreground mb-4 sm:mb-3 md:mb-4 leading-relaxed">
                  23rd, 24th, 25th AND 26th SEPTEMBER 2025
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3 md:gap-4 text-center">
                  <div className="py-2">
                    <p className="text-xl sm:text-lg md:text-2xl font-bold text-primary">30+</p>
                    <p className="text-sm sm:text-xs md:text-sm text-muted-foreground">EVENTS</p>
                  </div>
                  <div className="py-2">
                    <p className="text-xl sm:text-lg md:text-2xl font-bold text-cosmic-red">₹3,50,000+</p>
                    <p className="text-sm sm:text-xs md:text-sm text-muted-foreground">CASH PRIZE POOL</p>
                  </div>
                  <div className="py-2">
                    <p className="text-xl sm:text-lg md:text-2xl font-bold text-primary">DIVERSE STALLS</p>
                    <p className="text-sm sm:text-xs md:text-sm text-muted-foreground">& ACTIVITIES</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={0} variant="up">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center mb-6 sm:mb-6 md:mb-8 px-4">
                <EnhancedButton variant="matrix" size="lg" className="w-full sm:w-auto text-base sm:text-base py-3" asChild>
                  <Link to="/downloads">
                    Brochure and posters
                  </Link>
                </EnhancedButton>
                <EnhancedButton variant="cosmic" size="lg" className="w-full sm:w-auto text-base sm:text-base py-3" asChild>
                  <Link to="/events">
                    Register Now
                  </Link>
                </EnhancedButton>
              </div>
            </ScrollReveal>

            {/* Tagline */}
            <ScrollReveal delay={0} variant="up-sm">
              <p className="text-base sm:text-base md:text-lg lg:text-xl text-gold italic mb-4 sm:mb-3 md:mb-4 px-4 leading-relaxed">Matrix 2025 - Where Talent Meets Opportunity!</p>
              <p className="text-sm sm:text-sm md:text-base text-muted-foreground px-4 leading-relaxed">
                Join us for an unforgettable experience of competition, creativity, and celebration.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Moving Prize Pool Section */}
        <MovingPrizePool />

        {/* About Section */}
        <section className="py-8 sm:py-8 md:py-12 lg:py-16 px-6 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            {/* About Us Content */}
            <ScrollReveal delay={0} variant="up">
              <div className="text-center mb-8 sm:mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-6 md:mb-8">
                  About Us
                </h2>
              </div>
            </ScrollReveal>
            
            <div className="max-w-4xl mx-auto space-y-6 sm:space-y-6 md:space-y-8 mb-10 sm:mb-12 md:mb-16">
              <ScrollReveal delay={0} variant="up">
                <p className="text-muted-foreground text-base sm:text-base md:text-lg leading-relaxed text-center px-4">
                  KLE Society's Degree College, Nagarbhavi is a vibrant hub of education that nurtures academic excellence and fosters holistic development. Our Institution stands as a beacon of knowledge, offering a dynamic and enriching environment for students to thrive and grow.
                </p>
              </ScrollReveal>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 md:gap-8">
                <ScrollReveal delay={0} variant="up">
                  <div className="text-center px-4">
                    <h3 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-4 sm:mb-3 md:mb-4">
                      Department of BCA
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      The Department of Computer Applications (BCA) at KLE Society's Degree College, Nagarbhavi is dedicated to shaping future IT leaders. With a dynamic curriculum, state-of-the-art facilities, and experienced faculty, we empower our students with the skills and knowledge needed to navigate the ever-evolving world of Computer Science.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0} variant="up">
                  <div className="text-center px-4">
                    <h3 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-4 sm:mb-3 md:mb-4">
                      The Matrix Experience
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      More than just a festival - it's a celebration of creativity, intellect and teamwork. A platform to showcase your skills, connect with like-minded individuals and create unforgettable memories.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* General Championship and Event Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-6 md:gap-8">
              <ScrollReveal delay={0} variant="up">
                <Card className="bg-gradient-glass backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6 sm:p-4 md:p-6">
                    <h4 className="text-lg sm:text-lg md:text-xl font-bold text-primary mb-3">General Championship</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Compete for the ultimate title! Colleges participating in minimum 20 events qualify for the General Championship - the most prestigious award of Matrix.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0} variant="up">
                <Card className="bg-gradient-glass backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6 sm:p-4 md:p-6">
                    <h4 className="text-lg sm:text-lg md:text-xl font-bold text-cosmic-red mb-3">Event Categories</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm sm:text-sm text-muted-foreground">
                      <span>🎮 Gaming</span>
                      <span>💻 Technical</span>
                      <span>🎨 Creative Arts</span>
                      <span>🏃 Sports</span>
                      <span>🎭 Cultural</span>
                      <span>📸 Media & Others</span>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Footer / Contact Section */}
        <footer className="py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-cosmic-red/5 relative">
          <div className="absolute inset-0 opacity-20"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <ScrollReveal delay={0} variant="up">
              <div className="text-center mb-16">
                <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  ✨ CONNECT WITH US ✨
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              {/* Contact Details */}
              <ScrollReveal delay={0} variant="up">
                <div className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gold mb-8 text-center md:text-left">Contact Details</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <Phone className="text-gold flex-shrink-0" size={20} />
                      <a href="tel:9533985382" className="text-foreground text-lg hover:text-gold transition-colors">9533985382</a>
                    </div>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <Mail className="text-gold flex-shrink-0" size={20} />
                      <a href="mailto:matrix2025@klebca.edu.in" className="text-foreground text-lg hover:text-gold transition-colors">matrix2025@klebca.edu.in</a>
                    </div>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <Globe className="text-gold flex-shrink-0" size={20} />
                      <a href="https://www.bca.klenagarbhavi.edu.in" target="_blank" rel="noopener noreferrer" className="text-foreground text-lg hover:text-gold transition-colors">www.bca.klenagarbhavi.edu.in</a>
                    </div>
                  </div>
                  <div className="pt-8 flex justify-center md:justify-start">
                    <EnhancedButton variant="matrix" size="lg" className="px-8 py-3 text-lg font-semibold" asChild>
                      <Link to="/events">Register for Events</Link>
                    </EnhancedButton>
                  </div>
                </div>
              </ScrollReveal>

              {/* Follow Us */}
              <ScrollReveal delay={0} variant="up">
                <div className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold text-cosmic-red mb-8 text-center md:text-left">Follow Us</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <Instagram className="text-cosmic-red flex-shrink-0" size={20} />
                      <a href="https://instagram.com/klebcanag" target="_blank" rel="noopener noreferrer" className="text-foreground text-lg hover:text-cosmic-red transition-colors">@klebcanag</a>
                    </div>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <Youtube className="text-cosmic-red flex-shrink-0" size={20} />
                      <a href="https://www.youtube.com/@klebcanagarabhavi3689" target="_blank" rel="noopener noreferrer" className="text-foreground text-lg hover:text-cosmic-red transition-colors">KLE BCA Nagarbhavi</a>
                    </div>
                    <div className="flex items-start gap-4 justify-center md:justify-start">
                      <MapPin className="text-cosmic-red flex-shrink-0 mt-1" size={20} />
                      <div className="text-foreground text-lg leading-relaxed text-center md:text-left">
                        <div className="font-medium">KLE Society's Degree College, Nagarbhavi</div>
                        <div className="text-gold mt-2">📍 Bengaluru - 560072</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Find Us Here */}
              <ScrollReveal delay={0} variant="up">
                <div className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gold mb-8 text-center md:text-left">Find Us Here</h3>
                  <div className="relative">
                    <MapComponent />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </footer>
      </div>
    </div>;
};
export default Index;

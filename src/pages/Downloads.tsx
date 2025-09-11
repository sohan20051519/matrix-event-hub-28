import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Downloads = () => {
  const handleBrochureDownload = () => {
    window.open('https://drive.google.com/file/d/12NPPBWawdw8nhMp2otOPVLfxkk-yN17c/view?usp=sharing', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Button variant="outline" size="sm" asChild>
          <Link to="/" className="flex items-center gap-2">
            <Home size={16} />
            Home
          </Link>
        </Button>
      </div>

      {/* Header */}
      <ScrollReveal>
        <section className="py-16 md:py-20 px-4 md:px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4 md:mb-6">
              Downloads & Resources
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Get all the information you need about MATRIX 2K25
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Main Brochure Download */}
      <ScrollReveal>
        <section className="py-8 md:py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5 mx-4 md:mx-0">
              <CardHeader className="text-center p-4 md:p-6">
                <CardTitle className="text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
                  <FileText className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  Event Brochure
                </CardTitle>
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground px-2 md:px-0">
                  Download the complete MATRIX 2K25 brochure with all event details, schedules, and guidelines.
                </p>
              </CardHeader>
              <CardContent className="text-center p-4 md:p-6">
                <Button 
                  onClick={handleBrochureDownload}
                  size="default"
                  className="text-sm md:text-base lg:text-lg px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 h-auto w-full md:w-auto"
                >
                  <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Download Brochure
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollReveal>

      {/* Posters Section */}
      <ScrollReveal>
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Event Posters</h2>
              <p className="text-lg text-muted-foreground">
                Check out our event posters and promotional materials
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-primary/10 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <img 
                    src="/lovable-uploads/23863fc0-518c-48c9-aaa3-814397e7c781.png" 
                    alt="Dance Competition - Matrix 2K25 - Cash Prize ₹50,000 - September 25, 2025"
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-primary/10 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <img 
                    src="/lovable-uploads/8ba0649c-5f9e-47b1-ab8f-6bc73b7d55e4.png" 
                    alt="Carrom Tournament - Matrix 2K25 - Cash Prize ₹20,000"
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-primary/10 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <img 
                    src="/lovable-uploads/632f019c-fb37-444c-ac99-d64ae655ccc7.png" 
                    alt="Volleyball Championship - Matrix 2K25 - Cash Prize ₹20,000 - September 23, 2025"
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-primary/10 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <img 
                    src="/lovable-uploads/d6419b6a-1666-4c6f-b481-0a92a2426a27.png" 
                    alt="Chess Tournament - Matrix 2K25 - Cash Prize ₹20,000 - Entry Fee ₹300"
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Downloads;
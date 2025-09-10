import { useState, useEffect } from "react";
import { events, Event } from "@/data/events";
import EventCard from "@/components/EventCard";
import CategorySection from "@/components/CategorySection";
import RegistrationModal from "@/components/RegistrationModal";
import EventDetailsModal from "@/components/EventDetailsModal";
import MatrixBackground from "@/components/MatrixBackground";
import ScrollReveal from "@/components/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventDetails, setSelectedEventDetails] = useState<Event | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const categories = [{
    name: "Gaming",
    icon: "🎮"
  }, {
    name: "Technical",
    icon: "💻"
  }, {
    name: "Creative Arts",
    icon: "🎨"
  }, {
    name: "Sports",
    icon: "🏃"
  }, {
    name: "Cultural",
    icon: "🎭"
  }, {
    name: "Media & Others",
    icon: "📸"
  }];
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || event.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });
  const getEventsByCategory = (categoryName: string) => {
    return filteredEvents.filter(event => event.category === categoryName);
  };
  const handleRegister = (eventTitle: string) => {
    setSelectedEvent(eventTitle);
    setIsModalOpen(true);
  };
  const handleViewDetails = (event: Event) => {
    setSelectedEventDetails(event);
    setIsDetailsModalOpen(true);
  };
  const handleRegisterFromDetails = () => {
    if (selectedEventDetails) {
      setSelectedEvent(selectedEventDetails.title);
      setIsDetailsModalOpen(false);
      setIsModalOpen(true);
    }
  };
  return <div className="min-h-screen bg-background relative">
      <MatrixBackground />
      
      {/* Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Button variant="outline" size="sm" asChild>
          <Link to="/" className="flex items-center gap-2">
            <Home size={16} />
            Home
          </Link>
        </Button>
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <ScrollReveal delay={0} variant="up-lg">
          <div className="py-16 text-center relative">
            <div className="absolute inset-0 bg-background/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                MATRIX 2K25
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-2">
                Events Overview
              </p>
              <p className="text-lg text-cosmic-red font-semibold">30+ Events • ₹3,50,000+ Prize Pool</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Filters */}
        <div className="container mx-auto px-4 py-8">
          <ScrollReveal delay={0} variant="up">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <Input placeholder="Search events..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="md:w-1/3 bg-card/50 border-primary/20" />
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="md:w-1/4 bg-card/50 border-primary/20">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => <SelectItem key={category.name} value={category.name}>
                      {category.name}
                    </SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </ScrollReveal>

          {/* Events by Category */}
          {categoryFilter === "all" ? categories.map((category, index) => {
          const categoryEvents = getEventsByCategory(category.name);
          if (categoryEvents.length === 0) return null;
          return <ScrollReveal key={category.name} delay={0} variant="up">
                  <CategorySection title={category.name} icon={category.icon}>
                    {categoryEvents.map((event, eventIndex) => <ScrollReveal key={event.id} delay={0} variant="up-sm">
                        <EventCard title={event.title} description={event.description} category={event.category} date={event.date} registrationUrl={event.registrationUrl} entryFees={event.entryFees} prizePool={event.prizePool} onRegister={() => handleRegister(event.title)} onViewDetails={() => handleViewDetails(event)} />
                      </ScrollReveal>)}
                  </CategorySection>
                </ScrollReveal>;
        }) : <ScrollReveal delay={0} variant="up">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                {filteredEvents.map((event, index) => <ScrollReveal key={event.id} delay={0} variant="up-sm">
                    <EventCard title={event.title} description={event.description} category={event.category} date={event.date} registrationUrl={event.registrationUrl} entryFees={event.entryFees} prizePool={event.prizePool} onRegister={() => handleRegister(event.title)} onViewDetails={() => handleViewDetails(event)} />
                  </ScrollReveal>)}
              </div>
            </ScrollReveal>}

          {filteredEvents.length === 0 && <ScrollReveal delay={0} variant="up">
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
                  No events found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or category filter.
                </p>
              </div>
            </ScrollReveal>}
        </div>
      </div>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} eventTitle={selectedEvent} />
      
      <EventDetailsModal isOpen={isDetailsModalOpen} onClose={() => setIsDetailsModalOpen(false)} event={selectedEventDetails} onRegister={handleRegisterFromDetails} />
    </div>;
};
export default Events;
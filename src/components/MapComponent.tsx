import React from 'react';
import { Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MapComponent = () => {
  const collegeQuery = "KLE Society's Degree College, Nagarbhavi, Bangalore";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(collegeQuery)}`;
  
  const handleOpenMaps = () => {
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border border-primary/20 shadow-lg">
      {/* Google Maps Embed */}
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0967842935393!2d77.5024113!3d12.9279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzQwLjQiTiA3N8KwMzAnMDguNyJF!5e0!3m2!1sen!2sin!4v1638360000000!5m2!1sen!2sin&q=KLE+Society's+Degree+College,+Nagarbhavi,+Bangalore`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      />
      
      {/* Directions Button Overlay */}
      <div className="absolute bottom-4 left-4 right-4">
        <Button
          onClick={handleOpenMaps}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
        >
          <Navigation className="w-4 h-4 mr-2" />
          Get Directions
        </Button>
      </div>
    </div>
  );
};

export default MapComponent;
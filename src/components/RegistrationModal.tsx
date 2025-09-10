import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
}

const RegistrationModal = ({ isOpen, onClose, eventTitle }: RegistrationModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    course: "",
    year: "",
    teamMembers: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Registration data:", { event: eventTitle, ...formData });
    
    toast({
      title: "Registration Successful!",
      description: `You have been registered for ${eventTitle}. We'll contact you soon with further details.`,
    });
    
    onClose();
    setFormData({
      name: "",
      email: "",
      phone: "",
      college: "",
      course: "",
      year: "",
      teamMembers: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-card border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-foreground">Register for {eventTitle}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill in your details to register for this exciting event.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              className="bg-background/50"
            />
          </div>
          
          <div className="grid w-full gap-1.5">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="bg-background/50"
            />
          </div>
          
          <div className="grid w-full gap-1.5">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
              className="bg-background/50"
            />
          </div>
          
          <div className="grid w-full gap-1.5">
            <Label htmlFor="college">College Name *</Label>
            <Input
              id="college"
              value={formData.college}
              onChange={(e) => handleInputChange("college", e.target.value)}
              required
              className="bg-background/50"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="course">Course</Label>
              <Select onValueChange={(value) => handleInputChange("course", value)}>
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bca">BCA</SelectItem>
                  <SelectItem value="bcom">B.Com</SelectItem>
                  <SelectItem value="bba">BBA</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid w-full gap-1.5">
              <Label htmlFor="year">Year</Label>
              <Select onValueChange={(value) => handleInputChange("year", value)}>
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1st Year</SelectItem>
                  <SelectItem value="2">2nd Year</SelectItem>
                  <SelectItem value="3">3rd Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid w-full gap-1.5">
            <Label htmlFor="teamMembers">Team Members (if applicable)</Label>
            <Textarea
              id="teamMembers"
              placeholder="List team member names if this is a team event"
              value={formData.teamMembers}
              onChange={(e) => handleInputChange("teamMembers", e.target.value)}
              className="bg-background/50"
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <EnhancedButton 
              type="button" 
              variant="ghost" 
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </EnhancedButton>
            <EnhancedButton 
              type="submit" 
              variant="matrix"
              className="flex-1"
            >
              Register
            </EnhancedButton>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Daily Commuter",
    content: "I've been using Pancture Proof tires for six months now, and I haven't had a single issue. The peace of mind is worth every penny.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Delivery Driver",
    content: "As someone who drives 200+ km daily, the noise reduction is a game changer. My ride is so much quieter now.",
    rating: 5,
  },
  {
    name: "Emily Botha",
    role: "Family Driver",
    content: "Safety is my priority with kids in the car. These tires give me confidence on every journey, rain or shine.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Trusted by Drivers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

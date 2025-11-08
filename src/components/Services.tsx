import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Package, Shield, Truck } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Expert technicians ensure perfect fitment and optimal performance for your vehicle.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
  },
  {
    icon: Package,
    title: "Premium Tire Selection",
    description: "Wide range of Pancture Proof tires for all vehicle types and driving conditions.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    icon: Shield,
    title: "Lifetime Protection Plan",
    description: "Comprehensive warranty coverage and 24/7 roadside assistance for complete peace of mind.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
  },
  {
    icon: Truck,
    title: "Mobile Service",
    description: "Convenient at-home or office installation service available throughout Johannesburg.",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Our Services
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Comprehensive solutions designed to keep you safe on the road
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                <div className="absolute bottom-4 left-4 p-3 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

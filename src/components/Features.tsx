import { Shield, Volume2, Award, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Puncture Protection",
    description: "Advanced multi-layer technology prevents punctures and keeps you safe on any road.",
  },
  {
    icon: Volume2,
    title: "Noise Reduction",
    description: "Engineered to minimize road noise for a quieter, more peaceful driving experience.",
  },
  {
    icon: Award,
    title: "Enhanced Safety",
    description: "Superior grip and stability in all weather conditions for maximum confidence.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Durability",
    description: "Sustainable materials and extended lifespan reduce environmental impact.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Why Choose Pancture Proof?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group bg-card border-border hover:border-primary transition-all duration-300 hover:glow-primary"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

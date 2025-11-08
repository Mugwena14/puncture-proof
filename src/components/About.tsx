const About = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-accent opacity-30"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient">
          Innovation Meets Safety
        </h2>
        <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed">
          <p className="text-center">
            Pancture Proof technology revolutionizes tire safety with cutting-edge puncture protection 
            that keeps you moving forward, no matter what the road throws at you.
          </p>
          <p className="text-center">
            Our advanced materials not only shield against punctures but also significantly reduce 
            road noise, delivering a quieter, more comfortable driving experience. With enhanced 
            durability and eco-friendly construction, Pancture Proof tires are built to last while 
            protecting both you and the environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

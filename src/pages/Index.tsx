import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import taximeter from "@/assets/taximeter.png";
import vt from "@/assets/vehicke.jpeg";
import pd from "@/assets/product design.jpeg";
import ed from "@/assets/engdes.jpeg";

import { ArrowRight, Cpu, Cog, PenTool, Layers, Settings } from "lucide-react";

const slides = [
  {
    image: vt,
    tagline: "Automotive Product Design",
    description:
      "We deliver engineering excellence through innovative automotive design, turning complex challenges into elegant, manufacturable solutions.",
  },
  {
    image: taximeter,
    tagline: "Enclosure Design",
    description:
      "We design and develop custom enclosures for worldwide clients, industries like Consumer Electronics, Appliance products, Medical Equipments, LED lighting products, Automotive products, etc.",
  },
  {
    image: pd,
    tagline: "Product Design & Development",
    description:
      "Transforming ideas into manufacturable products with a focus on innovation, quality, and market readiness.",
  },
  {
    image: ed,
    tagline: "Engineering Design",
    description:
      "Complex Engineering design considerations including tooling feasibilty. ",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: PenTool,
      title: "Product Design",
      description: "End-to-end product design from concept to market-ready solutions",
    },
    
    {
      icon: Layers,
      title: "Automotive Design",
      description: "Specialized automotive components like instrument cluster, vehicle tracking system, automotive display design solutions",
    },
    {
      icon: Cpu,
      title: "Engineering Design",
      description: "Complex product engineering design and development ready to market.",
    },
    {
      icon: Settings,
      title: "Enclosure Design",
      description: "Enclosure design with aesthetic, ergonomic and eviromental friendly.",
    },
    {
      icon: Settings,
      title: "Prototype Services",
      description: "Prototype development for breakthrough ideas.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-fill"
            />
          </div>
        ))}

        <div className="absolute inset-0 z-10 bg-foreground/70 flex items-center justify-center">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-background">
                VRTEXGLOBAL
              </h1>
              <p className="mt-4 text-lg md:text-xl text-background/90 tracking-wide">
                {slides[currentSlide].tagline}
              </p>
              <p className="mt-6 text-base md:text-lg text-background/80 max-w-2xl mx-auto leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-background text-background hover:bg-background hover:text-foreground"
                  asChild
                >
                  <Link to="/services">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-background text-background hover:bg-background hover:text-foreground"
                  asChild
                >
                  <Link to="/contact">Contact VRTEXGLOBAL</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-background w-6"
                  : "bg-background/50 hover:bg-background/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Engineering Services
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Comprehensive mechanical design solutions tailored to your specific needs
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                animation="fade-in-up"
                delay={index * 100}
              >
                <div className="group bg-background p-8 border border-border hover:border-foreground transition-all duration-300 h-full">
                  <service.icon className="w-8 h-8 text-foreground mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center" delay={400}>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                Why VRTEXGLOBAL
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Engineering Excellence,<br />Delivered Precisely
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                At VRTEXGLOBAL, we combine deep technical expertise with innovative
                problem-solving to deliver product design solutions that exceed
                expectations. Our commitment to precision and quality ensures every
                project meets the highest industry standards.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <span className="text-3xl font-bold text-foreground">150+</span>
                  <p className="mt-2 text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-foreground">99%</span>
                  <p className="mt-2 text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-secondary p-6 border border-border">
                    <Cog className="w-6 h-6 text-foreground mb-3" />
                    <h4 className="font-semibold text-foreground">Precision</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Micron-level accuracy in every design
                    </p>
                  </div>
                  <div className="bg-foreground p-6">
                    <Cpu className="w-6 h-6 text-background mb-3" />
                    <h4 className="font-semibold text-background">Innovation</h4>
                    <p className="text-sm text-gray-400 mt-2">
                      Cutting-edge solutions for complex challenges
                    </p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-foreground p-6">
                    <Layers className="w-6 h-6 text-background mb-3" />
                    <h4 className="font-semibold text-background">Quality</h4>
                    <p className="text-sm text-gray-400 mt-2">
                      Rigorous standards at every step
                    </p>
                  </div>
                  <div className="bg-secondary p-6 border border-border">
                    <Settings className="w-6 h-6 text-foreground mb-3" />
                    <h4 className="font-semibold text-foreground">Efficiency</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Optimized processes, on-time delivery
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-background tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Let's discuss how VRTEXGLOBAL can bring your product design ideas to physical product
              with precision and innovation.
            </p>
            <div className="mt-8">
              <Button
                variant="outline"
                size="lg"
                className="border-background text-background hover:bg-background hover:text-foreground"
                asChild
              >
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;

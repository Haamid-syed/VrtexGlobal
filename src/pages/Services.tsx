import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import {
  PenTool,
  Layers,
  Cpu,
  Settings,
  FileText,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "CAD Modeling & Drafting",
    description:
      "Precision 3D CAD modeling and 2D technical drafting services using industry-standard software. We create detailed, accurate models that serve as the foundation for manufacturing and analysis.",
    features: [
      "3D solid and surface modeling",
      "2D technical drawings",
      "Assembly modeling",
      "Design for manufacturing (DFM)",
    ],
  },
  {
    icon: Layers,
    title: "Product & Concept Design",
    description:
      "From initial ideation to refined concepts, we develop innovative product designs that balance functionality, manufacturability, and aesthetics. Our iterative approach ensures optimal results.",
    features: [
      "Concept development",
      "Industrial design",
      "Design optimization",
      "Material selection",
    ],
  },
  {
    icon: Cpu,
    title: "Mechanical Analysis",
    description:
      "Comprehensive engineering analysis including FEA, stress analysis, and thermal simulation. We validate designs to ensure they meet performance requirements and safety standards.",
    features: [
      "Finite Element Analysis (FEA)",
      "Stress and strain analysis",
      "Thermal simulation",
      "Motion analysis",
    ],
  },
  {
    icon: Settings,
    title: "Prototyping Support",
    description:
      "We guide your designs through the prototyping phase, providing support for 3D printing, CNC machining, and other rapid prototyping methods to bring concepts to physical reality.",
    features: [
      "3D printing preparation",
      "CNC machining support",
      "Prototype iteration",
      "Testing documentation",
    ],
  },
  {
    icon: FileText,
    title: "Manufacturing Drawings",
    description:
      "Production-ready technical drawings with complete GD&T specifications, tolerances, and manufacturing notes. Our drawings ensure seamless communication with manufacturing partners.",
    features: [
      "GD&T specifications",
      "Tolerance analysis",
      "Bill of materials (BOM)",
      "Assembly instructions",
    ],
  },
  {
    icon: Wrench,
    title: "Design Consultation",
    description:
      "Expert mechanical engineering consultation to evaluate existing designs, identify improvements, and provide strategic recommendations for your engineering challenges.",
    features: [
      "Design reviews",
      "Engineering audits",
      "Feasibility studies",
      "Cost optimization",
    ],
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-3xl">
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Our Services
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Mechanical Design<br />Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Comprehensive engineering solutions from concept to production.
              Each service is delivered with precision, expertise, and an
              unwavering commitment to quality.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                animation="fade-in-up"
                delay={index * 100}
              >
                <div
                  className="group relative bg-background border border-border p-8 h-full transition-all duration-500 overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Default State */}
                  <div
                    className={`transition-all duration-300 ${
                      hoveredIndex === index
                        ? "opacity-0 translate-y-[-10px]"
                        : "opacity-100 translate-y-0"
                    }`}
                  >
                    <service.icon className="w-10 h-10 text-foreground mb-6" />
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <div className="w-12 h-px bg-foreground mb-4" />
                    <p className="text-sm text-muted-foreground">
                      Hover to learn more
                    </p>
                  </div>

                  {/* Hover State */}
                  <div
                    className={`absolute inset-0 p-8 bg-foreground transition-all duration-300 flex flex-col justify-center ${
                      hoveredIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <h3 className="text-lg font-bold text-background mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-xs text-gray-400 flex items-center"
                        >
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Our Process
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A structured approach that ensures quality and precision at every stage
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your requirements and objectives" },
              { step: "02", title: "Design", desc: "Creating innovative solutions with precision" },
              { step: "03", title: "Validate", desc: "Rigorous analysis and testing verification" },
              { step: "04", title: "Deliver", desc: "Production-ready documentation and support" },
            ].map((item, index) => (
              <AnimatedSection key={item.step} animation="fade-in-up" delay={index * 150}>
                <div className="text-center">
                  <span className="text-6xl font-bold text-gray-200">{item.step}</span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;

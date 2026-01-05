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
  Box,
  Zap,
  Cog,
  RotateCcw,
  Hammer,
  Package,
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Product Design",
    description:
      "End-to-end product design services that transform innovative ideas into market-ready solutions. We focus on functionality, aesthetics, and manufacturability to create products that stand out.",
    features: [
      "Concept Design",
      "Detailed Engineering design",
      "User-centric design",
      "Design for Assembly (DFA)",
    ],
  },
  {
    icon: Cog,
    title: "Automotive Design",
    description:
      "We deliver engineering excellence through innovative automotive design, turning complex challenges into elegant, manufacturable solutions.",
    features: [
      "Instrument Cluster Design",
      "Standalone Displays",
      "Powertrain systems",
      "Interior & exterior parts",
    ],
  },
  {
    icon: Settings,
    title: "Mechanical Engineering Design",
    description:
      "Comprehensive mechanical engineering services covering stress analysis, mechanism design, and system optimization. We ensure your designs perform reliably under real-world conditions.",
    features: [
      "Mechanism design",
      "Load analysis",
      "Material selection",
      "Performance optimization",
    ],
  },

  {
    icon: Hammer,
    title: "Enclosure Design",
    description:
      "The product enclosure serve to protect sensitive electronic components from environmental factors, physical damage and electromagnetic interference. ",
    features: [
      "Aesthetic and Ergonomics",
      "Environmental protection (IP Rating)",
      "Thermal management",
      "EMI/RFI shielding",
      "Size and form factor.",
      "Safety features and regulatory compliance."
    ],
  },
  {
    icon: Hammer,
    title: "Prototyping",
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
    icon: Zap,
    title: "Electromechanical Product Design",
    description:
      "Integrated electromechanical design combining mechanical systems with electronic components. We create seamless solutions for devices requiring precision motion and control.",
    features: [
      "Actuator integration",
      "Motor mounting design",
      "Sensor housings",
      "Thermal management",
    ],
  },
  
  {
    icon: Cpu,
    title: "CAD Modeling",
    description:
      "Precision 3D CAD modeling and 2D technical drafting using industry-standard software. We create detailed, accurate models that serve as the foundation for manufacturing and analysis.",
    features: [
      "3D solid & surface modeling",
      "2D technical drawings",
      "Assembly modeling",
      "Parametric design",
    ],
  },
  {
    icon: Box,
    title: "Plastic Product Design",
    description:
      "Expert plastic part design optimized for injection molding and other manufacturing processes. We focus on material selection, wall thickness, and tooling considerations for cost-effective production.",
    features: [
      "Injection mold design",
      "Draft angle optimization",
      "Wall thickness analysis",
      "Material selection",
    ],
  },
  {
    icon: FileText,
    title: "Sheet Metal Design",
    description:
      "Specialized sheet metal design for enclosures, brackets, and structural components. Our designs consider bend radii, material properties, and manufacturing constraints for optimal fabrication.",
    features: [
      "Enclosure design",
      "Bracket & frame design",
      "Flat pattern development",
      "Bend analysis",
    ],
  },
  {
    icon: Package,
    title: "Product Development",
    description:
      "Full-cycle product development from initial concept through production launch. We guide your project through every phase, ensuring quality deliverables and timely milestones.",
    features: [
      "Concept to production",
      "Prototype iteration",
      "Design validation",
      "Production support",
    ],
  },
  {
    icon: Layers,
    title: "Industrial Product Design",
    description:
      "Robust industrial product design for machinery, equipment, and heavy-duty applications. Our designs prioritize durability, efficiency, and ease of maintenance for demanding environments.",
    features: [
      "Heavy equipment design",
      "Machinery components",
      "Tooling design",
      "Ergonomic solutions",
    ],
  },
  {
    icon: Wrench,
    title: "Design Analysis",
    description:
      "Comprehensive engineering analysis including FEA, stress analysis, and thermal simulation. We validate designs to ensure they meet performance requirements and safety standards.",
    features: [
      "Finite Element Analysis (FEA)",
      "Stress & strain analysis",
      "Thermal simulation",
      "Motion analysis",
    ],
  },
  {
    icon: RotateCcw,
    title: "Reverse Engineering",
    description:
      "Accurate reverse engineering services to recreate existing parts or legacy components. We use 3D scanning and precision measurement to generate CAD models from physical samples.",
    features: [
      "3D scanning & digitization",
      "Legacy part recreation",
      "As-built documentation",
      "Design improvement",
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
              Product Design<br />Services
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
                  className="group relative bg-background border border-border p-6 min-h-[280px] transition-all duration-500 overflow-hidden cursor-pointer"
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
                    className={`absolute inset-0 p-6 bg-foreground transition-all duration-300 flex flex-col justify-start overflow-y-auto ${
                      hoveredIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <h3 className="text-base font-bold text-background mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-300 mb-3 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-xs text-gray-400 flex items-center"
                        >
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 flex-shrink-0" />
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

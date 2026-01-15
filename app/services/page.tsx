"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
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
    slug: "product-design",
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
    slug: "automotive-design",
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
    slug: "mechanical-engineering",
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
    slug: "enclosure-design",
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
    slug: "prototyping",
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
    slug: "electromechanical",
    description:
      "Electromechanical Product Design integrates mechanical, electronics and electrical engineering to create products like automotive or appliances, focusing on seamless collaboration, thermal management, and EMI mitigation for efficient, functional, and reliable devices",
    features: [
      "Integration",
      "Optimization",
      "IP Ratings",
      "Thermal management",
      "EMI/EMC"
    ],
  },
  {
    icon: Cpu,
    title: "CAD Modeling",
    slug: "cad-modeling",
    description:
      "Precision 3D CAD modeling and 2D technical drawing using industry-standard software. We create detailed, accurate models that serve as the foundation for manufacturing and analysis.",
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
    slug: "plastic-design",
    description:
      "Expert plastic part design optimized for injection molding and other manufacturing processes. We focus on material selection, wall thickness, and tooling considerations for cost-effective production.",
    features: [
      "Material selection",
      "Wall thickness",
      "Draft analysis",
      "Manufacturing process",
    ],
  },
  {
    icon: FileText,
    title: "Sheet Metal Design",
    slug: "sheet-metal",
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
    slug: "product-development",
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
    title: "On-Site Services",
    slug: "onsite-services",
    description:
      "Get multi-disciplinary experts without the cost of full-time employees. Engage specialized skills for specific project durations. Affordable solutions, especially for small, medium and large businesses.",
    features: [],
  },
  {
    icon: Wrench,
    title: "Design Analysis",
    slug: "design-analysis",
    description:
      "Comprehensive engineering analysis including FEA, stress analysis, and thermal simulation. We validate designs to ensure they meet performance requirements and safety standards.",
    features: [
      "Finite Element Analysis (FEA)",
      "Stress & strain analysis",
      "Thermal simulation",
      "Structural analysis",
      "Environmental Effect",
    ],
  },
  {
    icon: RotateCcw,
    title: "Reverse Engineering",
    slug: "reverse-engineering",
    description:
      "Accurate reverse engineering services to recreate existing parts or legacy components. We use 3D scanning, benchmarking and precision measurement to generate CAD models from physical samples.",
    features: [
      "3D scanning & digitization",
      "Benchmarking",
      "Legacy part recreation",
      "As-built documentation",
      "Design improvement",
    ],
  },
];

const processSteps = [
  { image: "/images/Define.jpeg", title: "DEFINE", desc: "Understanding your requirements and objectives" },
  { image: "/images/Design.jpeg", title: "DESIGN", desc: "Creating innovative solutions with precision" },
  { image: "/images/Develop.jpeg", title: "DEVELOP", desc: "Develop for breakthrough ideas" },
  { image: "/images/Verify.jpeg", title: "VERIFY", desc: "Rigorous analysis and testing verification" },
  { image: "/images/Deliver.jpeg", title: "DELIVER", desc: "Production-ready data and support" },
];

export default function ServicesPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.substring(1) : "";
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          element.classList.add("ring-2", "ring-foreground", "ring-offset-2");
          setTimeout(() => {
            element.classList.remove("ring-2", "ring-foreground", "ring-offset-2");
          }, 2000);
        }
      }, 300);
    }
  }, []);

  const handleServiceClick = (slug: string) => {
    router.push(`/portfolio#${slug}`);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/serv_page.jpeg"
            alt="Engineering background"
            className="w-full h-full object-contain object-right opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/10 to-background" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <span className="text-sm font-medium tracking-widest text-black uppercase">
              Our Services
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Product Design and Development<br />Services
            </h1>
            <p className="mt-6 text-lg text-black leading-relaxed">
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
                  id={service.slug}
                  className="group relative bg-background border border-border p-8 min-h-[320px] transition-all duration-500 overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleServiceClick(service.slug)}
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

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((item, index) => (
              <AnimatedSection key={item.title} animation="fade-in-up" delay={index * 150}>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

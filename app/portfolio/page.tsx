"use client";

import { useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const projects = [
  {
    id: 1,
    title: "Product design for Smoke Detector",
    slug: "product-design",
    description:
      "Product design of a smoke detector primarily involves a disk-shaped plastic enclosure engineered to securely house internal electronic components, facilitate air/smoke entry into a sensing chamber, and meet safety standards.",
    image: "/images/image1.jpeg",
  },
  {
    id: 2,
    title: "Automotive product design for Vehicle tracking system",
    slug: "automotive-design",
    description:
      "Aesthetical improved Compact Design of VTS. Engineering Design & Detailing of VTS. Engineering design with IP 65 Protection.",
    image: "/images/vts.png",
  },
  {
    id: 3,
    title: "Engineering design for MFECU",
    slug: "mechanical-engineering",
    description:
      "Compact Engineering Design for MFECU. Plastic Enclosure Housing & Top cover – Plastic ABS material for MFECU",
    image: "/images/eng_des_port.jpeg",
  },
  {
    id: 4,
    title: "Enclosure Design for Taximeter",
    slug: "enclosure-design",
    description:
      "Aesthetically improved Compact Design of Plastic Enclosure Housing – Plastic ABS +PC with IP65 protection for Taximeter. Engineering Design for Printer Mounting. Engineering Design of Cover in PC for Paper Roll. LED Illuminated indication on the back side of Meter for 'FOR HIRE'.",
    image: "/images/enc_d_port.png",
  },
  {
    id: 5,
    title: "Prototype development for Jumbo meter flag compact",
    slug: "prototyping",
    description:
      "3D printed prototype development for breakthrough ideas",
    image: "/images/prot_d.jpeg",
  },
  {
    id: 6,
    title: "Electromechanical Product Design for Tabmeter",
    slug: "electromechanical",
    description:
      "Aesthetically improved Compact Design of Plastic Enclosure. Housing – Plastic ABS +PC with IP65 protection for Tabmeter. Engineering Design for display Mounting. Engineering Design for Meter Mounting on Taxi/Rickshaw.",
    image: "/images/image6.jpeg",
  },
  {
    id: 7,
    title: "3D CAD Modelling",
    slug: "cad-modeling",
    description:
      "CAD Modeling and Mechanical design for Soldering fixture",
    image: "/images/image7.jpeg",
  },
  {
    id: 8,
    title: "Plastic product design for JW weighing scale Precision 600g",
    slug: "plastic-design",
    description:
      "Aesthetically improved Compact Design of Plastic Enclosure. Housing – Plastic ABS with IP54 protection for weighing scale. Engineering Design for electronics and weighing scale Mounting.",
    image: "/images/ppd.png",
  },
  {
    id: 9,
    title: "Sheet metal design for Power supply",
    slug: "sheet-metal",
    image: "/images/smd.png",
  },
  {
    id: 10,
    title: "Reverse engineering for Suction unit (Medical product)",
    slug: "reverse-engineering",
    image: "/images/red.jpeg",
  },
  {
    id: 11,
    title: "New Product Development process",
    slug: "product-development",
    image: "/images/npd.jpeg",
  },
  {
    id: 12,
    title: "Onsite Service",
    slug: "onsite-services",
    description: "Get multi-disciplinary experts without the cost of full-time employees. Engage specialized skills for specific project durations",
    image: "/images/oss.jpeg",
  },
  {
    id: 13,
    title: "Design Analysis",
    slug: "design-analysis",
    description: "To verify design, perform various type of analysis like Structural analysis (Static/Dynamic), Thermal analysis, Environmental test analysis, Vibration analysis, CFD etc",
    image: "/images/da.png",
  },
];

export default function PortfolioPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const slug = window.location.hash.slice(1);
      const element = document.getElementById(slug);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/port_bg.jpeg"
            alt="Engineering background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/10 to-background" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <span className="text-sm font-medium tracking-widest text-black uppercase">
              Our Work
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Portfolio
            </h1>
            <p className="mt-6 text-lg text-black leading-relaxed">
              <strong>VrtexGlobal</strong> is an Automotive, Industrial Product design and development Service providing firm which provides designing services from concept to Prototyping support.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-32">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                animation="fade-in-up"
                delay={index * 100}
              >
                <div
                  id={project.slug}
                  className="rounded-lg overflow-hidden"
                >
                  {/* Image */}
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content below image */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    {project.description && (
                      <p className="mt-2 text-md text-muted-foreground text-wrap leading-relaxed">
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "150+", label: "Projects Completed" },
              { value: "50+", label: "Clients Served" },
              { value: "15+", label: "Years Experience" },
              { value: "99%", label: "Success Rate" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} animation="fade-in-up" delay={index * 100}>
                <div>
                  <span className="text-4xl md:text-5xl font-bold text-background">
                    {stat.value}
                  </span>
                  <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

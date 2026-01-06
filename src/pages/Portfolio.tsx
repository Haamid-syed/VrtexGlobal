import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const projects = [
  {
    id: 1,
    title: "Precision Gear Assembly",
    category: "Industrial Machinery",
    description:
      "Complete gear train design for high-torque industrial applications. Includes stress analysis and manufacturing specifications.",
    image: portfolio1,
  },
  {
    id: 2,
    title: "Hydraulic Pump System",
    category: "Fluid Systems",
    description:
      "Custom hydraulic pump assembly designed for aerospace applications with extreme performance requirements.",
    image: portfolio2,
  },
  {
    id: 3,
    title: "Robotic Arm Mechanism",
    category: "Automation",
    description:
      "Six-axis robotic arm design with precision actuation and advanced motion control integration.",
    image: portfolio3,
  },
  {
    id: 4,
    title: "CNC Machine Components",
    category: "Manufacturing",
    description:
      "High-precision machined components for advanced CNC systems requiring micron-level tolerances.",
    image: portfolio4,
  },
  {
    id: 5,
    title: "Technical Documentation",
    category: "Engineering Drawings",
    description:
      "Comprehensive manufacturing drawing packages with complete GD&T specifications and assembly instructions.",
    image: portfolio5,
  },
  {
    id: 6,
    title: "Turbine Component Design",
    category: "Aerospace",
    description:
      "High-performance turbine components engineered for extreme temperatures and rotational speeds.",
    image: portfolio6,
  },
];

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-3xl">
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Our Work
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Portfolio
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              <strong>VrtexGlobal</strong> is an Automotive, Industrial Product design and development 
Service providing firm which provides designing services from concept 
to Prototyping support. 
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                animation="fade-in-up"
                delay={index * 100}
              >
                <div
                  className="group relative overflow-hidden bg-background cursor-pointer"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        hoveredId === project.id ? "scale-110 opacity-30" : "scale-100"
                      }`}
                    />
                  </div>

                  {/* Overlay Content */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 ${
                      hoveredId === project.id ? "bg-foreground/90" : "bg-transparent"
                    }`}
                  >
                    {/* Always visible title */}
                    <div
                      className={`transition-all duration-300 ${
                        hoveredId === project.id
                          ? "translate-y-0"
                          : "translate-y-0"
                      }`}
                    >
                      <span
                        className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                          hoveredId === project.id
                            ? "text-gray-400"
                            : "text-muted-foreground"
                        }`}
                      >
                        {project.category}
                      </span>
                      <h3
                        className={`mt-2 text-lg font-bold transition-colors duration-300 ${
                          hoveredId === project.id
                            ? "text-background"
                            : "text-foreground"
                        }`}
                      >
                        {project.title}
                      </h3>
                    </div>

                    {/* Hover description */}
                    <p
                      className={`mt-3 text-sm text-gray-300 leading-relaxed transition-all duration-300 ${
                        hoveredId === project.id
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      {project.description}
                    </p>
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

      <Footer />
    </main>
  );
};

export default Portfolio;

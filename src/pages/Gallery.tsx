import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { X } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    image: "/placeholder.svg",
    title: "Annual Engineering Summit 2024",
    date: "March 15, 2024",
    location: "San Francisco, CA",
    description: "Our team gathered to discuss the latest advancements in mechanical design and share innovative solutions.",
  },
  {
    id: 2,
    image: "/placeholder.svg",
    title: "Client Project Review",
    date: "February 28, 2024",
    location: "VRTEXLABS HQ",
    description: "Collaborative session with key stakeholders reviewing prototype developments and design iterations.",
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "CAD Workshop Series",
    date: "January 20, 2024",
    location: "Virtual Event",
    description: "Internal training workshop focused on advanced CAD modeling techniques and best practices.",
  },
  {
    id: 4,
    image: "/placeholder.svg",
    title: "Industry Conference 2023",
    date: "November 10, 2023",
    location: "Chicago, IL",
    description: "VRTEXLABS representatives presenting our innovative design methodologies at the national conference.",
  },
  {
    id: 5,
    image: "/placeholder.svg",
    title: "Team Building & Strategy Session",
    date: "October 5, 2023",
    location: "Lake Tahoe, CA",
    description: "Quarterly team retreat combining strategic planning with team-building activities.",
  },
  {
    id: 6,
    image: "/placeholder.svg",
    title: "Manufacturing Partner Visit",
    date: "September 18, 2023",
    location: "Detroit, MI",
    description: "On-site visit to our manufacturing partners to strengthen collaboration and quality standards.",
  },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Gallery
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              A glimpse into our meetings, events, and collaborative sessions that drive innovation at VRTEXLABS.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <AnimatedSection
                key={item.id}
                animation="fade-in-up"
                delay={index * 100}
              >
                <div
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-foreground/30 hover:shadow-lg"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      {item.date}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                      {item.location}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative bg-card border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
              aria-label="Close"
            >
              <X size={20} className="text-foreground" />
            </button>

            {/* Image */}
            <div className="aspect-video bg-muted">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <span>{selectedItem.date}</span>
                <span className="w-1 h-1 bg-muted-foreground rounded-full self-center" />
                <span>{selectedItem.location}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {selectedItem.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;

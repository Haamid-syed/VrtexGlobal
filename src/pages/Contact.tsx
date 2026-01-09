import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send, CheckCircle, FileText } from "lucide-react";

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "cad", label: "CAD Modeling & Drafting" },
  { value: "product", label: "Product & Concept Design" },
  { value: "analysis", label: "Mechanical Analysis" },
  { value: "prototyping", label: "Prototyping Support" },
  { value: "manufacturing", label: "Manufacturing Drawings" },
  { value: "other", label: "Other" },
];

const quoteServiceOptions = [
  { value: "", label: "Select a service" },
  { value: "product-design", label: "Product Design" },
  { value: "automotive-design", label: "Automotive Design" },
  { value: "industrial-design", label: "Industrial Product Design" },
  { value: "electromechanical", label: "Electromechanical Product Design" },
  { value: "mechanical-engineering", label: "Mechanical Engineering Design" },
  { value: "cad-modeling", label: "CAD Modeling" },
  { value: "plastic-design", label: "Plastic Design" },
  { value: "sheet-metal", label: "Sheet Metal Design" },
  { value: "product-development", label: "Product Development" },
  { value: "design-analysis", label: "Design Analysis" },
  { value: "reverse-engineering", label: "Reverse Engineering" },
  { value: "prototyping", label: "Prototyping Support" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [quoteData, setQuoteData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    projectDetails: "",
  });
  const [isQuoteSubmitting, setIsQuoteSubmitting] = useState(false);
  const [isQuoteSubmitted, setIsQuoteSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully!");

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  const handleQuoteChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setQuoteData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsQuoteSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsQuoteSubmitting(false);
    setIsQuoteSubmitted(true);
    toast.success("Quote request submitted successfully!");

    setTimeout(() => {
      setIsQuoteSubmitted(false);
      setQuoteData({ name: "", email: "", phone: "", company: "", service: "", projectDetails: "" });
    }, 3000);
  };

  const whatsappNumber = "9975613695";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-3xl">
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Get in Touch
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Ready to start your next engineering project? We'd love to hear from you.
              Reach out and let's discuss how VRTEXGLOBAL can help bring your vision to life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Quote Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <AnimatedSection animation="fade-in-up">
              <div className="bg-background border border-border p-8 md:p-10 h-full">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send a Message
                </h2>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 animate-scale-in">
                    <CheckCircle className="w-16 h-16 text-foreground mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground text-center">
                      Thank you for reaching out. We'll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
                        placeholder="9975613695"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Service Type
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-foreground transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value} disabled={option.value === ""}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Request Quote Form */}
            <AnimatedSection animation="fade-in-up" delay={200}>
              <div className="bg-background border border-border p-8 md:p-10 h-full">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Request a Quote
                </h2>

              {isQuoteSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 animate-scale-in">
                  <CheckCircle className="w-16 h-16 text-foreground mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Quote Request Submitted!
                  </h3>
                  <p className="text-muted-foreground text-center">
                    Thank you! We'll review your request and send you a quote soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="quote-name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="quote-name"
                        name="name"
                        value={quoteData.name}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quote-email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="quote-email"
                        name="email"
                        value={quoteData.email}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quote-phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="quote-phone"
                        name="phone"
                        value={quoteData.phone}
                        onChange={handleQuoteChange}
                        className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
                        placeholder="9975613695"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quote-company"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="quote-company"
                        name="company"
                        value={quoteData.company}
                        onChange={handleQuoteChange}
                        className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-service"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Service Required *
                    </label>
                    <select
                      id="quote-service"
                      name="service"
                      value={quoteData.service}
                      onChange={handleQuoteChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-foreground transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      {quoteServiceOptions.map((option) => (
                        <option key={option.value} value={option.value} disabled={option.value === ""}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-details"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="quote-details"
                      name="projectDetails"
                      value={quoteData.projectDetails}
                      onChange={handleQuoteChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
                      placeholder="Describe your project requirements, timeline, quantity, and any specific details..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isQuoteSubmitting}
                  >
                    {isQuoteSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Request Quote
                        <FileText className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Our Location
            </h2>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Mantra+Essence%2C+Undri%2C+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="w-full h-[400px] rounded-lg overflow-hidden border border-border cursor-pointer hover:opacity-90 transition-opacity">
                <iframe
                  src="https://www.google.com/maps?q=Mantra%20Essence%2C%20Undri%2C%20Pune&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, pointerEvents: "none" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VRTEXGLOBAL Location - Mantra Essence, Undri, Pune"
                ></iframe>
              </div>
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
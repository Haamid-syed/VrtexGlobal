"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Target, Lightbulb, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/aboutImg.jpeg"
            alt="Engineering background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/10 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-3xl">
            <span className="text-sm font-medium tracking-widest text-black uppercase">
              About Us
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Precision Engineering,<br />Trusted Results
            </h1>
            <p className="mt-6 text-lg text-black leading-relaxed">
              VrtexGlobal is a mechanical product design services company dedicated to delivering
              precision-engineered solutions for forward-thinking organizations worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <span className="text-md font-medium tracking-widest text-black uppercase">
                Who We Are
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Engineers at Heart,<br />Problem Solvers by Nature
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <p className="text-black leading-relaxed">
                Founded on the principles of precision and innovation, VrtexGlobal brings
                together a team of experienced mechanical engineers, designers, and
                problem-solvers. We specialize in transforming complex engineering
                challenges into elegant, manufacturable solutions that drive success
                for our clients across diverse industries.
              </p>
              <p className="mt-4 text-black leading-relaxed">
                Our expertise spans from initial concept development through to
                production-ready designs, ensuring every project receives the
                meticulous attention to detail that defines our work.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0}>
              <div className="p-8 border border-border h-full">
                <Target className="w-10 h-10 text-foreground mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver mechanical design excellence that empowers our clients to
                  innovate, compete, and succeed. We are committed to pushing the
                  boundaries of engineering while maintaining the highest standards
                  of quality and precision in every project we undertake.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="p-8 bg-foreground h-full">
                <Lightbulb className="w-10 h-10 text-background mb-6" />
                <h3 className="text-xl font-bold text-background mb-4">Our Vision</h3>
                <p className="text-gray-400 leading-relaxed">
                  To be the trusted engineering partner of choice for companies seeking
                  world-class mechanical design solutions. We envision a future where
                  our innovative designs drive technological advancement and create
                  lasting value for our clients and their customers.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="p-8 border border-border h-full">
                <Award className="w-10 h-10 text-foreground mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Our Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We combine rigorous engineering methodology with creative problem-solving.
                  Every project begins with a deep understanding of your requirements,
                  followed by iterative design refinement, thorough analysis, and
                  comprehensive documentation—ensuring success at every stage.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Core Values
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision and design at VrtexGlobal
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Precision",
                description: "Uncompromising accuracy in every calculation, dimension, and detail",
              },
              {
                title: "Innovation",
                description: "Pushing boundaries to find creative solutions to complex challenges",
              },
              {
                title: "Integrity",
                description: "Honest communication and transparent processes from start to finish",
              },
              {
                title: "Excellence",
                description: "Delivering work that exceeds expectations and stands the test of time",
              },
            ].map((value, index) => (
              <AnimatedSection key={value.title} animation="fade-in-up" delay={index * 100}>
                <div className="text-center">
                  <span className="text-5xl font-bold text-gray-200">0{index + 1}</span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

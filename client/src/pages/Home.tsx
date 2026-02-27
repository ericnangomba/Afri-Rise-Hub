import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Users, HeartPulse, Building2, CheckCircle2 } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        {/* diverse african professionals collaborating in modern office */}
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
          alt="African Professionals Collaborating"
          className="absolute inset-0 w-full h-full object-cover scale-105 transform origin-center animate-in fade-in duration-1000"
        />
        <div className="absolute inset-0 bg-foreground/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Bridging Global Markets
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6 leading-[1.1]">
              Empowering Growth with <span className="text-accent">African Talent</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Afri-Rise is a premier BPO and healthcare recruitment partner, connecting global businesses with top-tier, ethically sourced talent from across the continent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services" 
                className={cn(buttonVariants({ size: "lg", variant: "default" }), "text-base px-8 h-14 rounded-xl")}
              >
                Explore Services
              </Link>
              <Link 
                href="/contact" 
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "text-base px-8 h-14 rounded-xl bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white")}
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Excellence Delivered Across Verticals</h3>
            <p className="text-muted-foreground text-lg">We provide specialized operational and staffing solutions tailored to your industry's demands.</p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "BPO Services",
                desc: "Customer support, back-office operations, and IT helpdesk driven by highly trained professionals.",
                icon: <Building2 className="w-8 h-8" />,
                color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
              },
              {
                title: "Healthcare Recruitment",
                desc: "Connecting qualified African nurses and healthcare practitioners with global medical facilities.",
                icon: <HeartPulse className="w-8 h-8" />,
                color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
              },
              {
                title: "Tech & Specialized Talent",
                desc: "Access to developers, data analysts, and financial experts ready to scale your remote teams.",
                icon: <Users className="w-8 h-8" />,
                color: "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
              }
            ].map((service, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50 group bg-card">
                  <CardHeader>
                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", service.color)}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {service.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/50 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* diverse modern office workspace working together */}
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000"
                alt="Our Workspace"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner with Afri-Rise?</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We don't just fill roles; we build extensions of your team. Our rigorous selection process ensures you get dedicated professionals who align with your company culture.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "Ethical recruitment practices ensuring fair compensation.",
                  "Rigorous vetting, training, and compliance checks.",
                  "Significant cost savings without compromising on quality.",
                  "24/7 operational capability for global coverage."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-secondary/10 p-1 rounded-full text-secondary">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <Link 
                href="/about" 
                className={cn(buttonVariants({ variant: "outline" }), "mt-4 gap-2")}
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Scale Your Operations?</h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Get in touch with us today to discuss how Afri-Rise can provide the talent and operational support your business needs.
            </p>
            <Link 
              href="/contact" 
              className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "text-lg px-10 h-16 rounded-xl bg-white text-primary hover:bg-white/90")}
            >
              Start the Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

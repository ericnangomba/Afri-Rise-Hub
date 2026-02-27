import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, Shield, Globe2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="w-full pt-20">
      {/* Page Header */}
      <section className="bg-muted py-20 lg:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display tracking-tight text-foreground mb-6"
          >
            Our Story & Mission
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Afri-Rise was founded on a simple premise: African talent is world-class, and connecting them to global opportunities changes everything.
          </motion.p>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Bridging the Gap</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In an increasingly connected world, businesses are constantly seeking reliable, highly-skilled partners to manage operations and provide critical staffing. Meanwhile, the African continent is brimming with educated, multilingual professionals eager for global opportunities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Afri-Rise bridges this gap. We provide a managed, ethical pipeline connecting Western enterprises and healthcare systems with top-tier African candidates. From comprehensive BPO operations to deploying registered nurses, we ensure compliance, quality, and mutual growth.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* group of professional business people smiling meeting */}
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000" 
                alt="Afri-Rise Team"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 p-10 rounded-3xl backdrop-blur-sm border border-white/20"
            >
              <Target className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold font-display mb-4">Our Mission</h3>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                To deliver exceptional BPO and specialized staffing services by empowering Africa's brightest minds, driving operational excellence and growth for our global partners.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 p-10 rounded-3xl backdrop-blur-sm border border-white/20"
            >
              <Lightbulb className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold font-display mb-4">Our Vision</h3>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                To be the foremost gateway for ethical international recruitment and outsourcing in Africa, recognized globally for integrity, quality, and transformative social impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Excellence", icon: <Target />, desc: "We are committed to delivering the highest quality of service and talent, exceeding partner expectations." },
              { title: "Ethical Impact", icon: <Heart />, desc: "We prioritize fair wages, professional development, and positive community upliftment." },
              { title: "Integrity", icon: <Shield />, desc: "Transparency, compliance, and honesty are the foundations of all our business relationships." },
              { title: "Global Perspective", icon: <Globe2 />, desc: "We embrace diversity and foster cross-cultural understanding in every interaction." },
            ].map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                      {val.icon}
                    </div>
                    <CardTitle>{val.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{val.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Target, Lightbulb, Shield, Heart, CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const values = [
  {
    title: "Integrity",
    desc: "Ethical recruitment and fair treatment at every step.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Inclusion",
    desc: "Creating opportunities for all communities.",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    title: "Excellence",
    desc: "World-class service delivery, always.",
    icon: <Target className="w-5 h-5" />,
  },
  {
    title: "Impact",
    desc: "Measurable, meaningful social change.",
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    title: "Accountability",
    desc: "Clear ownership, transparent reporting, and measurable outcomes.",
    icon: <CheckCircle2 className="w-5 h-5" />,
  },
  {
    title: "Empowerment",
    desc: "Equipping people with skills and opportunities for long-term success.",
    icon: <CheckCircle2 className="w-5 h-5" />,
  },
];

const proofItems = [
  "POPIA & GDPR-aligned Operations",
  "ISO-aligned Quality Control Standards",
  "Ethical Recruitment Through Trusted Partnerships",
];

export default function About() {
  return (
    <div className="w-full pt-20">
      <section className="bg-muted py-20 lg:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display tracking-tight text-foreground mb-6"
          >
            About Afri-Rise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Business with purpose. We build high-performing teams for global clients while creating inclusive employment and ethical international opportunities.
          </motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Cape Town Roots, Global Standards</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Afri-Rise is a Cape Town-based private company delivering business process outsourcing and healthcare recruitment services to clients in insurance, financial services, healthcare, and related sectors.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Alongside service delivery, we invest in soft-skills training, call-centre readiness, and exam preparation pathways that open dignified employment for youth, people with disabilities, and individuals in rehabilitation programs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through trusted partnerships, including Silverscope Healthcare Staffing, we support ethical nurse placement pathways to Ireland, Australia, and New Zealand.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
                alt="African team collaboration in a business setting"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496528388-2c5e0088d40f?auto=format&fit=crop&q=80&w=1600";
                  e.currentTarget.onerror = null;
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 text-primary-foreground overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2200"
          alt="Team collaborating on mission and long-term strategy"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2200";
            e.currentTarget.onerror = null;
          }}
        />
        <div className="absolute inset-0 bg-black/78" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-black/35 to-accent/20 mix-blend-multiply" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black/55 p-10 rounded-3xl backdrop-blur-md border border-white/30 text-white shadow-2xl"
            >
              <Target className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold font-display mb-4">Our Mission</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                To uplift communities and change lives by creating inclusive employment, world-class skills, and ethical international opportunities while strengthening African healthcare systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-black/55 p-10 rounded-3xl backdrop-blur-md border border-white/30 text-white shadow-2xl"
            >
              <Lightbulb className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold font-display mb-4">Our Vision</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                To become Africa&apos;s leading tech-enabled BPO provider, blending operational excellence with transformative social impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-background border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Proof & Trust</h2>
            <p className="text-lg text-muted-foreground">Built on compliance, quality, and ethical delivery standards.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proofItems.map((item) => (
              <div key={item} className="rounded-xl border border-border/60 bg-card p-5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide every team and every client engagement.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
              >
                <Card className="h-full border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      {value.icon}
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Partner With Afri-Rise</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Build an ethical, high-performance delivery model with a partner focused on quality, compliance, and measurable impact.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
            Request Proposal <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

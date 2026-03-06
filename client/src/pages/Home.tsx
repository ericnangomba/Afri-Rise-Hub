import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Users,
  HeartPulse,
  Building2,
  CheckCircle2,
  Globe2,
  Clock3,
  ShieldCheck,
  BarChart3,
  Handshake,
  Languages,
  Stethoscope,
  BadgeDollarSign,
  BriefcaseBusiness,
  Laptop,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
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

const proofItems = [
  "POPIA & GDPR-aligned Operations",
  "ISO-aligned Quality Control Standards",
  "Ethical Recruitment Through Trusted Partnerships",
];

const proofMetrics = [
  {
    value: "40-60%",
    label: "Cost Efficiency Potential",
    detail: "Versus major US/UK/AU delivery markets.",
  },
  {
    value: "2-6",
    label: "Weeks to Launch",
    detail: "Rapid onboarding for most initial service pods.",
  },
  {
    value: "24/7",
    label: "Coverage Options",
    detail: "Flexible shift design for global customers.",
  },
];

const values = [
  {
    title: "Integrity",
    desc: "Ethical recruitment and fair treatment at every step.",
  },
  {
    title: "Inclusion",
    desc: "Creating opportunities for all communities.",
  },
  {
    title: "Excellence",
    desc: "World-class service delivery, always.",
  },
  {
    title: "Impact",
    desc: "Measurable, meaningful social change.",
  },
  {
    title: "Accountability",
    desc: "Clear ownership, transparent reporting, and measurable outcomes.",
  },
  {
    title: "Empowerment",
    desc: "Equipping people with skills and opportunities for long-term success.",
  },
];

const services = [
  {
    title: "Customer Support",
    desc: "Voice (inbound/outbound), email, and live chat with multilingual capability for global reach.",
    industries: "Insurance, Financial Services, Retail",
    image:
      "https://images.pexels.com/photos/7709296/pexels-photo-7709296.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Customer support professional with headset seated in front of a PC monitor",
  },
  {
    title: "Data Entry & Back-Office",
    desc: "Accurate, secure processing with rigorous quality controls and data protection compliance.",
    industries: "Insurance, Banking, Healthcare",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    imageAlt: "African back-office team processing business data",
  },
  {
    title: "Virtual Assistance",
    desc: "Executive support, scheduling, research, and administrative management for busy teams.",
    industries: "Professional Services, Tech, Finance",
    image:
      "https://images.unsplash.com/photo-1573496130141-209d200cebd8?auto=format&fit=crop&q=80&w=1600",
    imageAlt: "Virtual assistant supporting a client remotely on a video call",
  },
  {
    title: "Claims Processing",
    desc: "Specialized insurance and financial services claims handling with fast turnaround.",
    industries: "Insurance, Financial Services",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
    imageAlt: "African specialist reviewing financial and claims documentation",
  },
  {
    title: "Lead Generation & Appointments",
    desc: "High-conversion outbound campaigns and appointment setting for growth-focused clients.",
    industries: "Insurance, Financial Advisory",
    image:
      "https://images.unsplash.com/photo-1573497161249-42447f9f6706?auto=format&fit=crop&q=80&w=1600",
    imageAlt: "African business team planning lead generation campaign",
  },
  {
    title: "Medical Triage Call Centre",
    desc: "Nurse-manned medical triage services connecting patients with qualified healthcare guidance.",
    industries: "Healthcare, Insurance",
    comingSoon: true,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1800",
    imageAlt: "Healthcare professional managing a medical triage consultation",
  },
];

const nursePoints = [
  "Zero candidate fees - fully ethical recruitment",
  "In-house IELTS and OET exam preparation",
  "Soft skills and cultural orientation training",
  "Full relocation and onboarding support",
  "Fixed-term contracts with trusted employers",
  "Pathways to Ireland, Australia and New Zealand",
];

const socialImpactItems = [
  {
    title: "Youth Employment",
    desc: "Soft-skills and call-centre readiness programmes that transform unemployed youth into high-performing professionals.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Disability Inclusion",
    desc: "Purpose-built pathways creating dignified employment for people with disabilities.",
    icon: <HeartPulse className="w-6 h-6" />,
  },
  {
    title: "Rehabilitation Pathways",
    desc: "Second-chance employment and skills development that restores dignity and self-sufficiency.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Measurable Social ROI",
    desc: "Every contract creates jobs for marginalized communities with impact metrics clients can report.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

const competitiveEdge = [
  "Cost-effective excellence with 40-60% savings versus US/UK/AU delivery models.",
  "GMT+2 timezone advantage with real-time UK/EU collaboration and flexible US-hour coverage.",
  "Data compliance aligned to POPIA, GDPR, and international protection standards.",
  "Low-attrition teams through inclusive hiring and purpose-driven culture.",
  "ESG-aligned partnership with measurable social impact outcomes for CSR reporting.",
  "Scalable agility from 5 to 500 agents with faster setup than many enterprise providers.",
];

const sectors = [
  { label: "Insurance", icon: <Building2 className="w-4 h-4" /> },
  { label: "Financial Services", icon: <BadgeDollarSign className="w-4 h-4" /> },
  { label: "Healthcare", icon: <Stethoscope className="w-4 h-4" /> },
  { label: "Technology", icon: <Laptop className="w-4 h-4" /> },
  { label: "Retail", icon: <Globe2 className="w-4 h-4" /> },
  { label: "Professional Services", icon: <BriefcaseBusiness className="w-4 h-4" /> },
];

const proofGallery = [
  {
    src: "https://images.unsplash.com/photo-1573496527892-904f897eb744?auto=format&fit=crop&q=80&w=1600",
    alt: "African professionals in a business compliance meeting",
  },
  {
    src: "https://images.unsplash.com/photo-1573497701291-18243a6dc63d?auto=format&fit=crop&q=80&w=1600",
    alt: "African operations team reviewing quality and process standards",
  },
];

export default function Home() {
  const primaryNurseImage =
    "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1600";
  const fallbackNurseImage =
    "https://images.unsplash.com/photo-1573497161249-42447f9f6706?auto=format&fit=crop&q=80&w=1600";
  const africanFallbackImage =
    "https://images.unsplash.com/photo-1573496528388-2c5e0088d40f?auto=format&fit=crop&q=80&w=1600";
  const [nurseImage, setNurseImage] = useState(primaryNurseImage);

  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        {/* diverse african professionals collaborating in modern office */}
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2200"
          alt="African professionals collaborating"
          className="absolute inset-0 w-full h-full object-cover scale-105 transform origin-center animate-in fade-in duration-1000 brightness-110 saturate-110"
          onError={(e) => {
            e.currentTarget.src = africanFallbackImage;
            e.currentTarget.onerror = null;
          }}
        />
        <div className="absolute inset-0 bg-foreground/18 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/35 via-foreground/12 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              About Afri-Rise
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6 leading-[1.1]">
              Business With Purpose
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
              Changing lives, one opportunity at a time. Afri-Rise is a Cape Town-based BPO and healthcare recruitment company delivering high-quality services to local and international clients while creating inclusive employment pathways.
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
                Request Proposal
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proof & Trust */}
      <section className="py-14 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="max-w-3xl mb-8"
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Proof & Trust</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Compliance, Quality, and Ethical Delivery</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {proofItems.map((item) => (
              <div key={item} className="rounded-xl border border-border/60 bg-card p-5 flex items-start gap-3">
                <div className="text-primary mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            {proofMetrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={fadeIn}
                className="rounded-2xl border border-border/60 bg-card p-6"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{metric.value}</p>
                <p className="text-base font-semibold mb-1">{metric.label}</p>
                <p className="text-sm text-muted-foreground">{metric.detail}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {proofGallery.map((item) => (
              <div key={item.alt} className="relative isolate overflow-hidden rounded-2xl border border-border/60 shadow-sm">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 md:h-72 object-cover saturate-110 contrast-105 brightness-95 sepia-[0.08]"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = africanFallbackImage;
                    e.currentTarget.onerror = null;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent mix-blend-multiply pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">About Afri-Rise</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Business With Purpose - Changing Lives, One Opportunity at a Time
              </h3>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Afri-Rise BPO is a proud Cape Town-based private company built on the belief that business can be a force for good. We deliver high-quality Business Process Outsourcing services to local and international clients in insurance, financial services, and beyond.
                </p>
                <p>
                  We are deeply committed to social responsibility by providing soft-skills training, call-centre readiness, and IELTS/OET preparation for unemployed youth, people living with disabilities, and individuals in rehabilitation programmes.
                </p>
                <p>
                  Through our trusted partnership with Silverscope Healthcare Staffing in Ireland, we ethically recruit and prepare qualified nurses for fixed-term roles overseas, with pathways expanding to Australia and New Zealand.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="relative isolate overflow-hidden rounded-2xl border border-border/60 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600"
                  alt="Afri-Rise team collaborating to build inclusive employment opportunities"
                  className="w-full h-64 object-cover saturate-110 contrast-105 brightness-95 sepia-[0.08]"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = africanFallbackImage;
                    e.currentTarget.onerror = null;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent mix-blend-multiply pointer-events-none" />
              </div>
              <Card className="border-border/60">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To uplift communities and change lives by creating inclusive employment, world-class skills, and ethical international opportunities while strengthening African healthcare systems.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/60">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To become Africa&apos;s leading tech-enabled BPO provider, blending operational excellence with transformative social impact.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Core Values</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">The Principles Behind Every Delivery Team</h3>
            <p className="text-muted-foreground text-lg">
              These values shape our recruitment process, customer outcomes, and long-term community impact.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={fadeIn}>
                <Card className="h-full border-border/60 bg-card/95">
                  <CardHeader>
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {value.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Business Process Outsourcing - Built for Results
            </h3>
            <p className="text-muted-foreground text-lg">
              Scalable, compliant, and cost-effective services delivered by a dedicated South African team with global standards of excellence.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeIn}>
                <Card className="h-full border-border/60 bg-card/95 overflow-hidden">
                  <div className="relative isolate overflow-hidden border-b border-border/60">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-44 object-cover saturate-110 contrast-105 brightness-95 sepia-[0.08]"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = africanFallbackImage;
                        e.currentTarget.onerror = null;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent mix-blend-multiply pointer-events-none" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      {service.title}
                      {service.comingSoon ? (
                        <span className="ml-2 text-sm font-medium text-primary">Coming Soon</span>
                      ) : null}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {service.desc}
                    </CardDescription>
                    <p className="text-sm font-medium text-foreground">{service.industries}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Delivery Planning */}
      <section className="py-20 bg-muted/40 border-y border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Delivery Planning</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Get a Service Plan Built for Your Team</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Tell us your volume, channels, and hours. We&apos;ll map an onboarding plan and recommended team shape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg", variant: "default" }), "px-8 h-12")}
              >
                Request Proposal
              </Link>
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "px-8 h-12")}
              >
                Book Discovery Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nurse Recruitment */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative isolate overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={nurseImage}
                  alt="Qualified nurses preparing for international opportunities"
                  className="w-full h-full object-cover saturate-110 contrast-105 brightness-95 sepia-[0.08]"
                  onError={() => setNurseImage(fallbackNurseImage)}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent mix-blend-multiply pointer-events-none" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span>Partnership with</span>
                <span className="font-semibold">Silverscope Healthcare Staffing</span>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ethical International Healthcare Careers</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Through our trusted partnership, we provide qualified Southern African nurses with ethical pathways to rewarding careers in Ireland, with expansion into Australia and New Zealand.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {nursePoints.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-border/60 p-4">
                    <div className="mt-0.5 text-primary">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Start Your Journey <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Social Impact</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Purpose-Driven Outsourcing - Where Business Meets Impact</h3>
            <p className="text-muted-foreground text-lg">
              Partnering with Afri-Rise means more than outsourcing. It means investing in communities while improving retention, engagement, and ESG outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="relative isolate overflow-hidden rounded-2xl border border-border/60 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1573497161249-42447f9f6706?auto=format&fit=crop&q=80&w=1600"
                alt="African youth skills development and community training session"
                className="w-full h-64 object-cover saturate-110 contrast-105 brightness-95 sepia-[0.08]"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = africanFallbackImage;
                  e.currentTarget.onerror = null;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent mix-blend-multiply pointer-events-none" />
            </div>
            <div className="relative isolate overflow-hidden rounded-2xl border border-border/60 shadow-sm">
              <img
                src="https://images.pexels.com/photos/8777850/pexels-photo-8777850.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Adult Black man with a disability using a wheelchair"
                className="w-full h-64 object-cover saturate-110 contrast-105 brightness-95 sepia-[0.08]"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = africanFallbackImage;
                  e.currentTarget.onerror = null;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent mix-blend-multiply pointer-events-none" />
            </div>
            <div className="relative isolate overflow-hidden rounded-2xl border border-border/60 shadow-sm">
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Somali%20Youth%20Learners%20Initiative%20Teacher%20Training%20(22393180210).jpg"
                alt="Black youth in vocational and reintegration-focused skills training programme"
                className="w-full h-64 object-cover saturate-110 contrast-105 brightness-95 sepia-[0.08]"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = africanFallbackImage;
                  e.currentTarget.onerror = null;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent mix-blend-multiply pointer-events-none" />
            </div>
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {socialImpactItems.map((item) => (
              <motion.div key={item.title} variants={fadeIn}>
                <Card className="h-full border-border/60 bg-card">
                  <CardHeader>
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {item.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Afri-Rise */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Why Afri-Rise</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">The Competitive Edge That Sets Us Apart</h3>
              <div className="space-y-4">
                {competitiveEdge.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-border/60 p-4 bg-card/80">
                    <div className="text-primary mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Industries We Serve</h3>
              <p className="text-muted-foreground mb-8">
                Afri-Rise supports high-compliance and high-volume sectors with dedicated delivery teams.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {sectors.map((sector) => (
                  <div key={sector.label} className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/90 p-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      {sector.icon}
                    </div>
                    <span className="font-medium">{sector.label}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> POPIA and GDPR aligned</p>
                <p className="flex items-center gap-2"><Languages className="w-4 h-4 text-primary" /> Multilingual service capability</p>
                <p className="flex items-center gap-2"><Clock3 className="w-4 h-4 text-primary" /> 24/7 operational shift design</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-primary-foreground relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2200"
          alt="African team planning and collaboration session"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = africanFallbackImage;
            e.currentTarget.onerror = null;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/45 via-accent/35 to-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/25" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Build a High-Impact Delivery Team?</h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Get in touch to design your service plan, launch your first pod, and scale with an ethical partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg", variant: "default" }), "text-lg px-10 h-16 rounded-xl bg-[#f48009] text-white hover:bg-[#dd7308]")}
              >
                Request Proposal
              </Link>
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "text-lg px-10 h-16 rounded-xl border-white/40 text-white hover:bg-white/10 hover:text-white")}
              >
                Book Discovery Call
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-primary-foreground/85">
              <p className="inline-flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" /> Cape Town, South Africa
              </p>
              <p className="inline-flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" /> info@afri-rise.co.za
              </p>
              <p className="inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> +27 82 044 7004
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

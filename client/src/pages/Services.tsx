import { motion } from "framer-motion";
import {
  Headphones,
  CheckCircle,
} from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const serviceCatalog = [
  {
    title: "Customer Support",
    desc: "Voice (inbound/outbound), email, and live chat with multilingual capability for global reach.",
    industries: "Insurance, Financial Services, Retail",
    value: "Designed for customer-facing teams that need quality service at scale with predictable SLA performance.",
    deliverables: [
      "Inbound and outbound support workflows",
      "Quality assurance scorecards and call monitoring",
      "Escalation management and knowledge-base alignment",
    ],
    image:
      "https://images.pexels.com/photos/7709296/pexels-photo-7709296.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Customer support professional with headset seated in front of a PC monitor",
  },
  {
    title: "Data Entry & Back-Office",
    desc: "Accurate, secure processing with rigorous quality controls and data protection compliance.",
    industries: "Insurance, Banking, Healthcare",
    value: "Ideal for high-volume process environments where accuracy, turnaround time, and compliance are critical.",
    deliverables: [
      "Structured data capture and validation",
      "Document handling with audit-ready controls",
      "Process SOP adherence and exception management",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    imageAlt: "African back-office team processing business data",
  },
  {
    title: "Virtual Assistance",
    desc: "Executive support, scheduling, research, and administrative management for busy teams.",
    industries: "Professional Services, Tech, Finance",
    value: "Built for leaders and teams that require reliable administrative execution without internal overhead.",
    deliverables: [
      "Calendar and meeting coordination",
      "Inbox triage and stakeholder follow-ups",
      "Research, reporting, and admin operations support",
    ],
    image:
      "https://images.unsplash.com/photo-1573496130141-209d200cebd8?auto=format&fit=crop&q=80&w=1600",
    imageAlt: "Virtual assistant supporting a client remotely on a video call",
  },
  {
    title: "Claims Processing",
    desc: "Specialized insurance and financial services claims handling with fast turnaround.",
    industries: "Insurance, Financial Services",
    value: "Optimized for organizations that need efficient, policy-aligned claims workflows with reduced cycle times.",
    deliverables: [
      "Claim intake, verification, and status tracking",
      "Documentation checks against policy criteria",
      "Turnaround and quality KPI reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
    imageAlt: "African specialist reviewing financial and claims documentation",
  },
  {
    title: "Lead Generation & Appointments",
    desc: "High-conversion outbound campaigns and appointment setting for growth-focused clients.",
    industries: "Insurance, Financial Advisory",
    value: "Effective for growth teams seeking consistent top-of-funnel activity and qualified appointment flow.",
    deliverables: [
      "Segmented outreach lists and call scripts",
      "Lead qualification against agreed ICP criteria",
      "Calendar booking and pipeline handoff support",
    ],
    image:
      "https://images.unsplash.com/photo-1573497161249-42447f9f6706?auto=format&fit=crop&q=80&w=1600",
    imageAlt: "African sales meeting focused on lead generation strategy",
  },
  {
    title: "Medical Triage Call Centre",
    desc: "Nurse-manned medical triage services connecting patients with qualified healthcare guidance.",
    industries: "Healthcare, Insurance",
    value: "Built to support healthcare access, early intervention guidance, and better patient routing outcomes.",
    deliverables: [
      "Nurse-led triage intake and urgency classification",
      "Standardized clinical decision pathways",
      "Escalation protocols to emergency or specialist care",
    ],
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1800",
    imageAlt: "Healthcare professional managing a medical triage consultation",
    comingSoon: true,
  },
];

const bpoCapabilities = [
  "Customer services and multilingual support (voice, email, live chat)",
  "Data entry and secure back-office processing",
  "Virtual assistance and admin support",
  "Claims processing for insurance and finance workflows",
  "Lead generation and appointment setting campaigns",
  "Sales and collections training programmes",
  "Work readiness training for unemployed youth and matriculants",
  "Soft skills training for workplace readiness",
];

export default function Services() {
  const serviceCardFallbackImage =
    "https://images.unsplash.com/photo-1573497161249-42447f9f6706?auto=format&fit=crop&q=80&w=1600";

  return (
    <div className="w-full pt-20">
      <section className="bg-muted py-20 lg:py-32 border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display tracking-tight text-foreground mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground mb-4"
          >
            Business Process Outsourcing - Built for Results
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Scalable, compliant, and cost-effective services delivered by a dedicated South African team with global standards of excellence.
          </motion.p>
        </div>
      </section>

      {/* Service Catalog */}
      <section className="py-20 lg:py-24 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCatalog.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card className="h-full border-border/60 bg-card overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden border-b border-border/60 bg-muted">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = serviceCardFallbackImage;
                        e.currentTarget.onerror = null;
                      }}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl leading-tight">
                      {service.title}
                      {service.comingSoon ? (
                        <Badge className="ml-2 align-middle bg-accent text-accent-foreground">Coming Soon</Badge>
                      ) : null}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.desc}</p>
                    <p className="text-sm text-foreground/90 mb-4">{service.value}</p>
                    <ul className="space-y-2 mb-5">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Ideal Sectors</p>
                    <p className="text-sm font-medium text-foreground">{service.industries}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BPO Services */}
      <section className="py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Headphones className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Business Process Outsourcing (BPO)</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                From scaling your customer support to improving workflow accuracy, our BPO teams are built to operate as an extension of your business with measurable quality and compliance controls.
              </p>

              <ul className="space-y-4 mb-8">
                {bpoCapabilities.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact?type=bpo" className={cn(buttonVariants({ size: "lg" }))}>
                Discuss BPO Solutions
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] transform translate-x-4 translate-y-4" />
                <img
                  src="https://images.unsplash.com/photo-1573497161249-42447f9f6706?auto=format&fit=crop&q=80&w=1600"
                  alt="African BPO customer support team"
                  className="relative rounded-3xl shadow-xl border border-border"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Get a Service Plan Built for Your Team</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Share your expected volumes, channels, and coverage hours. We will recommend the right team shape and onboarding plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact?type=quote" className={cn(buttonVariants({ size: "lg" }))}>
              Request Proposal
            </Link>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg", variant: "outline" }))}>
              Book Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

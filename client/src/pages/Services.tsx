import { motion } from "framer-motion";
import { Headphones, ActivitySquare, LayoutDashboard, MonitorSmartphone, Link as LinkIcon, Users, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = {
  bpo: [
    "Multilingual Customer Support (Voice, Email, Chat)",
    "Data Entry & Back-Office Processing",
    "IT Helpdesk & Tech Support",
    "Virtual Assistance & Admin Support",
    "Sales & Lead Generation"
  ],
  healthcare: [
    "Registered Nurses (RN) Recruitment",
    "Allied Healthcare Professionals",
    "Medical Billing & Coding",
    "Credentialing & Compliance Checks",
    "Relocation & Visa Processing Support"
  ]
};

export default function Services() {
  return (
    <div className="w-full pt-20">
      <section className="bg-muted py-20 lg:py-32 border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display tracking-tight text-foreground mb-6"
          >
            Comprehensive Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            From scaling your customer support to staffing critical healthcare roles, our services are designed for operational excellence.
          </motion.p>
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
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Headphones className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Business Process Outsourcing (BPO)</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Outsource your non-core operations to a dedicated team of professionals. We train our talent to seamlessly integrate with your existing systems and processes, functioning as a true extension of your business.
              </p>
              
              <ul className="space-y-4 mb-8">
                {features.bpo.map((item, i) => (
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
                {/* customer service agent smiling with headset */}
                <img 
                  src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=1000"
                  alt="BPO Services"
                  className="relative rounded-3xl shadow-xl border border-border"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Healthcare Services */}
      <section className="py-20 lg:py-28 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/10 rounded-[2.5rem] transform -translate-x-4 translate-y-4" />
                {/* professional diverse nurses walking in hospital corridor */}
                <img 
                  src="https://pixabay.com/get/gd75bfaadd5f12c92b6ad28658ed49e75188497d0e8d9e256757045d28a7dd52ea8ce7aab909d36e0416516984328ba0f722415fc51b653d0b2b3d9d55d19ab76_1280.jpg"
                  alt="Healthcare Professionals"
                  className="relative rounded-3xl shadow-xl border border-border"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mb-6">
                <ActivitySquare className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Healthcare Recruitment</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Addressing global healthcare staffing shortages by connecting you with certified, highly-skilled nurses and medical professionals from Africa. We handle the vetting, compliance, and logistics.
              </p>
              
              <ul className="space-y-4 mb-8">
                {features.healthcare.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact?type=nursing" className={cn(buttonVariants({ size: "lg", variant: "secondary" }))}>
                Request Healthcare Staffing
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Not sure what you need?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our consultants are ready to analyze your business needs and propose a customized outsourcing or staffing strategy.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock3, ShieldCheck } from "lucide-react";
import { api, type ContactInput } from "@shared/routes";
import { useCreateContact } from "@/hooks/use-contacts";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contact() {
  const { toast } = useToast();
  const [location] = useLocation();
  const { mutate, isPending } = useCreateContact();

  const form = useForm<ContactInput>({
    resolver: zodResolver(api.contacts.create.input),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: "general",
      message: "",
    },
  });

  // Pre-fill inquiry type based on URL parameters (if any)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    if (type && ["general", "bpo", "nursing", "quote"].includes(type)) {
      form.setValue("inquiryType", type as any);
    }
  }, [location, form]);

  const onSubmit = (data: ContactInput) => {
    // Ensure empty strings for optional fields are coerced to null to satisfy strict DB schemas
    const payload = {
      ...data,
      phone: data.phone === "" ? null : data.phone,
      company: data.company === "" ? null : data.company,
    };

    mutate(payload, {
      onSuccess: () => {
        toast({
          title: "Inquiry Submitted Successfully",
          description: "Thank you for reaching out. A representative will contact you shortly.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Submission Failed",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <div className="w-full pt-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <section className="relative py-20 lg:py-24 overflow-hidden border-b border-border/50">
        <img
          src="https://images.unsplash.com/photo-1573497161249-42447f9f6706?auto=format&fit=crop&q=80&w=2200"
          alt="African business consultation and planning meeting"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1573496528388-2c5e0088d40f?auto=format&fit=crop&q=80&w=2200";
            e.currentTarget.onerror = null;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/45 via-accent/35 to-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/25" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white mb-5">
              Contact & Discovery
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-6 text-white">Get in Touch</h1>
            <p className="text-xl text-primary-foreground/85 max-w-2xl">
              Share your requirements and we will recommend the right team structure, onboarding plan, and delivery model for your business goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-2 space-y-6 lg:sticky lg:top-28"
            >
              <Card className="p-6 border-border/60 shadow-sm bg-card">
                <h3 className="text-2xl font-bold font-display mb-6">Direct Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground mt-1">Cape Town, South Africa</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <a href="tel:+27629683677" className="text-muted-foreground mt-1 block hover:text-primary transition-colors">
                        +27 62 968 3677
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <a href="mailto:info@afririse.co.za" className="text-muted-foreground mt-1 block hover:text-primary transition-colors">
                        info@afririse.co.za
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/60 shadow-sm bg-gradient-to-br from-primary/10 via-background to-accent/10">
                <h3 className="text-xl font-bold font-display mb-5">What To Include In Your Brief</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    Service scope, channels, and expected monthly volume
                  </p>
                  <p className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    Target go-live timeline and required operating hours
                  </p>
                  <p className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    Compliance or quality requirements specific to your sector
                  </p>
                </div>
                <div className="mt-6 rounded-xl border border-border/60 bg-card p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Typical Response Time</p>
                  <p className="flex items-center gap-2 font-medium text-foreground">
                    <Clock3 className="w-4 h-4 text-primary" />
                    Within 1 business day
                  </p>
                </div>
              </Card>
            </motion.aside>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="lg:col-span-3"
            >
              <Card className="p-8 md:p-10 border-border/60 shadow-2xl bg-card">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold font-display mb-3">Project Inquiry Form</h2>
                  <p className="text-muted-foreground">
                    Tell us about your goals. We will prepare a tailored response with a recommended service plan.
                  </p>
                </div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@company.com" className="h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+27 62 968 3677" className="h-12" {...field} value={field.value || ""} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Acme Corp" className="h-12" {...field} value={field.value || ""} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="inquiryType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Inquiry Type <span className="text-destructive">*</span></FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select a topic" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="bpo">BPO Services</SelectItem>
                              <SelectItem value="nursing">Healthcare / Nursing</SelectItem>
                              <SelectItem value="quote">Request Proposal</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us how we can help you..."
                              className="min-h-[160px] resize-y"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full h-14 text-lg gap-2" disabled={isPending}>
                      {isPending ? (
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <>
                          Send Message <Send className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

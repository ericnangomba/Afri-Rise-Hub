import { Link } from "wouter";
import { Globe, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-xl">
                <Globe className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold font-display tracking-tight text-white">
                Afri-Rise
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering global growth with premier African talent. We provide ethical BPO and healthcare recruitment solutions built on excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-display text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold font-display text-white mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li className="text-gray-400 hover:text-white transition-colors cursor-default text-sm">
                BPO & Customer Support
              </li>
              <li className="text-gray-400 hover:text-white transition-colors cursor-default text-sm">
                Healthcare Recruitment
              </li>
              <li className="text-gray-400 hover:text-white transition-colors cursor-default text-sm">
                IT & Tech Talent
              </li>
              <li className="text-gray-400 hover:text-white transition-colors cursor-default text-sm">
                Back-office Processing
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold font-display text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Innovation Drive<br />Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+254 20 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@afri-rise.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Afri-Rise. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

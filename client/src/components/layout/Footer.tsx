import { Link } from "wouter";
import { Globe, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-xl">
                <Globe className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold font-display tracking-tight text-white">Afri-Rise</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering global growth with premier African talent through ethical BPO and healthcare recruitment solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold font-display text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-display text-white mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li className="text-gray-400 hover:text-white transition-colors cursor-default text-sm">Customer Support</li>
              <li className="text-gray-400 hover:text-white transition-colors cursor-default text-sm">Data Entry & Back-Office</li>
              <li className="text-gray-400 hover:text-white transition-colors cursor-default text-sm">Healthcare Recruitment</li>
              <li className="text-gray-400 hover:text-white transition-colors cursor-default text-sm">Claims Processing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-display text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Cape Town, South Africa</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+27 82 044 7004</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@afri-rise.co.za</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Afri-Rise. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

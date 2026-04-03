import { TreePine, Mail } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Book a Demo", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal-200 bg-white py-12 pb-24 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <a href="#" className="flex items-center gap-2">
              <TreePine className="h-6 w-6 text-primary" />
              <span className="text-lg font-extrabold tracking-tight text-charcoal-900">
                Tree Service <span className="text-primary">AI</span>
              </span>
            </a>
            <p className="mt-2 text-base text-charcoal-500">
              AI-powered lead management for tree service contractors.
            </p>
            <a
              href="mailto:hello@treeserviceai.com"
              className="mt-2 flex items-center gap-1.5 text-sm text-charcoal-500 transition-colors hover:text-primary"
            >
              <Mail className="h-3.5 w-3.5" />
              hello@treeserviceai.com
            </a>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-sm text-charcoal-500 transition-colors hover:text-charcoal-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 border-t border-charcoal-200 pt-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-charcoal-400">
            &copy; {new Date().getFullYear()} Tree Service AI. All rights
            reserved. Powered by{" "}
            <a
              href="https://rizedigital.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-500 transition-colors hover:text-primary"
            >
              Rize Digital
            </a>
            .
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-charcoal-400 transition-colors hover:text-charcoal-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

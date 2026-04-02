import Image from "next/image";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Book a Demo", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <a href="#" className="flex items-center">
              <Image
                src="/logo-text.png"
                alt="Tree Service AI"
                width={160}
                height={36}
                className="h-7 w-auto"
              />
            </a>
            <p className="mt-2 text-sm text-charcoal-500">
              AI-powered lead management for tree service contractors.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-charcoal-500 transition-colors hover:text-charcoal-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-charcoal-200 pt-6 text-center">
          <p className="text-xs text-charcoal-400">
            &copy; {new Date().getFullYear()} Tree Service AI. All rights
            reserved. Powered by{" "}
            <a
              href="https://rizedigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-500 transition-colors hover:text-primary"
            >
              Rize Digital
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { Menu, X, TreePine } from "lucide-react";
import clsx from "clsx";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-charcoal-200/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <TreePine className="h-7 w-7 text-primary" />
          <span className="text-lg font-extrabold tracking-tight text-charcoal-900 sm:text-xl">
            Tree Service <span className="text-primary">AI</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal-600 transition-colors hover:text-charcoal-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-600/25 transition-colors hover:bg-green-700"
          >
            Book a Demo
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-charcoal-600 hover:bg-charcoal-100 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={clsx(
          "overflow-hidden border-t border-charcoal-200/60 bg-white transition-all duration-200 md:hidden",
          open ? "max-h-72" : "max-h-0 border-t-0"
        )}
      >
        <div className="space-y-1 px-4 pb-4 pt-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-3 text-base font-medium text-charcoal-700 hover:bg-charcoal-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-green-600 px-3 py-3.5 text-center text-base font-bold text-white shadow-lg shadow-green-600/25 hover:bg-green-700"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
}

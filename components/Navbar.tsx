"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-charcoal-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-charcoal-900">
          <span className="text-primary">🌲</span> Tree Service AI
        </a>

        {/* Desktop links */}
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
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-charcoal-600 hover:bg-charcoal-100 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          "overflow-hidden border-t border-charcoal-200/80 bg-white transition-all duration-200 md:hidden",
          open ? "max-h-64" : "max-h-0 border-t-0"
        )}
      >
        <div className="space-y-1 px-4 pb-4 pt-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-charcoal-700 hover:bg-charcoal-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-primary px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-section-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-green-400">
              Get Started
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to Stop Losing Leads?
            </h2>
            <p className="mt-4 text-lg text-charcoal-400">
              Fill out the form and we&apos;ll get you set up within 24 hours.
              No contracts, no risk.
            </p>
          </motion.div>

          <motion.form
            className="mt-12 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-charcoal-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Smith"
                  className="w-full rounded-lg border border-charcoal-700 bg-charcoal-800 px-4 py-3 text-sm text-white placeholder-charcoal-500 transition-colors focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-charcoal-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-charcoal-700 bg-charcoal-800 px-4 py-3 text-sm text-white placeholder-charcoal-500 transition-colors focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-charcoal-300"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="(555) 123-4567"
                  className="w-full rounded-lg border border-charcoal-700 bg-charcoal-800 px-4 py-3 text-sm text-white placeholder-charcoal-500 transition-colors focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="mb-1.5 block text-sm font-medium text-charcoal-300"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Smith Tree Service"
                  className="w-full rounded-lg border border-charcoal-700 bg-charcoal-800 px-4 py-3 text-sm text-white placeholder-charcoal-500 transition-colors focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3.5 text-base font-semibold text-charcoal-900 shadow-lg shadow-amber-500/25 transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-amber-500/30"
            >
              <Send className="h-4 w-4" />
              Get Started — It&apos;s Free to Try
            </button>

            <p className="text-center text-xs text-charcoal-500">
              No credit card required. We&apos;ll reach out within a few hours
              to get you set up.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

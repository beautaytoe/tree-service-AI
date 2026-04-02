"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-section-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-green-400">
            Book a Demo
          </span>
          <h2 className="mt-2 text-[2rem] font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to Stop Missing Calls?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-charcoal-400">
            Pick a time that works for you. We&apos;ll show you exactly how Tree
            Service AI handles your calls, books jobs, and follows up
            &mdash;&nbsp;live.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-2">
          {/* Calendly placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="overflow-hidden rounded-2xl border border-charcoal-700">
              <iframe
                src="https://calendly.com/beau-rizedigital/30min?hide_gdpr_banner=1&background_color=1e293b&text_color=e2e8f0&primary_color=22c55e"
                className="h-[600px] w-full"
                frameBorder="0"
                title="Book a Demo"
              />
            </div>
          </motion.div>

          {/* Fallback form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-charcoal-700 bg-charcoal-800/60 p-8">
              <h3 className="text-lg font-bold text-white">
                Or drop your info &mdash; we&apos;ll reach out
              </h3>
              <p className="mt-1 text-base text-charcoal-400">
                We&apos;ll get back to you within a few hours.
              </p>

              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-medium text-charcoal-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="John Smith"
                    className="h-14 w-full rounded-lg border border-charcoal-600 bg-charcoal-900 px-4 text-base text-white placeholder-charcoal-500 transition-colors focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-1.5 block text-sm font-medium text-charcoal-300"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    required
                    placeholder="(555) 123-4567"
                    className="h-14 w-full rounded-lg border border-charcoal-600 bg-charcoal-900 px-4 text-base text-white placeholder-charcoal-500 transition-colors focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-medium text-charcoal-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="h-14 w-full rounded-lg border border-charcoal-600 bg-charcoal-900 px-4 text-base text-white placeholder-charcoal-500 transition-colors focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-company"
                    className="mb-1.5 block text-sm font-medium text-charcoal-300"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="contact-company"
                    name="company"
                    placeholder="Smith Tree Service"
                    className="h-14 w-full rounded-lg border border-charcoal-600 bg-charcoal-900 px-4 text-base text-white placeholder-charcoal-500 transition-colors focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>
                <button
                  type="submit"
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-green-500 text-base font-bold text-white shadow-lg shadow-green-500/25 transition-all hover:bg-green-400"
                >
                  <Send className="h-4 w-4" />
                  Book My Demo
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

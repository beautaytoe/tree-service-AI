"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function LeadCapture() {
  return (
    <section className="bg-green-700 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Want to hear the AI in action?
          </h2>
          <p className="mt-3 text-lg text-green-100">
            Drop your number and we&apos;ll text you a live demo link.
          </p>

          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex-1">
              <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-charcoal-400" />
              <input
                type="tel"
                name="phone"
                required
                placeholder="(555) 123-4567"
                className="h-14 w-full rounded-lg border-2 border-green-600 bg-white pl-12 pr-4 text-base text-charcoal-900 placeholder-charcoal-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <button
              type="submit"
              className="h-14 shrink-0 rounded-lg bg-accent px-8 text-base font-bold text-charcoal-900 shadow-lg shadow-amber-500/25 transition-all hover:bg-accent-dark sm:w-auto"
            >
              Send Me the Demo
            </button>
          </form>

          <p className="mt-4 text-sm text-green-200">
            No spam. Just one text with the demo link.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

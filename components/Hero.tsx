"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const badges = [
  "No Long-Term Contracts",
  "Setup in 24 Hours",
  "Tree Service Specialists",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#16a34a08_1px,transparent_1px),linear-gradient(to_bottom,#16a34a08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-800">
              AI-Powered Lead Management
            </span>
          </motion.div>

          <motion.h1
            className="mt-6 text-4xl font-extrabold tracking-tight text-charcoal-900 sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Never Miss a{" "}
            <span className="text-primary">Lead</span> Again
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-8 text-charcoal-600 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            AI-powered SMS, voice, and scheduling tools built specifically for
            tree service contractors. Capture leads 24/7, respond in seconds,
            and book more jobs — on autopilot.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="#contact"
              className="w-full rounded-lg bg-accent px-8 py-3.5 text-center text-base font-semibold text-charcoal-900 shadow-lg shadow-amber-500/25 transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-amber-500/30 sm:w-auto"
            >
              Start Free Trial
            </a>
            <a
              href="#features"
              className="w-full rounded-lg border border-charcoal-300 bg-white px-8 py-3.5 text-center text-base font-semibold text-charcoal-700 transition-colors hover:border-charcoal-400 hover:bg-charcoal-50 sm:w-auto"
            >
              See How It Works
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-1.5 text-sm text-charcoal-600"
              >
                <CheckCircle className="h-4 w-4 text-green-500" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

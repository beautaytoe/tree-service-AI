"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ROI() {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            The Math
          </span>
          <h2 className="mt-2 text-[2rem] font-extrabold tracking-tight text-charcoal-900 sm:text-4xl">
            AI Costs Less Than One Missed Job
          </h2>
        </motion.div>

        {/* Math breakdown */}
        <motion.div
          className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl border border-charcoal-200 bg-charcoal-50 p-8 text-center sm:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-5">
            <div>
              <span className="text-5xl font-extrabold text-charcoal-900 sm:text-6xl">
                $1,500
              </span>
              <p className="mt-1 text-sm font-medium text-charcoal-500">
                Average tree job
              </p>
            </div>
            <span className="text-3xl font-bold text-charcoal-300">&times;</span>
            <div>
              <span className="text-5xl font-extrabold text-charcoal-900 sm:text-6xl">
                3
              </span>
              <p className="mt-1 text-sm font-medium text-charcoal-500">
                Extra jobs / month
              </p>
            </div>
            <span className="text-3xl font-bold text-charcoal-300">=</span>
            <div className="relative">
              <span className="relative z-10 text-5xl font-extrabold text-green-600 sm:text-6xl">
                $4,500
              </span>
              {/* Green glow */}
              <div className="pointer-events-none absolute -inset-3 rounded-xl bg-green-400/15 blur-lg" />
              <p className="relative z-10 mt-1 text-sm font-medium text-charcoal-500">
                New revenue / month
              </p>
            </div>
          </div>
          <p className="mt-8 text-xl font-bold text-charcoal-700">
            Tree Service AI pays for itself in the first week.
          </p>
        </motion.div>

        {/* Comparison cards */}
        <div className="mx-auto mt-10 grid max-w-xl gap-6 sm:grid-cols-2">
          <motion.div
            className="relative overflow-hidden rounded-xl border-2 border-red-200 bg-red-50 p-8 text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-red-400/10 blur-2xl" />
            <p className="text-sm font-bold uppercase tracking-wider text-red-600">
              Cost of 1 missed job
            </p>
            <p className="mt-3 text-5xl font-extrabold text-red-700 sm:text-6xl">
              $1,500<span className="text-3xl">+</span>
            </p>
            <p className="mt-2 text-base font-medium text-red-600">
              Gone forever
            </p>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-xl border-2 border-green-200 bg-green-50 p-8 text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-green-400/15 blur-2xl" />
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Tree Service AI
            </p>
            <p className="mt-3 text-5xl font-extrabold text-green-700 sm:text-6xl">
              $497<span className="text-lg font-bold text-green-600">/mo</span>
            </p>
            <p className="mt-2 text-base font-medium text-green-600">
              Works 24/7, never calls in sick
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-flex h-14 items-center gap-2 rounded-lg bg-green-600 px-8 text-base font-bold text-white shadow-lg shadow-green-600/25 transition-all hover:bg-green-700"
          >
            Book a Demo <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ROI() {
  return (
    <section className="bg-white py-20 sm:py-28">
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
          className="mx-auto mt-12 max-w-2xl rounded-2xl border border-charcoal-200 bg-charcoal-50 p-8 text-center sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
            <div>
              <span className="text-4xl font-extrabold text-charcoal-900 sm:text-5xl">
                $1,500
              </span>
              <p className="mt-1 text-sm font-medium text-charcoal-500">
                Average tree job
              </p>
            </div>
            <span className="text-2xl font-bold text-charcoal-400">&times;</span>
            <div>
              <span className="text-4xl font-extrabold text-charcoal-900 sm:text-5xl">
                3
              </span>
              <p className="mt-1 text-sm font-medium text-charcoal-500">
                Extra jobs / month
              </p>
            </div>
            <span className="text-2xl font-bold text-charcoal-400">=</span>
            <div>
              <span className="text-4xl font-extrabold text-green-600 sm:text-5xl">
                $4,500
              </span>
              <p className="mt-1 text-sm font-medium text-charcoal-500">
                New revenue / month
              </p>
            </div>
          </div>
          <p className="mt-6 text-lg font-semibold text-charcoal-700">
            Tree Service AI pays for itself in the first week.
          </p>
        </motion.div>

        {/* Comparison cards */}
        <div className="mx-auto mt-10 grid max-w-xl gap-6 sm:grid-cols-2">
          <motion.div
            className="rounded-xl border-2 border-red-200 bg-red-50 p-6 text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
              Cost of 1 missed job
            </p>
            <p className="mt-2 text-4xl font-extrabold text-red-700">
              $1,500+
            </p>
            <p className="mt-1 text-sm text-red-600">Gone forever</p>
          </motion.div>

          <motion.div
            className="rounded-xl border-2 border-green-200 bg-green-50 p-6 text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Tree Service AI
            </p>
            <p className="mt-2 text-4xl font-extrabold text-green-700">
              $497/mo
            </p>
            <p className="mt-1 text-sm text-green-600">
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
            className="inline-flex h-14 items-center gap-2 rounded-lg bg-accent px-8 text-base font-bold text-charcoal-900 shadow-lg shadow-amber-500/25 transition-all hover:bg-accent-dark"
          >
            Book a Demo <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

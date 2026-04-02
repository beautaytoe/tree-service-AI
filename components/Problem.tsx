"use client";

import { motion } from "framer-motion";
import { PhoneOff, Moon, UserX, VoicemailIcon } from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    text: "Your crew can\u2019t answer the phone on a job site",
  },
  {
    icon: Moon,
    text: "Calls come in nights and weekends",
  },
  {
    icon: UserX,
    text: "Leads go straight to your competitor",
  },
  {
    icon: VoicemailIcon,
    text: "Voicemails pile up and never get returned",
  },
];

export default function Problem() {
  return (
    <section className="relative bg-section-dark py-20 sm:py-28">
      {/* Top gradient transition from light to dark */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent" style={{ top: "-1px" }} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[2rem] font-extrabold tracking-tight text-white sm:text-4xl">
            Tree Companies Lose{" "}
            <span className="text-amber-400">Thousands</span> in Missed Calls
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {problems.map((p, i) => (
            <motion.div
              key={p.text}
              className="relative flex items-start gap-4 overflow-hidden rounded-xl border border-red-500/20 bg-red-950/20 px-6 py-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {/* Subtle red glow */}
              <div className="pointer-events-none absolute -left-4 -top-4 h-20 w-20 rounded-full bg-red-500/10 blur-2xl" />
              <p.icon className="relative mt-0.5 h-6 w-6 shrink-0 text-red-400" />
              <p className="relative text-lg font-medium text-charcoal-200">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-2xl font-bold text-white sm:text-3xl">
            What if every call got answered{" "}
            <span className="text-green-400">instantly</span>?
          </p>
          <a
            href="#demo"
            className="mt-8 inline-flex h-14 items-center justify-center rounded-lg bg-accent px-8 text-base font-bold text-charcoal-900 shadow-lg shadow-amber-500/25 transition-all hover:bg-accent-dark"
          >
            See How It Works
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient transition from dark to light */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white" style={{ bottom: "-1px" }} />
    </section>
  );
}

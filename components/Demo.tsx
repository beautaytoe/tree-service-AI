"use client";

import { motion } from "framer-motion";
import { Play, Phone, Brain, CalendarCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Phone,
    label: "Customer Calls",
    detail: "Your AI picks up in under 2 rings",
  },
  {
    icon: Brain,
    label: "AI Qualifies",
    detail: "Gets name, address, service needed",
  },
  {
    icon: CalendarCheck,
    label: "Job Gets Booked",
    detail: "Estimate on your calendar, you get a text",
  },
];

export default function Demo() {
  return (
    <section id="demo" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Demo
          </span>
          <h2 className="mt-2 text-[2rem] font-extrabold tracking-tight text-charcoal-900 sm:text-4xl">
            See Tree Service AI In Action
          </h2>
        </motion.div>

        {/* Video player placeholder */}
        <motion.div
          className="mx-auto mt-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 shadow-2xl shadow-charcoal-900/30">
            <div className="aspect-video">
              {/* Decorative grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-charcoal-900/40" />

              {/* Play button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30 transition-transform group-hover:scale-110 sm:h-24 sm:w-24">
                  <Play className="ml-1 h-8 w-8 text-white sm:h-10 sm:w-10" />
                </div>
                <p className="mt-5 text-lg font-bold text-white">
                  Watch the 90-Second Demo
                </p>
                <p className="mt-1 text-sm text-charcoal-400">
                  See how calls become booked jobs — automatically
                </p>
              </div>

              {/* Top left badge */}
              <div className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-sm">
                1:30
              </div>
            </div>
          </div>
        </motion.div>

        {/* Conversation flow */}
        <div className="mx-auto mt-16 max-w-3xl">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-charcoal-500">
            How a call becomes a booked job
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              >
                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <div className="pointer-events-none absolute top-8 left-[calc(50%+2.5rem)] hidden items-center sm:flex" style={{ width: "calc(100% - 5rem)" }}>
                    <div className="h-0.5 flex-1 bg-green-200" />
                    <ArrowRight className="h-4 w-4 -ml-1 text-green-300" />
                  </div>
                )}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-charcoal-900">
                  {step.label}
                </h3>
                <p className="mt-1 text-base text-charcoal-600">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

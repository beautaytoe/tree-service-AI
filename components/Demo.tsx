"use client";

import { motion } from "framer-motion";
import { Play, Phone, Brain, CalendarCheck } from "lucide-react";

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

        {/* Video placeholder */}
        <motion.div
          className="mx-auto mt-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex aspect-video flex-col items-center justify-center rounded-2xl border-2 border-dashed border-charcoal-300 bg-charcoal-50">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <Play className="h-10 w-10 text-primary" />
            </div>
            <p className="mt-4 text-lg font-semibold text-charcoal-600">
              Demo video coming soon
            </p>
            <p className="mt-1 text-sm text-charcoal-400">
              90-second walkthrough of the AI in action
            </p>
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
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="pointer-events-none absolute top-8 left-[calc(50%+2.5rem)] hidden h-0.5 w-[calc(100%-5rem)] bg-green-200 sm:block" />
                )}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-charcoal-900">
                  {step.label}
                </h3>
                <p className="mt-1 text-sm text-charcoal-600">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

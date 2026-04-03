"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Customer Calls Your Number",
    description:
      "Whether it\u2019s 2 PM or 2 AM, your AI receptionist picks up on the first ring. No hold music, no voicemail\u2014just a real conversation.",
  },
  {
    number: "2",
    title: "AI Qualifies the Lead",
    description:
      "Gets the customer\u2019s name, property address, what they need done, and how urgent it is. Handles FAQs and pricing questions too.",
  },
  {
    number: "3",
    title: "Job Gets Booked",
    description:
      "The estimate goes straight to your calendar. You get a text with all the details. The customer gets a confirmation. Done.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-charcoal-50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            How It Works
          </span>
          <h2 className="mt-2 text-[2rem] font-extrabold tracking-tight text-charcoal-900 sm:text-4xl">
            Three Steps. Zero Missed Calls.
          </h2>
        </motion.div>

        {/* Horizontal on desktop, vertical on mobile */}
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
            >
              {/* Dashed connector — desktop only */}
              {i < steps.length - 1 && (
                <div
                  className="pointer-events-none absolute top-10 left-[calc(50%+2.5rem)] hidden items-center md:flex"
                  style={{ width: "calc(100% - 5rem)" }}
                >
                  <div className="h-0.5 flex-1 border-t-2 border-dashed border-green-300" />
                  <ArrowRight className="-ml-1 h-5 w-5 text-green-400" />
                </div>
              )}

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl font-extrabold text-white shadow-lg shadow-green-600/20">
                {step.number}
              </div>
              <h3 className="mt-5 text-xl font-bold text-charcoal-900">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-charcoal-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

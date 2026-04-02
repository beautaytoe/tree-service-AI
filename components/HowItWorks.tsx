"use client";

import { motion } from "framer-motion";

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
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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

        <div className="mt-14 space-y-8 sm:space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex gap-6 sm:gap-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Number + line */}
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-extrabold text-white">
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-2 h-full w-0.5 bg-green-200" />
                )}
              </div>

              {/* Content */}
              <div className="pb-10">
                <h3 className="text-xl font-bold text-charcoal-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-charcoal-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

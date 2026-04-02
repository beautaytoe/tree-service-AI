"use client";

import { motion } from "framer-motion";
import { MessageSquareText, Phone, FileText, CalendarCheck } from "lucide-react";

const features = [
  {
    icon: MessageSquareText,
    title: "SMS Automation",
    description:
      "Instant two-way texting with leads. Auto-respond to inquiries, send quotes, and follow up — all without lifting a finger.",
  },
  {
    icon: Phone,
    title: "Voice AI",
    description:
      "AI-powered phone agent answers calls 24/7. Qualifies leads, answers common questions, and books estimates — powered by RetellAI.",
  },
  {
    icon: FileText,
    title: "Beaver Bot Proposals",
    description:
      "Generate professional proposals in seconds. AI drafts accurate bids based on job details so you can close faster.",
  },
  {
    icon: CalendarCheck,
    title: "Calendar Integration",
    description:
      "Sync with your calendar to auto-schedule estimates and jobs. No double-bookings, no phone tag — just a full schedule.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Features
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-charcoal-900 sm:text-4xl">
            Everything You Need to Grow
          </h2>
          <p className="mt-4 text-lg text-charcoal-600">
            Purpose-built AI tools that handle your leads, calls, proposals, and
            scheduling while you focus on the work.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group rounded-2xl border border-charcoal-200 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-green-500/5"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
            >
              <div className="mb-4 inline-flex rounded-xl bg-green-100 p-3 text-green-700 transition-colors group-hover:bg-green-600 group-hover:text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-charcoal-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-charcoal-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

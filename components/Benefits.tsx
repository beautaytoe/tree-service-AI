"use client";

import { motion } from "framer-motion";
import { Clock, Zap, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Capture Every Lead — Even at 2 AM",
    description:
      "Your AI never sleeps. Every call, text, and web inquiry gets an instant response — day or night, weekends and holidays included.",
    stat: "24/7",
    statLabel: "Lead Capture",
  },
  {
    icon: Zap,
    title: "Respond in Seconds, Not Hours",
    description:
      "Speed-to-lead wins jobs. Our AI responds to new inquiries in under 30 seconds while your competitors are still checking voicemail.",
    stat: "<30s",
    statLabel: "Response Time",
  },
  {
    icon: TrendingUp,
    title: "Book More Jobs with Less Work",
    description:
      "Automate follow-ups, scheduling, and proposals. Our contractors see 3x more booked estimates without adding office staff.",
    stat: "3x",
    statLabel: "More Bookings",
  },
];

export default function Benefits() {
  return (
    <section className="bg-section-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-green-400">
            Why Tree Service AI
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Your Unfair Advantage
          </h2>
          <p className="mt-4 text-lg text-charcoal-400">
            While other contractors miss calls and lose leads, you&apos;ll be
            closing jobs on autopilot.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              className="rounded-2xl border border-charcoal-700 bg-section-dark-lighter p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-6 inline-flex rounded-xl bg-green-900/50 p-3 text-green-400">
                <benefit.icon className="h-6 w-6" />
              </div>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-white">
                  {benefit.stat}
                </span>
                <span className="ml-2 text-sm font-medium text-charcoal-400">
                  {benefit.statLabel}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-charcoal-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

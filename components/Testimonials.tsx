"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We were missing 40% of our calls before Tree Service AI. Now every single lead gets a response in seconds. Our booked estimates tripled in the first month.",
    name: "Mike Rodriguez",
    title: "Owner",
    company: "Rodriguez Tree Care",
    location: "Tampa, FL",
  },
  {
    quote:
      "The Voice AI is a game-changer. It handles calls like a real person — qualifies the lead, gets the address, and books the estimate. My guys can focus on cutting trees, not answering phones.",
    name: "Sarah Jenkins",
    title: "Operations Manager",
    company: "Coastal Tree Pros",
    location: "Charleston, SC",
  },
  {
    quote:
      "I was skeptical about AI for our industry but the ROI was obvious within two weeks. Beaver Bot cranks out proposals that used to take me an hour in about 30 seconds.",
    name: "David Chen",
    title: "Owner",
    company: "Summit Arbor Services",
    location: "Denver, CO",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-charcoal-900 sm:text-4xl">
            Trusted by Tree Service Pros
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="flex flex-col rounded-2xl border border-charcoal-200 bg-charcoal-50 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-6 text-charcoal-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-charcoal-200 pt-4">
                <p className="text-sm font-semibold text-charcoal-900">
                  {t.name}
                </p>
                <p className="text-xs text-charcoal-500">
                  {t.title}, {t.company} &middot; {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

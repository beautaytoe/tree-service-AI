"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I was losing probably 4\u20135 calls a day because my guys are up in trees. First month with this AI, we booked 12 extra estimates. That\u2019s real money.",
    name: "Mike Rodriguez",
    title: "Owner",
    company: "Rodriguez Tree Care",
    location: "Tampa, FL",
  },
  {
    quote:
      "Honestly I thought it\u2019d sound like a robot. It doesn\u2019t. Customers don\u2019t even know it\u2019s AI. It gets the info, books the appointment, and texts me the details. That\u2019s it.",
    name: "Sarah Jenkins",
    title: "Operations Manager",
    company: "Coastal Tree Pros",
    location: "Charleston, SC",
  },
  {
    quote:
      "I used to spend an hour every night writing up proposals. Now I hit a button from my truck and Beaver Bot sends it out in a minute. Closed a $4,200 removal that same day.",
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
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Real Results
          </span>
          <h2 className="mt-2 text-[2rem] font-extrabold tracking-tight text-charcoal-900 sm:text-4xl">
            Hear It From Contractors Like You
          </h2>
        </motion.div>

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
              <Quote className="mb-2 h-10 w-10 text-green-200" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="flex-1 text-lg leading-7 text-charcoal-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-charcoal-200 pt-4">
                <p className="text-base font-semibold text-charcoal-900">
                  {t.name}
                </p>
                <p className="text-sm text-charcoal-500">
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

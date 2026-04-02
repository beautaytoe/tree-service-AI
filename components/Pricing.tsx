"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import clsx from "clsx";

const tiers = [
  {
    name: "Starter",
    price: "$497",
    period: "/mo",
    description: "For solo operators ready to stop missing calls.",
    features: [
      "AI SMS auto-responder",
      "Up to 500 SMS/month",
      "Basic lead capture forms",
      "Calendar booking link",
      "Email support",
      "1 phone number",
    ],
    cta: "Book a Demo",
    popular: false,
  },
  {
    name: "Growth",
    price: "$1,497",
    period: "/mo",
    description: "For crews that want the full AI advantage.",
    features: [
      "Everything in Starter",
      "Voice AI phone agent (24/7)",
      "Unlimited SMS",
      "Beaver Bot AI proposals",
      "Full calendar integration",
      "Priority support",
      "Up to 3 phone numbers",
      "Custom follow-up sequences",
    ],
    cta: "Book a Demo",
    popular: true,
  },
  {
    name: "Custom",
    price: "Let\u2019s Talk",
    period: "",
    description: "Multi-location companies with custom needs.",
    features: [
      "Everything in Growth",
      "Unlimited phone numbers",
      "Custom AI training on your business",
      "CRM integration",
      "Dedicated account manager",
      "Custom reporting dashboard",
      "Multi-location support",
      "White-glove onboarding",
    ],
    cta: "Book a Demo",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-charcoal-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Pricing
          </span>
          <h2 className="mt-2 text-[2rem] font-extrabold tracking-tight text-charcoal-900 sm:text-4xl">
            Less Than a Part-Time Receptionist
          </h2>
          <p className="mt-4 text-lg text-charcoal-600">
            And it works 24/7, never calls in sick, and never puts a customer on
            hold.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={clsx(
                "relative flex flex-col rounded-2xl border p-8",
                tier.popular
                  ? "border-primary bg-white shadow-2xl shadow-green-500/10 ring-2 ring-primary"
                  : "border-charcoal-200 bg-white"
              )}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {tier.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-charcoal-900">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-charcoal-500">
                  {tier.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-extrabold text-charcoal-900">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-lg text-charcoal-500">
                    {tier.period}
                  </span>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[0.938rem] text-charcoal-700"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={clsx(
                  "flex h-14 items-center justify-center rounded-lg text-base font-bold transition-colors",
                  tier.popular
                    ? "bg-accent text-charcoal-900 shadow-lg shadow-amber-500/20 hover:bg-accent-dark"
                    : "bg-charcoal-900 text-white hover:bg-charcoal-800"
                )}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import clsx from "clsx";

const tiers = [
  {
    name: "Starter",
    price: "$497",
    period: "/mo",
    description: "Perfect for solo operators ready to stop missing calls.",
    features: [
      "AI SMS auto-responder",
      "Up to 500 SMS/month",
      "Basic lead capture forms",
      "Calendar booking link",
      "Email support",
      "1 phone number",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    price: "$1,497",
    period: "/mo",
    description: "For growing companies that want the full AI advantage.",
    features: [
      "Everything in Starter",
      "Voice AI phone agent (RetellAI)",
      "Unlimited SMS",
      "Beaver Bot AI proposals",
      "Full calendar integration",
      "Priority support",
      "Up to 3 phone numbers",
      "Custom follow-up sequences",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Custom",
    price: "Let's Talk",
    period: "",
    description: "Enterprise solutions for multi-location tree service companies.",
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
    cta: "Contact Us",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-charcoal-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Pricing
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-charcoal-900 sm:text-4xl">
            Invest in Growth, Not Overhead
          </h2>
          <p className="mt-4 text-lg text-charcoal-600">
            Less than the cost of a part-time receptionist — and it works 24/7.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={clsx(
                "relative flex flex-col rounded-2xl border p-8",
                tier.popular
                  ? "border-primary bg-white shadow-xl shadow-green-500/10 ring-2 ring-primary"
                  : "border-charcoal-200 bg-white"
              )}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {tier.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-charcoal-900">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-charcoal-500">
                  {tier.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-charcoal-900">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-base text-charcoal-500">
                    {tier.period}
                  </span>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-charcoal-700"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={clsx(
                  "block rounded-lg py-3 text-center text-sm font-semibold transition-colors",
                  tier.popular
                    ? "bg-accent text-charcoal-900 shadow-sm hover:bg-accent-dark"
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

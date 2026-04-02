"use client";

import { motion } from "framer-motion";
import { MessageSquareText, Phone, FileText, CalendarCheck } from "lucide-react";

const features = [
  {
    icon: MessageSquareText,
    title: "Instant Missed-Call Texting",
    description:
      "Every missed call gets an instant text back. \u201cHey, saw you called \u2014 how can we help?\u201d Leads stay warm instead of calling the next guy.",
  },
  {
    icon: Phone,
    title: "AI Receptionist (24/7)",
    description:
      "Your AI receptionist never takes a day off. It answers calls, qualifies leads, handles pricing questions, and books estimates \u2014 even at 2 AM.",
  },
  {
    icon: FileText,
    title: "60-Second Estimates",
    description:
      "Send estimates from your truck in 60 seconds. Beaver Bot builds professional proposals on the spot so you close jobs before you leave the property.",
  },
  {
    icon: CalendarCheck,
    title: "Auto-Booking Calendar",
    description:
      "Customers book themselves \u2014 no phone tag. Your calendar fills up automatically with qualified estimates. You just show up.",
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
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            What You Get
          </span>
          <h2 className="mt-2 text-[2rem] font-extrabold tracking-tight text-charcoal-900 sm:text-4xl">
            Tools That Work as Hard as You Do
          </h2>
        </motion.div>

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
              <p className="mt-2 text-[0.938rem] leading-6 text-charcoal-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

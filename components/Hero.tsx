"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const bullets = [
  "Answers missed calls instantly",
  "Books estimates automatically",
  "Works with your existing CRM",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#16a34a08_1px,transparent_1px),linear-gradient(to_bottom,#16a34a08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-800">
                Built for Tree Service Contractors
              </span>
            </motion.div>

            <motion.h1
              className="mt-6 text-[2rem] font-extrabold leading-[1.15] tracking-tight text-charcoal-900 sm:text-5xl lg:text-[3.25rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Stop Losing Tree Jobs to{" "}
              <span className="text-primary">Missed Calls</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg leading-8 text-charcoal-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our AI receptionist answers every call, qualifies leads, books
              jobs, and follows up&nbsp;&mdash;&nbsp;24/7. You focus on the
              work. We fill your schedule.
            </motion.p>

            <motion.ul
              className="mt-6 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2.5 text-base font-medium text-charcoal-700"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                  {b}
                </li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#demo"
                className="flex h-14 items-center justify-center rounded-lg bg-accent px-8 text-base font-bold text-charcoal-900 shadow-lg shadow-amber-500/25 transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-amber-500/30 sm:w-auto"
              >
                Watch the 90-Second Demo
              </a>
              <a
                href="#contact"
                className="flex h-14 items-center justify-center rounded-lg border-2 border-charcoal-300 bg-white px-8 text-base font-bold text-charcoal-700 transition-colors hover:border-charcoal-400 hover:bg-charcoal-50 sm:w-auto"
              >
                Book a Live Demo
              </a>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-charcoal-900 p-8 shadow-2xl shadow-charcoal-900/20">
              <Image
                src="/logo-full.png"
                alt="Tree Service AI"
                width={400}
                height={400}
                className="h-auto w-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

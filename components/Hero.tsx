"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import HeroCanvas from "./HeroCanvas";

const bullets = [
  "Answers missed calls instantly",
  "Books estimates automatically",
  "Works with your existing CRM",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-green-50/50 to-white pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#16a34a06_1px,transparent_1px),linear-gradient(to_bottom,#16a34a06_1px,transparent_1px)] bg-[size:4rem_4rem]" />

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
                  className="flex items-center gap-2.5 text-lg font-medium text-charcoal-700"
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
                className="flex h-14 items-center justify-center rounded-lg bg-green-600 px-8 text-base font-bold text-white shadow-lg shadow-green-600/25 transition-all hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/30 sm:w-auto"
              >
                Watch the 90-Second Demo
              </a>
              <a
                href="#contact"
                className="flex h-14 items-center justify-center rounded-lg border-2 border-green-600 bg-white px-8 text-base font-bold text-green-700 transition-colors hover:bg-green-50 sm:w-auto"
              >
                Book a Live Demo
              </a>
            </motion.div>
          </div>

          {/* Interactive canvas */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-green-200/60 bg-gradient-to-br from-green-50 to-white shadow-xl shadow-green-500/5">
              <HeroCanvas />
              {/* Center logo overlay */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="rounded-2xl bg-white/80 px-8 py-6 text-center backdrop-blur-sm">
                  <p className="text-2xl font-extrabold tracking-tight text-charcoal-900">
                    Tree Service{" "}
                    <span className="text-primary">AI</span>
                  </p>
                  <p className="mt-1 text-sm font-medium text-charcoal-500">
                    Intelligent Lead Management
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}

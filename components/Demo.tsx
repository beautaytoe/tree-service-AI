"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Demo() {
  return (
    <section id="demo" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Demo
          </span>
          <h2 className="mt-2 text-[2rem] font-extrabold tracking-tight text-charcoal-900 sm:text-4xl">
            See Tree Service AI In Action
          </h2>
        </motion.div>

        {/* Video player */}
        <motion.div
          className="mx-auto mt-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 shadow-2xl shadow-charcoal-900/30">
            <div className="aspect-video">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-charcoal-900/40" />

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30 transition-transform group-hover:scale-110 sm:h-24 sm:w-24">
                  <Play className="ml-1 h-8 w-8 text-white sm:h-10 sm:w-10" />
                </div>
                <p className="mt-5 text-lg font-bold text-white">
                  Watch the 90-Second Demo
                </p>
                <p className="mt-1 text-sm text-charcoal-400">
                  See how calls become booked jobs — automatically
                </p>
              </div>

              <div className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-sm">
                1:30
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

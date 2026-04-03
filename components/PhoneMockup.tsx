"use client";

import { motion } from "framer-motion";

const messages = [
  {
    from: "customer",
    text: "Hi, I need a large oak removed near my house",
  },
  {
    from: "ai",
    text: "I\u2019d be happy to help! What\u2019s the property address?",
  },
  {
    from: "customer",
    text: "123 Oak St, Tampa FL",
  },
];

function TypingIndicator() {
  return (
    <div className="flex gap-1 px-4 py-2.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="inline-block h-2 w-2 rounded-full bg-white/80"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

export default function PhoneMockup() {
  return (
    <div className="mx-auto w-[280px] overflow-hidden rounded-[2rem] border-2 border-charcoal-700 bg-charcoal-900 shadow-2xl shadow-charcoal-900/40">
      {/* Status bar */}
      <div className="flex items-center justify-between bg-charcoal-800 px-5 py-2 text-[10px] text-charcoal-400">
        <span>9:41 AM</span>
        <div className="flex items-center gap-1">
          <div className="h-2 w-3 rounded-sm border border-charcoal-400">
            <div className="m-px h-full w-2/3 rounded-sm bg-green-500" />
          </div>
        </div>
      </div>

      {/* Chat header */}
      <div className="flex items-center gap-3 border-b border-charcoal-700 bg-charcoal-800 px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
          AI
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Tree Service AI</p>
          <div className="flex items-center gap-1">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
            <span className="text-[11px] text-green-400">Active</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-2.5 px-3 py-4">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-5 ${
              msg.from === "customer"
                ? "self-start rounded-bl-md bg-charcoal-700 text-charcoal-200"
                : "self-end rounded-br-md bg-green-600 text-white"
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 + i * 0.4 }}
          >
            {msg.text}
          </motion.div>
        ))}

        {/* Typing indicator */}
        <motion.div
          className="max-w-[85%] self-end rounded-2xl rounded-br-md bg-green-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.8 }}
        >
          <TypingIndicator />
        </motion.div>
      </div>

      {/* Input bar */}
      <div className="border-t border-charcoal-700 bg-charcoal-800 px-3 py-3">
        <div className="flex h-8 items-center rounded-full bg-charcoal-700 px-4 text-xs text-charcoal-500">
          Type a message...
        </div>
      </div>
    </div>
  );
}

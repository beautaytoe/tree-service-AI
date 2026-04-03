"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const faqs = [
  {
    question: "How quickly can I get set up?",
    answer:
      "Most clients are fully live within 24 hours. We handle the setup \u2014 porting your number, configuring your AI responses, and connecting your calendar. You just review and approve.",
  },
  {
    question: "Will the AI sound robotic to my customers?",
    answer:
      "Not at all. Our Voice AI is powered by RetellAI and sounds remarkably natural. It\u2019s trained on tree service terminology and handles conversations like an experienced receptionist \u2014 including follow-up questions and objection handling.",
  },
  {
    question: "What if a lead needs to talk to a real person?",
    answer:
      "The AI knows when to hand off. Complex questions, upset callers, or anyone who asks for a person gets routed directly to you or your team via call transfer or priority text notification.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "No. All plans are month-to-month with no long-term commitment. We earn your business every month. You can cancel anytime with no penalties or hidden fees.",
  },
  {
    question: "How does Tree Service AI integrate with my existing tools?",
    answer:
      "We integrate with Google Calendar, Outlook, and most popular CRMs. Beaver Bot proposals can be sent directly via SMS or email. If you use a specific tool, ask us \u2014 we likely support it or can build a custom integration.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Plans start at $497/month for solo operators. Our Growth plan at $1,497/month includes voice AI and unlimited SMS. All plans include a 30-day money-back guarantee \u2014 no long-term contracts.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-charcoal-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="pr-4 text-lg font-semibold text-charcoal-900">
          {question}
        </span>
        <ChevronDown
          className={clsx(
            "h-5 w-5 shrink-0 text-charcoal-500 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-lg leading-7 text-charcoal-600">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-charcoal-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </span>
          <h2 className="mt-2 text-[2rem] font-extrabold tracking-tight text-charcoal-900 sm:text-4xl">
            Common Questions
          </h2>
        </motion.div>

        <div className="mt-12">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

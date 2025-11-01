'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is an internet leased line?',
    answer: 'An internet leased line provides a private, dedicated, and uncontended connection to the internet for a business. Unlike shared broadband, the bandwidth is guaranteed and not affected by other users.',
  },
  {
    question: 'Is a leased line better than broadband?',
    answer: 'For businesses, a leased line is generally superior. It offers higher reliability, guaranteed symmetrical speeds, and a Service Level Agreement (SLA), which are critical for business-critical operations.',
  },
  {
    question: 'How long does it take to get a leased line installed?',
    answer: 'Installation times can vary based on location and infrastructure, but typically range from a few weeks to several months. Our team will provide a specific timeline after a site survey.',
  },
];

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="container mx-auto py-16">
      <h2 className="text-center text-4xl font-bold">Frequently Asked Questions</h2>
      <div className="mt-12 space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg bg-white p-6 shadow-md">
            <button
              className="flex w-full items-center justify-between text-left"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <motion.span
                animate={{ rotate: openFaq === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl text-blue-600"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {openFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="mt-4 overflow-hidden"
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type PricingTier = {
  name: string;
  speed: string;
  description: string;
  features: string[];
  price: number;
  highlight?: boolean;
};

export function InteractivePricing({ tiers }: { tiers: PricingTier[] }) {
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);

  const cardVariants = {
    initial: { scale: 1, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
    hover: { scale: 1.05, boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)' },
  };

  return (
    <section id="pricing" className="w-full bg-background-secondary py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Flexible Pricing for Your Business</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose a plan that fits your business needs and scale as you grow.
        </p>
        <div className="mt-12 flex flex-col justify-center gap-8 md:flex-row">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`flex-1 cursor-pointer rounded-xl bg-background p-8 shadow-lg transition ${
                tier.highlight ? 'ring-4 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedTier(tier)}
              initial="initial"
              whileHover="hover"
              variants={cardVariants}
            >
              <h3 className="text-3xl font-bold">{tier.name}</h3>
              <p className="mt-2 text-lg text-muted-foreground">{tier.speed}</p>
              {/* <p className="mt-4 text-5xl font-extrabold">
                <small>starting from:</small> &#8377;{tier.price} <span className="text-lg font-medium text-gray-500">/mo</span>
              </p> */}
              <p className="mt-4 text-sm text-muted-foreground">{tier.description}</p>
              <ul className="mt-6 text-left text-muted-foreground">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center py-2">
                    <span className="mr-2 text-blue-600">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-full px-6 py-3 text-lg font-semibold transition ${
                  tier.highlight ? 'bg-blue-600 shadow-primary shadow-2xs text-primary hover:bg-blue-700' : 'bg-background shadow-primary shadow-2xs hover:bg-background-secondary'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

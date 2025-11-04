'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const speeds = [
  { type: 'Fiber', speed: 1000, color: 'text-blue-600' },
  { type: 'Aif Fiber', speed: 200, color: 'text-yellow-500' },
  { type: 'DSL (Extinct)', speed: 10, color: 'text-red-500' },
];

export function SpeedComparison() {
  const [selectedSpeed, setSelectedSpeed] = useState(speeds[0]);

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">See the Speed Difference</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Compare our lightning-fast fiber speeds with traditional connections.
        </p>

        <div className="mt-12 flex flex-col gap-2 md:lg:flex-row justify-center space-x-4">
          {speeds.map((speed) => (
            <button
              key={speed.type}
              onClick={() => setSelectedSpeed(speed)}
              className={`rounded-full px-6 py-2 text-xl md:lg:text-lg font-semibold transition ${
                selectedSpeed.type === speed.type
                  ? `bg-blue-600 text-white`
                  : `bg-gray-200 text-gray-700 hover:bg-gray-300`
              }`}
            >
              {speed.type}
            </button>
          ))}
        </div>

        <div className="relative mt-12 h-64 overflow-hidden rounded-xl bg-popover p-8 shadow-inner">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSpeed.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex h-full flex-col items-center justify-center"
            >
              <p className={` text-4xl md:lg:text-6xl font-extrabold ${selectedSpeed.color}`}>
                {selectedSpeed.speed} Mbps
              </p>
              <p className="mt-2 text-xl font-medium">
                {selectedSpeed.type} Internet
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

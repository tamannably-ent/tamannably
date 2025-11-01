'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Service = {
  title: string;
  description: string;
  image: string;
};

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-center text-4xl font-bold">Our Services</h2>
      <p className="text-center text-lg text-gray-600 mt-4 mb-12">
        A fiber connection is a gateway to endless possibilities.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
              className="object-fill transition duration-300 group-hover:scale-110 z-auto"
            />
            <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/60"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-2 text-sm opacity-0 transition duration-300 group-hover:opacity-100">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

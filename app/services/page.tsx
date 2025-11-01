'use client'
import { mainServices } from '@/lib/homeContent';
import Link from 'next/link';
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';


const ServicesPage = () => {
  // const service = services
  const services = mainServices();
  console.log(services)
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full h-full my-[50px] p-25'>
      {services.map((data, index) => (
        <Link
            href={data.link}
        >
          <motion.div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg h-[400px] justify-center justify-items-center items-center text-justify"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
              <Image
                src={data.image}
                alt={data.title}
                width={1024}
                height={1024}
                className="object-fill transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/80"></div>
              <div  className='absolute bottom-0 left-0 text-white p-10'>
                <h3 className="text-2xl lg:text-4xl font-bold">{data.title}</h3>
                  <p className="mt-2 text-sm opacity-0 transition duration-300 group-hover:opacity-100">
                    {data.description}
                  </p>
              </div>
          </motion.div>
        </Link>
       ))}
    </div>
  )
}

export default ServicesPage

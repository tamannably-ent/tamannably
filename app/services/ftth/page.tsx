import { AvailabilityCheck } from '@/components/AvailabilityCheck';
import { Hero } from '@/components/Hero';
import { ServicesGrid } from '@/components/ServiceGrid';
import { SpeedComparison } from '@/components/SpeedComparision';
import { HeroProp } from '@/lib/homeContent';
import React from 'react'

const getServices = () => [
  {
    title: 'Ultra-Fast Streaming',
    description: 'Binge-watch your favorite shows in 4K without buffering.',
    image: '/images/streaming.jpg',
  },
  {
    title: 'Lag-Free Gaming',
    description: 'Dominate the competition with the lowest latency.',
    image: '/images/gaming.png',
  },
  {
    title: 'Smart Home Ready',
    description: 'Connect all your devices seamlessly and reliably.',
    image: '/images/smarthome.jpg',
  },
  {
    title: 'Reliable Work-from-Home',
    description: 'Ensure stable video calls and fast file transfers.',
    image: '/images/wfh.jpg',
  },
];

const FtthPage = () => {
    const services = getServices();
    const heroProp = HeroProp();
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50 text-gray-800 my-[50px]">
      {/* Hero Section (Server Component) */}
      <Hero Prop={heroProp} />

      {/* Services Showcase (Client Component) */}
      <ServicesGrid services={services} />

      {/* Speed Comparison (Client Component) */}
      <SpeedComparison />

      {/* Availability Check (Client Component) */}
      <AvailabilityCheck />

      {/* Other sections like a footer can go here */}
    </main>
  )
}

export default FtthPage

import { Hero } from '@/components/Hero';
import { FeaturesSection } from '@/components/FeatureSection';
import { InteractivePricing } from '@/components/InteractivePricing';
import { FaqSection } from '@/components/FaqSection';

import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { CompanyName, HeroProp, HeroPropLL } from '@/lib/homeContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  icons:{
    icon: "/Logo/logo.png",
  },
  title: "Leasedline services - Tamanna Enterprises, Bellary Karnataka",
  description: `${CompanyName.fullName}, Serves High Speed internet Connections in Bellary, Karnatak`,
  keywords: [
    'internet provider Bellary',
    'high speed internet Bellary',
    'broadband connections Karnataka',
    'Tamanna Enterprises services',
    'best internet service Bellary',
    'fiber internet Bellary'
  ],
  referrer: 'origin-when-cross-origin',
  
}

// This is a Server Component, so you can fetch data directly here.
const getPricingTiers = () => [
  {
    name: 'Standard',
    speed: '100 Mbps',
    description: 'High-speed, symmetrical bandwidth for small businesses.',
    features: ['Symmetrical bandwidth', '24/7 technical support'],
    price: 9000,
  },
  {
    name: 'Enterprise',
    speed: '500 Mbps',
    description: 'Dedicated, high-capacity line for larger organizations.',
    features: ['Symmetrical bandwidth', '24/7 dedicated support', 'Service Level Agreement'],
    price: 85000,
  },
  {
    name: 'Premium',
    speed: '1 Gbps+',
    description: 'Ultra-fast, uncontended service for maximum performance.',
    features: ['Guaranteed speeds', 'Dedicated fiber link', 'Customized solutions'],
    price: 185000,
    highlight: true,
  },
];

export default function LeasedLinePage() {
  const pricingTiers = getPricingTiers();
  const heroProp = HeroPropLL();

  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-primary">
      {/* Hero Section (Server Component) */}
      <Hero Prop={heroProp} />

      {/* Services and Features Showcase (Server Component) */}
      <FeaturesSection />

      {/* Interactive Pricing (Client Component) */}
      <InteractivePricing tiers={pricingTiers} />

      {/* FAQ Section (Client Component) */}
      <FaqSection />

      {/* Contact Form (Client Component) */}
      <ContactForm />

      {/* Other components like a footer can go here */}
    </main>
  );
}

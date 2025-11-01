// app/connect/page.tsx
import { CompanyName, ContactDetails } from '@/lib/homeContent';
import { Metadata } from 'next';
import React from 'react';
import SocialMedia from '@/components/socialMedia';


export const metadata: Metadata = {
    title: `Services Offered - ${CompanyName.fullName}, ${CompanyName.city}, Karnataka`,
    description: " Various services offered for High Speed Internet in Bellary Dist., Karnataka."
}

const position = {
  grid: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
  // md: 'grid-cols-5',
  // lg: 'grid-cols-6',
  size: "h-[48px] w-[48px]"
}

const ConnectPage = () => {
  const openExternalLink = (whatsappLink: string | URL | undefined) => {
    // window.open("http://wa.me/"+whatsappLink, '_blank'); // Opens in a new tab
  };
  return (
    <main className="flex flex-col w-full mx-auto px-2 py-5">
      <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-center text-white-700 mb-5">
        Connect With Us
      </h1>
      <p className='text-center font-extrabold text-xl pb-5'>
        {CompanyName.email}
      </p>
      <p className="text-center text-gray-900 dark:text-gray-300 mb-5 text-lg/snug md:lg:text-lg px-5">
        Reach out through any of the platforms below — we’re always ready to assist you.
      </p>

      <div className='mx-auto w-[100%] items-center justify-center justify-items-center'>
        <SocialMedia ContactDetails={ContactDetails} position={position} />
      </div>
      
    </main>
  );
};

export default ConnectPage;

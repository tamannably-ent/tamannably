import { teamMembers } from '@/lib/homeContent'
import { CompanyName } from '@/lib/homeContent'
import { div } from 'framer-motion/client'
import Link from 'next/link'
import React from 'react'
import style from "../main.module.css"
import { Metadata } from 'next'

const cardWrapper = `relative w-full h-[500px]  rounded-[10px] bg-gradient-to-b from-slate-700 to-slate-950 overflow-hidden hover:scale-105 hover:cursor-pointer hover:before:animate-none`;

const cardWrapperBefore = `before:bg-[conic-gradient(rgba(244,114,182,0.4)_0deg,rgba(192,232,252,0.4)_0deg,transparent_80deg)] before:absolute before:h-[150%] before:w-[150%] before:animate-spin before:left-[-25%] before:top-[-25%] `

const cardContent = `absolute w-[calc(100%-2px)] p-[2em] h-[calc(100%-2px)] top-[1px] left-[1px] z-[1] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[10px] `;

export const metadata: Metadata = {
  icons:{
    icon: "/Logo/logo.png",
  },
  title: "About - Tamanna Enterprises, Bellary Karnataka",
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

const aboutUs = () => {
  return (
     <div className='relative flex flex-col gap-4 py-20 p-5 text-white '>
        <div className='marker '>
            <span className=' '></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
      {/* Hero section for the About Us page */}
      <section className="card-heading h-[150px] rounded-xl p-10">
        <div className='card-content items-center justify-items-center '>
            <h1 className='font-bold text-5xl'>About Us</h1>
            <p 
                className={`
                    font-semibold
                    shadow-gray-400 
                    shadow-2xs 
                    hover:transition-colors 
                    hover:text-blue-700 
                    hover:duration-1000 
                    cursor-pointer 
                    font-stretch-200%
                `}
            >
                Connecting your home with the power of fiber optics.
            </p>
        </div>
      </section>

      <div className='lg:py-10 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 text-justify'>
        {/* Our Story section */}
        <section className={`card-wrapper h-[400px] lg:h-[500px]`}>
            <div className={`card-content`}>
                <h2 className='text-3xl font-bold text-left'>Our Journey in Connecting Communities</h2>
                <p className='py-5'>
                    <span className='text-amber-600 text-shadow-gray-200/50 font-semibold leading-0.5 '>{CompanyName.fullName} </span> was founded in the year 2009 with a vision to revolutionize telecom and internet connectivity in Bellary Urban Area, Karnataka. We saw the growing need for reliable, high-speed internet and committed ourselves to bringing the future of fiber optic technology directly to homes and businesses from 2019. Over the years, we've achieved significant milestones, including Provisions and Maintaining of 2,000 FTTH Customer services under BSNL as a franchisee and nearly 80 Leased Line Circuits.
                </p>
            </div>
        </section>

        {/* Mission & Vision section */}
        <section className={`card-wrapper h-[400px] lg:h-[500px]`}>
            <div className={`card-content`}>
                <h2 className='text-2xl lg:text-3xl font-bold text-left'>Our Mission & Vision</h2>
                <p className='py-5'>
                    <span className='text-amber-600 text-shadow-gray-200/50 '>**Mission:**</span> To provide unparalleled fiber optic internet services, empowering individuals and businesses with seamless connectivity and exceptional online experiences.
                </p>
                <p className='py-5'>
                    <span className='text-amber-600 text-shadow-gray-200/50 '>**Vision:**</span> To be the leading and most trusted FTTH provider in Karnataka, fostering innovation and driving digital inclusion within our communities.
                </p>
            </div>
        </section>

        {/* Our Values section */}
        <section className={`card-wrapper h-[400px] lg:h-[500px]`}>
            <div className={`card-content`}>
            <h2 className='text-3xl font-bold'>Our Core Values</h2>
                <ul>
                    <li><span className='text-amber-600 text-shadow-gray-200/50 '>**Reliability:**</span> Delivering consistent, high-performance internet you can always count on.</li>
                    <li><span className='text-amber-600 text-shadow-gray-200/50 '>**Customer Focus:**</span> Prioritizing your needs and providing responsive, personalized support.</li>
                    <li><span className='text-amber-600 text-shadow-gray-200/50 '>**Innovation:**</span> Constantly seeking new ways to enhance our services and technology.</li>
                    <li><span className='text-amber-600 text-shadow-gray-200/50 '>**Community Engagement:**</span> Actively participating in and supporting the growth of our local communities.</li>
                </ul>
            </div>
        </section>

        {/* What We Offer section */}
        <section className={`card-wrapper h-[400px] lg:h-[500px]`}>
            <div className={`card-content`}>
                <h2 className='text-3xl font-bold'>Our FTTH Solutions</h2>
                <p>We offer a comprehensive range of fiber-optic internet solutions tailored to meet your needs:</p>
                <ul>
                    <li><span className='text-amber-600 text-shadow-gray-200/50 '>**Ultra-Fast Internet Plans:**</span> Experience blazing-fast speeds for streaming, gaming, and working from home.</li>
                    <li><span className='text-amber-600 text-shadow-gray-200/50 '>**Professional Installation:**</span> Expert technicians ensure a smooth and efficient setup process.</li>
                    <li><span className='text-amber-600 text-shadow-gray-200/50 '>**Dedicated Customer Support:**</span> Our team is always ready to assist you with any queries or technical assistance.</li>
                </ul>
            </div>
        </section>

        {/* Our Team section */}
        <section className={`card-wrapper h-[400px] lg:h-[500px]`}>
            <div className='card-content'>
            <h2 className='text-3xl font-bold'>Meet Our Team</h2>
            {/* Display team member photos and short bios */}
            


                {/* <img 
                    src="/images/profile/profile-default.jpg" 
                    alt="Team Member Name" 
                    className='w-24 rounded-[50%]'
                />
                <div>
                    <h3>[Team Member Name]</h3>
                    <p>[Role/Designation]</p>
                </div> */}
                 {teamMembers.map((data,i) => (
                    <div className='card-wrapper h-[150px] flex flex-col my-4 hover:scale-100'>
                        <div className="card-content card-border py-5 p-2 flex flex-row gap-10 ">
                            <>
                                <img 
                                    src={data.src}
                                    alt={data.name}
                                    className='w-24 rounded-full'
                                />
                                <div className='py-5 justify-items-center'>
                                    <h3>{data.name}</h3>
                                    <p>desig.: {data.role}</p>
                                </div>
                            </>
                        </div>
                    </div>
                ))}
            
                </div>
           
            {/* Add more team member cards */}
        </section>

        {/* Testimonials/Social Proof section */}
        <section className="card-wrapper h-[400px] lg:h-[500px] lg:col-span-2 py-5 p-10 ">
            <div className='card-content '>
                <h2 className='text-3xl font-bold'>What Our Customers Say</h2>
                <div className="testimonial-card">
                    <p>"[Quote from a happy customer]"</p>
                    <p>- [Customer Name], [Location]</p>
                </div>
                {/* Add more testimonials */}
            </div>
        </section>

        {/* Call to Action section */}
        <section className="card-wrapper py-5 p-10 h-[400px] lg:h-[500px]">
            <div className='card-content'>
                <h2 className='text-3xl font-bold'>Ready for the Future of Internet?</h2>
                <Link href="/contact">
                    <button>Get in Touch</button>
                </Link>
            </div>
        </section>
      </div>
    </div>
  )
}

export default aboutUs

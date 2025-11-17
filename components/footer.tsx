
import { CompanyName } from '@/lib/homeContent'
import { div } from 'framer-motion/client'
import React from 'react'
import ConnectPage from './connectUs'
import { Phone, Sparkle } from 'lucide-react'

type subHeading = {
  name: string,
  link: string
}

type ServiceFooter = {
  service: string,
  href: string,
  subHeading: subHeading[]
}

type FooterProps = {
    services: ServiceFooter[],
    connect: { mobile: string; social: string; }[]
}

const Footer:React.FC<FooterProps> = ({services, connect}) => {
  // const count = services.length;
  // console.log(count)
  return (
    <div className='bg-background shadow-upwards-mode text-primary '>
      
      {/* <div className={`grid grid-cols-${count+1} gap-2 p-5`}> */}
      <div className='flex flex-col align-middle justify-center lg:flex-row gap-2 p-10 py-5 lg:mx-auto lg:justify-around '>
        <div className='flex flex-col justify-center gap-2 p-10 py-5 lg:flex-row lg:flex-3/4 lg:mx-auto lg:justify-around group/outer'>
          {services.map((d,i) => (
            <div key={i}>
              <span className='text-primary group-hover/outer:text-green-700'>
                {d.service}
              </span>
              {d.subHeading ? d.subHeading.map((data,j) => (
                <div className='flex gap-1 align-middle items-center justify-items-center relative px-4 group/inner text-primary/75 transition-all duration-700' key={j}>
                  <Sparkle className='w-3 h-3 opacity-0 delay-200 text-shadow-primary group-hover/inner:opacity-100 group-hover/inner:-translate-x-0.5 group-hover/inner:animate-caret-blink' />
                  <a href={data.link}>
                    {data.name}
                  </a>
                  <div className='absolute ml-3 bottom-0 w-0 h-1 bg-gradient-to-br bg-blue-600/50 to-pink-600/50 via-purple-500/50 group-hover/inner:opacity-80 group-hover/inner:w-[80%] ' />
                </div>
              )): null }
            </div>
            
          ))}
        </div>
        <div className='px-10'>
          Contact Us
          {connect.map((data,i) => (
              <div key={i} className='px-4 flex flex-row gap-2 group/connect align-middle items-center justify-items-center cursor-pointer transition-colors duration-300'>
                <span><Phone className='w-4 h-4 group-hover/connect:text-green-600/70 group-hover/connect:-translate-x-1 group-hover/connect:animate-caret-blink ' /></span>
                <span className='text-primary/75 group-hover/connect:text-purple-600/75 group-hover/connect:scale-105'>{data.mobile}</span>
              </div>
          ))}
        </div>
      </div>
      <div className='bg-footer-secondary shadow-upwards-mode'>
        <ConnectPage />
      </div>
      <div className='mx-auto text-center text-primary'>
        <p>@2025 {CompanyName.fullName}, All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer

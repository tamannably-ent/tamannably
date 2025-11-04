
import { CompanyName } from '@/lib/homeContent'
import { div } from 'framer-motion/client'
import React from 'react'
import ConnectPage from './connectUs'

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
      <div className='flex flex-col place-it align-middle lg:flex-row gap-2 p-10 py-5 lg:mx-auto lg:justify-around'>
        {services.map((d,i) => (
          <div key={i}>
            {d.service}
            {d.subHeading ? d.subHeading.map((data,j) => (
              <div key={j}>
                <a href={data.link}>{data.name}</a>
              </div>
            )): null }
          </div>
          
        ))}
        
        <div>
          Connect with Us
          {connect.map((data,i) => (
              <div key={i}>{data.mobile}</div>
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

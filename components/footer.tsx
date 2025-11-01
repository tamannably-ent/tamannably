
import { CompanyName } from '@/lib/homeContent'
import { div } from 'framer-motion/client'
import React from 'react'
import ConnectPage from './connectUs'


type FooterProps = {
    services: any[],
    connect: any[]
}

const Footer:React.FC<FooterProps> = ({services, connect}) => {
  // const count = services.length;
  // console.log(count)
  return (
    <div className='bg-slate-900 text-gray-400 '>
      
      {/* <div className={`grid grid-cols-${count+1} gap-2 p-5`}> */}
      <div className='flex flex-col place-it align-middle lg:flex-row gap-2 p-10 py-5 lg:mx-auto lg:justify-around'>
        {services.map((d,i) => (
          <div key={i}>
            {d.service}
            {d.subHeading ? d.subHeading.map((data,j) => (
              <div key={j}>{data.name}</div>
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
      <div className='bg-slate-700'>
        <ConnectPage />
      </div>
      <div className='mx-auto text-center text-white'>
        <p>@2025 {CompanyName.fullName}, All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer

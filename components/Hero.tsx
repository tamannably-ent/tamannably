'use client'

import { HeroProp, HeroPropLL } from '@/lib/homeContent';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
// import style from "./main.module.css";



type HeroProps = {
    serviceName: string,
    src: string,
    heading: string,
    content: string,
    hrefId: string,
    linkTxt: string,
    vidSrc: string,
  
}

export function Hero({ Prop }: { Prop: HeroProps[] }) {
  const pathname = usePathname().split("/").toString().slice(1);
  // console.log(pathname)
  
  // const [req, setReq] = useState(HeroProp)

  // useEffect(()=>{
  //   if(pathname === "ftth") 
  //     return setReq(HeroProp)
  //   return setReq(HeroPropLL)
  // },[])
  

  return (

      <div className="relative h-[600px] w-full">
        {Prop.map((data, index)=>(
          <div className='h-[600px] after:inset-0 after:w-full after:h-full after:absolute after:bg-slate-950/80 after:z-[1]'>
            <video autoPlay loop muted className="absolute w-full h-full top-0 left-0 object-cover ">
              <source src={data.vidSrc} type='video/mp4' />
              <source src={data.vidSrc} type='video/webm'/>
            </video>
            <Image
              src={data.src}
              alt={data.serviceName}
              fill
              className="object-cover z-[-1]"
              // priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-5xl font-bold md:text-7xl z-[3]">
                 
                {data.heading}
              </h1>
              <p className="mt-4 text-xl md:text-2xl z-[3]">
                {data.content}
              </p>
              <a
                href={data.hrefId}
                className="mt-8 rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold transition hover:bg-blue-700 z-[3]"
              >
                {data.linkTxt}
              </a>
            </div>
          </div>
        ))}
      {/* <Image
        src="/images/hero-bg.jpg"
        alt="Modern living room with fiber optic glow"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        <h1 className="text-5xl font-bold md:text-7xl">
          Experience the Future of Internet
        </h1>
        <p className="mt-4 text-xl md:text-2xl">
          Connect with ultra-fast FTTH service today.
        </p>
        <a
          href="#availability"
          className="mt-8 rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold transition hover:bg-blue-700"
        >
          Check Availability
        </a>
      </div> */}
    </div>
  );
}

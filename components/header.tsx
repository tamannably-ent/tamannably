"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import style from "../app/main.module.css";

type HeaderProps = {
    headerText: string,
    tagLine: string,
    description: string,
    imgSrc: string,
    vidSrc: string,
}

const ReadMore = ({textDesc, maxLength} : {textDesc:string, maxLength:number}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  }

  const truncatedText = isExpanded ? textDesc : `${textDesc.substring(0, maxLength)}...`;

  return (
    <div className='w-[100%] mx-auto text-wrap p-5 text-lg md:lg:text-xl lg:text-md bg-gray-600/25 text-justify'>
      
        {truncatedText}
        {textDesc.length > maxLength && (
          <span
            onClick={toggleExpanded}
            className='text-amber-300 cursor-pointer mx-[5px]'
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </span>
        )}
      
    </div>
  )
}

const Header = ({Props}:{Props: HeaderProps}) => {
  return (
    <div className='rounded-2xl overflow-hidden'>
      <div className='relative h-[500px] lg:h-[500px] after:inset-0 after:w-full after:h-full after:absolute after:bg-slate-950/80 after:z-[1]'>
          <video autoPlay loop muted className="absolute w-full h-full top-0 left-0 object-cover ">
            {/* <source src={Props.vidSrc} type='video/mp4' /> */}
            <source src="/videos/video1.webm" type='video/webm'/>
          </video>
          <img
              alt='Header Pic'
              src={Props.imgSrc}
              className='absolute top-0 left-0 w-full h-full object-cover z-[-3]'
          />
          <div 
            className='absolute inset-0 top-[10%] font-caprasimo font-extrabold max-w-[80%] text-5xl md:text-7xl text-gray-950 px-10 z-[2]'
          >
            <svg viewBox="0 0 1200 260" className={`${style.svg}`}>
                  <text x={`50%`} y={`50%`} dy={`0.32rem`} textAnchor="middle" className={`${style.textBody}`}>
                      {Props.headerText}
                  </text>
            </svg>
            {/* {Props.headerText} */}
          </div>
          <div className='absolute left-[50%] top-[45%] text-sm md:text-md lg:text-xl  text-gray-100 text-shadow-2xs text-shadow-amber-900 background:linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet, red); z-[2] '>
            {Props.tagLine}
          </div>
              {/* <p>{headerDescription}</p> */}
            
          
      </div>
      <div className='text-gray-100 z-10'>
        <ReadMore textDesc={Props.description} maxLength={250} />
      </div>
    </div>
  )
}

export default Header;
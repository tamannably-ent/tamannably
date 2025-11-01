import React, { useState } from 'react'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import Link from 'next/link';


type ContactDetails = {
    name: string, 
    mobile: string, 
    href: string, 
    faceBook: string,
    instagram: string,
    email:string
}

type position = {
  grid: string,
  // md: string,
  // lg: string,
  size: string
}


const SocialMedia = ({ContactDetails, position}:{ContactDetails: ContactDetails[], position:position}) => {
  // let columns = [3,5]
  // if(!position) columns = [1,1]

  
  
  return (
    <div className={`grid ${position.grid} gap-2 items-center justify-items-center`}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            
            <FaWhatsapp className={`${position.size} hover:text-green-500 cursor-pointer`} />
            
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {ContactDetails.map((data)=> (
              <DropdownMenuItem
                key={data.name}
              >
                {data.name}
                <Link
                  key={data.name}
                  href={data.href}
                  target='_blank'
                >
                  {data.mobile}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild> 
            <FaFacebookF className={`${position.size}  hover:text-blue-800 cursor-pointer`} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {ContactDetails.map((data)=> (
              <DropdownMenuItem
                key={data.name}
              >
                {/* {data.name} */}
                <Link
                  key={data.name}
                  href={data.faceBook}
                  target='_blank'
                >
                  {data.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <a
          href="https://instagram.com/tamannaenterprises"
          target="_blank"
          rel="noopener noreferrer"
        //   className="flex flex-col items-center justify-center bg-pink-500 hover:bg-pink-600 rounded-xl p-4 transition"
        >
          <FaInstagram className={`${position.size}  hover:text-pink-800 cursor-pointer`} />
          {/* <span className="mt-2 text-sm">Instagram</span> */}
        </a>

        <a
          href="https://linkedin.com/company/tamannaenterprises"
          target="_blank"
          rel="noopener noreferrer"
        //   className="flex flex-col items-center justify-center bg-blue-800 hover:bg-blue-900 rounded-xl p-4 transition"
        >
          <FaLinkedinIn className={`${position.size}  hover:text-gray-500 cursor-pointer`} />
          {/* <span className="mt-2 text-sm">LinkedIn</span> */}
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger asChild> 
            <FaEnvelope className={`${position.size}  hover:text-red-500 cursor-pointer`} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {ContactDetails.map((data)=> (
              <DropdownMenuItem
                key={data.name}
              >
                {data.name} - 
                <Link
                  key={data.name}
                  href={data.email}
                  target='_blank'
                >
                  {data.email}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
  )
}

export default SocialMedia

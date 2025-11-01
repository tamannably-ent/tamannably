import Link from 'next/link'
import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex justify-center items-center text-2xl text-shadow-gray-900 text-shadow-2xs h-[100px]'>
      Click to &nbsp; <hr />
      <Link 
        href='/contactus'
        className='text-red-500'
      > 
        {`Contact Us`}
      </Link>
    </div>
  )
}

export default ContactForm

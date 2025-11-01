import React from 'react'

const ErrorPage = () => {
  return (
    <div className='relative mx-auto my-12 p-20 rounded-2xl border-1 border-red-600 shadow-2xl shadow-amber-500 h-[320px] w-[90%] text-gray-500 dark:text-white'>
        <h1 className='text-2xl lg:text-7xl'>404 - Page / content not found</h1>
        <p className='absolute bottom-0 right-1 p-20'>Please try again later . . .</p>

        <a href="/" className='absolute bottom-0.5 left-[45%] text-[#42ffca] font-stretch-ultra-expanded'>
            Go back to Home
        </a>
    </div>
  )
}

export default ErrorPage

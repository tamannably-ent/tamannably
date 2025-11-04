"use client"

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { navBar } from '@/lib/navbar'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import style from '../app/main.module.css';
import { ModeToggle } from './toggle-theme'

function classNames(...classes: (string | undefined | null | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = () => {

    // const pathName = usePathname();
    // console.log(pathName.slice(1))
    
  return (
    <Disclosure as="nav" className="fixed top-0 z-50 mx-auto w-full bg-navbar justify-items-stretch">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex flex-1 h-16 items-center justify-between w-full">
                <div className="inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-amber-900 hover:bg-amber-700 hover:text-amber-300 focus:ring-2 focus:ring-amber-950 focus:outline-hidden focus:ring-inset">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                        <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                    </DisclosureButton>
                </div>
                {/* <div className='flex flex-1 justify-between items-center md:justify-center'> */}
                    <div  className=" md:w-[120px] relative flex items-center justify-center shrink-0 w-[80%] ">
                        {/* <img 
                            src={" "}
                            alt='Logo'
                            className='h-[48px] w-[120px]'
                        /> */}
                        <svg width={`60px`} height={`60px`} className={`${style.svgLogo}`}>
                            <text x={`50%`} y={`50%`} textAnchor='middle' className={`font-extrabold ${style.textBody}`}>
                                T
                            </text>
                            <text x={`50%`} y={`50%`} dx={`0.5rem`} textAnchor='middle' className={`${style.textBody}`}>
                                E
                            </text>
                        </svg>
                    </div>
                    {/* </div> */}
                <div className='hidden sm:block'>               
                    <div className='relative flex flex-row items-center justify-end space-x-1'>
                    {navBar.map((data,i) => (
                        <div key={i}>
                            <Link
                                href={data.href}
                                aria-current={data.current ? 'page' : undefined}
                                onClick={()=>null}
                                className={classNames(
                                            data.current ? ' text-amber-500' : 'text-amber-200 hover:bg-slate-700 hover:text-amber-500',
                                            ' text-sm font-medium',
                                        )}
                            >
                                <div className='relative text-primary hover:bg-primary hover:text-primary-foreground p-2 px-5 group bg-navbar rounded-md border-slate-800'>
                                    {data.heading}
                                    <div className={`
                                            absolute
                                            translate-y-4                                                 
                                            left-0
                                            cursor-pointer 
                                            bg-background
                                            shadow-2xl
                                            rounded-md 
                                            text-foreground  
                                            opacity-0                                                
                                            z-50 
                                            group-hover:block
                                            group-hover:opacity-100 
                                            transition-opacity 
                                            duration-300 
                                            ease-in-out
                                            hover:shadow-2xl
                                            hover:bg-background
                                            overflow-hidden
                                            hover:overflow-hidden
                                            
                                        `}
                                    >
                                        {data.subheading ?
                                            data.subheading.map((abc,j)=>(
                                                <div key={j}>
                                                    <Link
                                                        href={abc.href}
                                                        onClick={()=>null}
                                                    >
                                                        <div className={`
                                                                            py-2 
                                                                            px-8 
                                                                            hover:bg-primary
                                                                            w-[200px]
                                                                            before:inset-0
                                                                            before:bg-gray-700
                                                                            before:z-[51]
                                                                            overflow-hidden
                                                                            hover:text-primary-foreground
                                                                        `}
                                                        >
                                                            {abc.service}
                                                        </div>
                                                    </Link>
                                                </div>
                                            )) 
                                            
                                            : null
                                        }
                                    </div>
                                </div>
                            </Link>
                        </div>        
                    ))}
                    </div>
                    
                </div>
                <ModeToggle />
            </div>
            <DisclosurePanel className="sm:block">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navBar.map((item, i) => (
                        <DisclosureButton
                            key={item.heading}
                            as= 'a'
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                // item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                // 'block rounded-md px-3 py-2 text-base font-medium',
                                item.current ? ' text-amber-100' : 'text-amber-600 focus:bg-slate-700 focus:text-amber-500',
                                    ' block rounded-md px-3 py-2 text-base font-medium',
                            )}

                        >
                            <>
                                {item.heading}
                                <div key={i}>
                                    {item.subheading ? item.subheading.map((d,j) => (
                                        <Link
                                            key={j}
                                            href={d.href}
                                            onClick={()=>null}
                                        >
                                            <div  className='mx-10 py-1 text-amber-600'>{d.service}</div>
                                        </Link>
                                    )) : null}
                                </div>
                            </>
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </div>
        
    </Disclosure>
  )
}

export default NavBar

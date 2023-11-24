'use client'; 
import { Elsie } from 'next/font/google';
import React from 'react'
import { useEffect, useState } from 'react';


const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 25) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
       window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div  className={`${
        scrolled ? 'bg-blue-500' : 'bg-transparent' // Change to blue when scrolled
      } w-full fixed top-0 z-50 transition-all duration-300 `}>
         <div className=" container mx-auto flex items-center justify-between sm:bg-blue-500">
          <a href="#" className="text-white text-2xl font-bold m-5">Tyler Sackel</a>
          <div className="hidden sm:block space-x-6">
            <a href="#" className="text-white hover:text-gray-300">Home</a>
            <a href="#" className="text-white hover:text-gray-300">About</a>
            <a href="#" className="text-white hover:text-gray-300">Services</a>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
          </div>

          <div className="sm:hidden">
            <button className="text-white hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 m-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            
          </div>
        </div>
     </div>
     
  )
}

export default Navbar
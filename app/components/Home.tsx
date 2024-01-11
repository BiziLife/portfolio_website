'use client';
import React from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-gray-900 flex justify-center items-center">
        <div className="container mx-auto px-4 flex flex-row justify-center items-center">
          <div className="max-w-md text-white ml-8 text-left">
            <h1 className="lg:text-4xl md:text-4xl sm:text-lg font-bold ">Hello Im</h1>
            <h1 className="my-2 lg:text-4xl md:text-4xl sm:text-2xl  font-bold text-green-500">TYLER SACKEL</h1>
            <h2 className="lg:mb-36 lg:text-2xl md:text-white md:text-base sm:text-base sm:mb-32 text-white">I love creating video games</h2>
            <button className="btn bg-blue-600 text-white lg:text-lg lg:w-48 md:text-base md:h-6 md:w-36 hover:bg-slate-800 transform hover:scale-110  transition-transform duration-300" >About me</button>
          </div>
          <div className="hidden lg:flex justify-center max-w-sm rounded-lg shadow-xl ml-32 lg:ml-32 lg:mr-8">
             <Image src="/Me.png" alt="img" width={300} height={300} />
          </div>
          <div className="lg:hidden flex justify-center max-w-sm rounded-lg shadow-xl ml-24">
            <Image src="/Me.png" alt="img" width={230} height={230} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
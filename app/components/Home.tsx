'use client';
import React from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-slate-800 flex justify-center items-center">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-center items-center">
          <div className="max-w-md text-white text-left lg:mr-8">
            <h1 className="text-4xl font-bold mb-4">Hello Im</h1>
            <h1 className="my-4 text-6xl font-bold text-green-500">TYLER SACKEL</h1>
            <h2 className="mb-16 text-xl text-white">I love to program</h2>
            <button className="btn btn-primary bg-blue-600">About Me</button>
          </div>
          <div className="hidden lg:block max-w-sm rounded-lg shadow-xl"> {/* Hide for screens below lg */}
            <Image src={'/Me.png'} alt="img" width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
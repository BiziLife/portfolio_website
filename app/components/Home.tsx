'use client';
import React from 'react'


const Home: React.FC = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-gray-900">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex justify-between items-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">Hello Im</h1>
            <h1 className="mb-5 text-5xl font-bold text-green-400">Tyler Sackel</h1>
            <p className='mb-5'>I&apos;m a student at Liberty University</p>
            <button className="btn btn-primary">About Me</button>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
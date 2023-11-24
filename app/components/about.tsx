'use client';
import React from 'react';

const About: React.FC = () => {
  return (
    <div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">About Me</h1>
            <div className="indicator">
              <span className="indicator-item badge badge-primary">new</span> 
              <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default About;
import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-gray-700">
        <div className="hero-content flex lg:flex-row items-center justify-between">
          <div className="text-white max-w-md">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn bg-blue-600 text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
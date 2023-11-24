import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Home from './components/Home'
import About from './components/about'
import Projects from './components/projects'
import Footer from './components/footer'





const page: React.FC = () => {
  return (
    <div>
      <main className=''>
      <Home />
      <About />
      <Projects />
      <Footer />
      
      </main>
    </div>
  );
};

export default page;


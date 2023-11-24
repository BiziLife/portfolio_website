import React from 'react'
import Home from './components/Home'
import About from './components/about'
import Projects from './components/projects'

const page: React.FC = () => {
  return (
    <div>
      <main>
       <Home />
       <About />
       <Projects />
      </main>
    </div>
  );
};

export default page;


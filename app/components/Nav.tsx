'use client';
import React from 'react'

const Nav = () => {
  return (
    <div>
      <div className='navbar m-0 p-0 fixed top-0 w-full z-50'>
        <div className="navbar bg-slate-800 text-neutral-content">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  text-neutral-content rounded-box w-52">
                  <li><a>Home</a></li>
                  <li><a>About</a></li>
                  <li><a>Projects</a></li>
                </ul>
              </div>
              <a className="btn btn-ghost text-xl">TYLER SACKEL</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Projects</a></li>
              </ul>
            </div>
            <div className="navbar-end">
              <a className="btn bg-blue-600 hover:bg-slate-800 text-white ">Contact Me</a>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Nav
'use client';
import React from 'react'

const about = () => {
  return (
    <div>
        <div className="hero min-h-screen bg-gray-700">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/Me.png" className="max-w-sm rounded-lg shadow-2xl bg-gray-200" />
                <div>
                <h1 className="text-5xl font-bold text-white">Box Office News!</h1>
                <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn bg-blue-600 text-white">Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about
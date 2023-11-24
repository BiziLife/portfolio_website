'use client';
import React from 'react'

const projects = () => {
  return (
    <div>
        <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <h1>Tab content 1</h1>
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <h1>tab2</h1>
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <h1>Tab content 3</h1>
            </div>
        </div>
    </div>
  )
}

export default projects
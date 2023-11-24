'use client';
import React, { useState } from 'react';

const Projects: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<number>(1);

    const handleTabChange = (tabNumber: number) => {
     setSelectedTab(tabNumber);
  };
  return (
    <div>
       <div role="tablist" className="tabs tabs-lifted bg-slate-800">
        <input type="radio" name="my_tabs_2" role="tab"  className="tab bg-slate-600"  aria-label="Tab 1" checked={selectedTab === 1}  onChange={() => handleTabChange(1)} />
        <div role="tabpanel" className="tab-content bg-slate-700 p-6 text-white">
          <h1>Tab content 1</h1>
        </div>

        <input  type="radio" name="my_tabs_2" role="tab" className="tab bg-slate-600" aria-label="Tab 2" checked={selectedTab === 2} onChange={() => handleTabChange(2)} />
        <div role="tabpanel" className="tab-content bg-slate-700 p-6 text-white">
          <h1>Tab content 2</h1>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab bg-slate-600 text-white" aria-label="Tab 3" checked={selectedTab === 3} onChange={() => handleTabChange(3)} />
        <div role="tabpanel" className="tab-content bg-slate-700 p-6 text-white">
          <h1>Tab content 3</h1>
        </div>
      </div>
    </div>
  )
}

export default Projects
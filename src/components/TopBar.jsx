import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import cost from '../assets/search.svg';
import personImage from '../assets/person.svg'; // Add your person image path here

const TopBar = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="w-full h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10">
      {/* Search Bar - Compact size */}
      <div className="w-80">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img src={cost} alt="search" className="h-5 w-5" />
          </span>
          <input
            type="text"
            placeholder="Search product, supplier, order"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="block w-full pl-10 pr-1 py-2 border border-slate-200 rounded-md leading-5 bg-white placeholder-slate-400 text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
          />
        </div>
      </div>

      {/* Right side actions - Bell and Profile */}
      <div className="flex items-center gap-6 ml-8">
        {/* Bell Icon Button */}
        <button className="text-slate-400 hover:text-slate-600 transition-colors p-1 hover:bg-slate-50 rounded-md">
          <Bell className="w-5 h-5" strokeWidth={2} />
        </button>

        {/* Profile Section */}
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          {/* Avatar - Person Image */}
          <img
            src={personImage}
            alt="profile"
            className="w-9 h-9 rounded-full object-cover shadow-sm"
          />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
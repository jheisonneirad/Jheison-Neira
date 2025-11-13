
import React from 'react';

interface HeaderProps {
    onLogoClick: () => void;
}

const FireIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
        <path d="M14.5.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0V1a.5.5 0 0 1 .5-.5" />
        <path d="M12.5 2.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5" />
        <path d="M10.5 4.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
        <path d="m8 16-1.4-1.4c-.4-.4-.4-1.1 0-1.5l6.8-6.8c.4-.4 1.1-.4 1.5 0L16 8" />
        <path d="M14 14c.8 0 1.5.7 1.5 1.5v.5c0 .8-.7 1.5-1.5 1.5h-4c-.8 0-1.5-.7-1.5-1.5v-.5c0-.8.7-1.5 1.5-1.5h4z" />
        <path d="M4 22a2 2 0 0 1-2-2v-3c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1H5" />
        <path d="m18 16 1.4-1.4c.4-.4.4-1.1 0-1.5l-6.8-6.8c-.4-.4-1.1-.4-1.5 0L10 8" />
    </svg>
);


const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={onLogoClick}
          >
            <FireIcon />
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Fire <span className="text-orange-500">Music</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
             <a href="#submit" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-orange-600 hover:bg-orange-700 transition-colors">
                  Submit Demo
              </a>
            <div className="relative">
              <button className="flex items-center gap-2">
                <img
                  src="https://picsum.photos/seed/user/40/40"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full border-2 border-gray-600"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
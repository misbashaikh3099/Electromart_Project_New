
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface NavItem {
  path: string;
  name: string;
}

const navItems: NavItem[] = [
  { path: '/', name: 'Home' },
  { path: '/products', name: 'Products' },
  { path: '/about', name: 'About' },
  { path: '/services', name: 'Services' },
  { path: '/contact', name: 'Contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkStyle = {
    color: '#3b82f6',
    fontWeight: '600',
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
            <i className="fas fa-bolt text-blue-500"></i>
            <span>Electromart</span>
          </NavLink>
          <button className="md:hidden text-2xl text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
          <ul className={`
            md:flex md:items-center md:space-x-8
            ${isMenuOpen ? 'absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 space-y-4' : 'hidden'}
          `}>
            {navItems.map((item) => (
              <li key={item.path} onClick={() => isMenuOpen && setIsMenuOpen(false)}>
                <NavLink 
                  to={item.path} 
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-lg md:text-base"
                  style={({ isActive }) => isActive ? activeLinkStyle : {}}
                  end
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

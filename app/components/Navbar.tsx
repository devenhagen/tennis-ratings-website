'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/rankings', label: 'Rankings', icon: '📊' },
    { href: '/about', label: 'About', icon: 'ℹ️' }
  ];

  return (
    <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Brand */}
          <Link href="/" className="group flex items-center space-x-2 sm:space-x-4 hover:scale-105 transition-all duration-500">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:from-green-600 group-hover:to-blue-600 transition-all duration-500 shadow-lg group-hover:shadow-xl animate-glow">
              <span className="text-lg sm:text-2xl">🎾</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-500">
                Tennis Glicko-2
              </span>
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 -mt-1 font-semibold">
                Advanced Ratings
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex space-x-2 lg:space-x-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative overflow-hidden flex items-center space-x-2 lg:space-x-3 px-4 lg:px-6 py-3 rounded-2xl transition-all duration-500 font-bold text-sm premium-hover ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl shadow-green-500/30'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-800 dark:hover:to-gray-700 hover:text-gray-900 dark:hover:text-white hover:shadow-lg'
                }`}
              >
                <span className="text-lg lg:text-xl group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="font-bold">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group relative overflow-hidden flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 font-bold text-sm ${
                    pathname === item.href
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="font-bold">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

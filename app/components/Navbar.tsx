'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/rankings', label: 'Rankings', icon: '📊' },
    { href: '/about', label: 'About', icon: 'ℹ️' }
  ];

  return (
    <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo/Brand */}
          <Link href="/" className="group flex items-center space-x-4 hover:scale-105 transition-all duration-500">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:from-green-600 group-hover:to-blue-600 transition-all duration-500 shadow-lg group-hover:shadow-xl animate-glow">
              <span className="text-2xl">🎾</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-500">
                Tennis Glicko-2
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 -mt-1 font-semibold">
                Advanced Ratings
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative overflow-hidden flex items-center space-x-3 px-6 py-3 rounded-2xl transition-all duration-500 font-bold text-sm premium-hover ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl shadow-green-500/30 animate-pulse-glow'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-800 dark:hover:to-gray-700 hover:text-gray-900 dark:hover:text-white hover:shadow-lg'
                }`}
              >
                <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="hidden sm:inline font-bold">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

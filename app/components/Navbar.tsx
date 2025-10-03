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
    <nav className="bg-gradient-to-r from-green-600 to-green-700 shadow-lg border-b border-green-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
            <span className="text-lg sm:text-2xl">🎾</span>
            <span className="text-sm sm:text-xl font-bold text-white">
              Tennis Glicko-2
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-0.5 sm:space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors font-medium text-xs sm:text-sm ${
                  pathname === item.href
                    ? 'bg-white text-green-700 shadow-md'
                    : 'text-green-100 hover:bg-green-500 hover:text-white'
                }`}
              >
                <span className="text-sm sm:text-lg">{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">{item.label.charAt(0)}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

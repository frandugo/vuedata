'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-slate-900 shadow-lg fixed w-full top-0 z-50">
      <nav className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            <Image src="/vuedata-logo.png" alt="VueData Logo" width="220" height="120" />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="!text-white hover:text-blue-400 transition">
              Home
            </Link>

            <div className="relative group">
              <button className="!text-white hover:text-blue-400 transition flex items-center">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-slate-700 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="#" className="block px-4 py-3 !text-white hover:bg-slate-600 hover:text-blue-400">
                  Application Services
                </Link>
                <Link href="#" className="block px-4 py-3 !text-white hover:bg-slate-600 hover:text-blue-400">
                  AI / ML Services
                </Link>
                <Link href="#" className="block px-4 py-3 !text-white hover:bg-slate-600 hover:text-blue-400">
                  Analytics and Reporting
                </Link>
                <Link href="#" className="block px-4 py-3 !text-white hover:bg-slate-600 hover:text-blue-400">
                  Digital Marketing
                </Link>
                <Link href="#" className="block px-4 py-3 !text-white hover:bg-slate-600 hover:text-blue-400">
                  Service Management
                </Link>
              </div>
            </div>

            <Link href="#solutions" className="!text-white hover:text-blue-400 transition">
              Solutions
            </Link>

            <div className="relative group">
              <button className="!text-white hover:text-blue-400 transition flex items-center">
                Products
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-slate-700 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="#" className="block px-4 py-3 !text-white hover:bg-slate-600 hover:text-blue-400">
                  DB-DAAS
                </Link>
                <Link href="#" className="block px-4 py-3 !text-white hover:bg-slate-600 hover:text-blue-400">
                  WiseCube Nephos
                </Link>
                <Link href="#" className="block px-4 py-3 !text-white hover:bg-slate-600 hover:text-blue-400">
                  Go-BOSS
                </Link>
                <Link href="#" className="block px-4 py-3 !text-white hover:bg-slate-600 hover:text-blue-400">
                  Compliance Care
                </Link>
              </div>
            </div>

            <Link href="#careers" className="!text-white hover:text-blue-400 transition">
              Careers
            </Link>

            <Link href="#contact" className="!text-white hover:text-blue-400 transition">
              Contact
            </Link>
          </div>

          <button
            className="lg:hidden !text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <Link href="/" className="block py-2 !text-white hover:text-blue-400">
              Home
            </Link>

            <div>
              <button
                onClick={() => toggleDropdown('services')}
                className="w-full text-left py-2 !text-white hover:text-blue-400 flex items-center justify-between"
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'services' && (
                <div className="pl-4">
                  <Link href="#" className="block py-2 !text-white hover:text-blue-400">
                    Application Services
                  </Link>
                  <Link href="#" className="block py-2 !text-white hover:text-blue-400">
                    AI / ML Services
                  </Link>
                  <Link href="#" className="block py-2 !text-white hover:text-blue-400">
                    Analytics and Reporting
                  </Link>
                  <Link href="#" className="block py-2 !text-white hover:text-blue-400">
                    Digital Marketing
                  </Link>
                  <Link href="#" className="block py-2 !text-white hover:text-blue-400">
                    Service Management
                  </Link>
                </div>
              )}
            </div>

            <Link href="#solutions" className="block py-2 !text-white hover:text-blue-400">
              Solutions
            </Link>

            <div>
              <button
                onClick={() => toggleDropdown('products')}
                className="w-full text-left py-2 !text-white hover:text-blue-400 flex items-center justify-between"
              >
                Products
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'products' && (
                <div className="pl-4">
                  <Link href="#" className="block py-2 !text-white hover:text-blue-400">
                    DB-DAAS
                  </Link>
                  <Link href="#" className="block py-2 !text-white hover:text-blue-400">
                    WiseCube Nephos
                  </Link>
                  <Link href="#" className="block py-2 !text-white hover:text-blue-400">
                    Go-BOSS
                  </Link>
                  <Link href="#" className="block py-2 !text-white hover:text-blue-400">
                    Compliance Care
                  </Link>
                </div>
              )}
            </div>

            <Link href="#careers" className="block py-2 !text-white hover:text-blue-400">
              Careers
            </Link>

            <Link href="#contact" className="block py-2 !text-white hover:text-blue-400">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

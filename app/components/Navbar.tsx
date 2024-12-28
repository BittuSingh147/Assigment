'use client'

import { Button } from '@/components/ui/button';
import { Bell, ChevronDown, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'Consulting', description: 'Strategic business consulting services' },
    { name: 'Development', description: 'Custom software development' },
    { name: 'Design', description: 'UI/UX and product design' },
    { name: 'Analytics', description: 'Data analytics and insights' },
  ];

  return (
    <div className="sticky top-0 left-0 right-0 w-full bg-white border-b z-50">
      <div className="w-full px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Left Section */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center ml-10 space-x-4">
              <a href="#" className="text-gray-900 hover:text-[#FFA229] px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center text-gray-900 hover:text-[#FFA229] px-3 py-2 text-sm font-medium transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Our Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg py-2 mt-1">
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 hover:bg-[#FFA229]/5"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a href="#" className="text-gray-900 hover:text-[#FFA229] px-3 py-2 text-sm font-medium transition-colors">
                Blog
              </a>
              
              <a href="#" className="text-gray-900 hover:text-[#FFA229] px-3 py-2 text-sm font-medium transition-colors">
                About us
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-40 pl-8 pr-4 py-1 text-sm border rounded-full focus:outline-none focus:border-[#FFA229]"
              />
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            {/* Notification */}
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-500" />
            </button>

            {/* CTA Button */}
            <Button className="bg-[#FFA229] hover:bg-[#FFA229]/90 text-white">
              Talk to Expert
            </Button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-[#FFA229]/5 rounded-md">
                Home
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-[#FFA229]/5 rounded-md">
                Our Services
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-[#FFA229]/5 rounded-md">
                Blog
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-[#FFA229]/5 rounded-md">
                About us
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
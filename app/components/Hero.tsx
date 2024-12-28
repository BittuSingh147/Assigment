import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import React from 'react'

const Hero = () => {
 
        return (
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600">Google Rating</span>
                      <div className="flex ml-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Your trusted partner<br />
                    for company management
                  </h1>
                  <p className="text-gray-600 mb-8">
                    An online business management platform that helps entrepreneurs and companies manage their organizations effectively.
                  </p>
                  <div className="flex items-center space-x-8 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">4.5+</div>
                      <div className="text-sm text-gray-600">Customer Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">20,000+</div>
                      <div className="text-sm text-gray-600">Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">99.8%</div>
                      <div className="text-sm text-gray-600">Satisfaction Rate</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      Talk An Expert
                    </Button>
                    <Button variant="outline" className="flex items-center">
                      <Search className="mr-2 h-4 w-4" /> See how it works
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="/hero.png" 
                    alt="Hero"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      };
      
  


export default Hero
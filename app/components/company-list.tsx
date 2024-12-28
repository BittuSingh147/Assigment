'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Building2, Globe, Users, Calendar } from 'lucide-react'
import Navbar from './Navbar'
import Hero from './Hero'

type CompanyType = {
  id: number;
  name: string;
  shortDesc: string;
  industry: string;
  founded: number;
  employees: string;
  location: string;
  description: string;
  website: string;
};

const companies: CompanyType[] = [
  {
    id: 1,
    name: "TechCorp Solutions",
    shortDesc: "Leading provider of innovative tech solutions",
    industry: "Technology",
    founded: 2015,
    employees: "500+",
    location: "San Francisco, CA",
    description: "TechCorp Solutions is at the forefront of technological innovation, specializing in AI-driven solutions and cloud computing services that transform businesses.",
    website: "www.techcorp.com"
  },
  {
    id: 2,
    name: "GreenEarth Renewables",
    shortDesc: "Sustainable energy solutions for tomorrow",
    industry: "Renewable Energy",
    founded: 2018,
    employees: "250+",
    location: "Austin, TX",
    description: "GreenEarth Renewables is dedicated to creating sustainable energy solutions that help businesses and communities transition to clean energy sources.",
    website: "www.greenearth.com"
  },
  {
    id: 3,
    name: "HealthPlus Medical",
    shortDesc: "Advanced healthcare technologies",
    industry: "Healthcare",
    founded: 2016,
    employees: "1000+",
    location: "Boston, MA",
    description: "HealthPlus Medical develops cutting-edge medical technologies and solutions that improve patient care and healthcare delivery worldwide.",
    website: "www.healthplus.com"
  }
];

export function Company() {
  const [selectedCompany, setSelectedCompany] = useState<CompanyType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFA229]/20 to-white ">
      <Navbar/>
      <Hero/>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Companies</h1>
          <p className="text-lg text-gray-600">Discover innovative companies shaping the future</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companies.map((company) => (
            <Card 
              key={company.id}
              className="group relative overflow-hidden bg-white hover:shadow-xl transition-all duration-300 cursor-pointer border border-[#FFA229]/20"
              onClick={() => {
                setSelectedCompany(company);
                setIsModalOpen(true);
              }}
            >
              {/* Card Content */}
              <div className="p-6">
                <div className="h-12 w-12 rounded-xl bg-[#FFA229]/10 flex items-center justify-center mb-4 group-hover:bg-[#FFA229] transition-colors duration-300">
                  <Building2 className="h-6 w-6 text-[#FFA229] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{company.name}</h3>
                <p className="text-gray-600 mb-4">{company.shortDesc}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  {company.employees}
                </div>
              </div>
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-[#FFA229]/0 group-hover:bg-[#FFA229]/5 transition-all duration-300" />
            </Card>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[600px] bg-white">
            {selectedCompany && (
              <div className="animate-in zoom-in-95 duration-200">
                <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedCompany.name}
                </DialogTitle>
                
                {/* Company Header */}
                <div className="mb-6 pb-4 border-b border-[#FFA229]/20">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-xl bg-[#FFA229]/10 flex items-center justify-center">
                      <Building2 className="h-8 w-8 text-[#FFA229]" />
                    </div>
                    <div>
                      <p className="text-[#FFA229] text-lg">{selectedCompany.industry}</p>
                      <p className="text-gray-600">{selectedCompany.shortDesc}</p>
                    </div>
                  </div>
                </div>

                {/* Company Details */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-500">Founded</label>
                      <div className="flex items-center mt-1">
                        <Calendar className="h-4 w-4 text-[#FFA229] mr-2" />
                        <span className="text-gray-900">{selectedCompany.founded}</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Location</label>
                      <div className="text-gray-900 mt-1">{selectedCompany.location}</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-500">Employees</label>
                      <div className="flex items-center mt-1">
                        <Users className="h-4 w-4 text-[#FFA229] mr-2" />
                        <span className="text-gray-900">{selectedCompany.employees}</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Website</label>
                      <div className="flex items-center mt-1">
                        <Globe className="h-4 w-4 text-[#FFA229] mr-2" />
                        <a href={`https://${selectedCompany.website}`} className="text-[#FFA229] hover:underline">
                          {selectedCompany.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="text-sm text-gray-500">About</label>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {selectedCompany.description}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Company;
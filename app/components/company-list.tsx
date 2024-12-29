"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Building2,
  Globe,
  Users,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "./Navbar";
import Hero from "./Hero";

type Director = {
  id: number;
  name: string;
  position: string;
  companyId: number;
};

type CompanyType = {
  id: number;
  name: string;
  description: string;
  industry: string;
  founded: number;
  website: string;
  directors: Director[];
};

export function Company() {
  const [companies, setCompanies] = useState<CompanyType[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<CompanyType | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const response = await fetch("/api/companies");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setCompanies(data.companies);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch companies:", error);
        setError("Failed to load companies. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCompanies();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % companies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + companies.length) % companies.length);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFA229]/20 to-white">
        <Navbar />
        <Hero  />
        <div className="max-w-7xl mx-auto p-4">
          <div className="text-center text-red-600">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1C4670]">
      <Navbar />
      <Hero/>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-white text-[32px] font-bold leading-[38.4px]">
            What peoples says about us
          </h1>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFA229]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companies.slice(currentSlide, currentSlide + 3).map((company) => (
              <Card
                key={company.id}
                className="bg-white rounded-[20px] p-8 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => {
                  setSelectedCompany(company);
                  setIsModalOpen(true);
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0">
                      {/* Star Rating */}
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-8 flex-grow">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat aute irure
                    sint amet occaecat cupidatat non proident ea commodo
                    consequat aute irure sint amet occaecat cupidatat non
                    proident
                  </p>

                  <div className="flex items-center">
                    <img
                      src={`https://i.pravatar.cc/150?u=${company.id}`}
                      alt={company.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {company.directors[0]?.name || "Anonymous"}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {company.directors[0]?.position}, {company.name}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {companies.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                Math.floor(currentSlide / 3) === Math.floor(index / 3)
                  ? "w-8 bg-[#FFA229]"
                  : "w-2 bg-white/20"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
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

                <div className="mb-6 pb-4 border-b border-[#FFA229]/20">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-xl bg-[#FFA229]/10 flex items-center justify-center">
                      <Building2 className="h-8 w-8 text-[#FFA229]" />
                    </div>
                    <div>
                      <p className="text-[#FFA229] text-lg">
                        {selectedCompany.industry}
                      </p>
                      <p className="text-gray-600">
                        {selectedCompany.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-500">Founded</label>
                      <div className="flex items-center mt-1">
                        <Calendar className="h-4 w-4 text-[#FFA229] mr-2" />
                        <span className="text-gray-900">
                          {selectedCompany.founded}
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Website</label>
                      <div className="flex items-center mt-1">
                        <Globe className="h-4 w-4 text-[#FFA229] mr-2" />
                        <a
                          href={`https://${selectedCompany.website}`}
                          className="text-[#FFA229] hover:underline"
                        >
                          {selectedCompany.website}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm text-gray-500">Directors</label>
                    {selectedCompany.directors.map((director) => (
                      <div
                        key={director.id}
                        className="flex items-center space-x-2"
                      >
                        <Users className="h-4 w-4 text-[#FFA229]" />
                        <span className="text-gray-900">{director.name}</span>
                        <span className="text-gray-500">
                          - {director.position}
                        </span>
                      </div>
                    ))}
                  </div>
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

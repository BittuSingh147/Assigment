import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

type TestimonialCardProps = {
  description: string;
  name: string;
  position: string;
  company: string;
  id: number;
  onClick: () => void;
};

export function TestimonialCard({
  description,
  name,
  position,
  company,
  id,
  onClick,
}: TestimonialCardProps) {
  return (
    <Card
      className="bg-white rounded-[20px] p-8 cursor-pointer hover:shadow-lg transition-all relative group"
      onClick={onClick}
    >
      {/* Quote Mark */}
      <div className="absolute -top-4 -left-2">
        <Quote className="h-12 w-12 text-[#FFA229]/20 rotate-180" />
      </div>

      <div className="flex flex-col h-full">
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-[#FFA229]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-8 flex-grow relative z-10">
          {description}
        </p>

        <div className="flex items-center">
          <img
            src={`https://i.pravatar.cc/150?u=${id}`}
            alt={name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">
              {position}, {company}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Quote Mark */}
      <div className="absolute -bottom-4 -right-2">
        <Quote className="h-12 w-12 text-[#FFA229]/20" />
      </div>
    </Card>
  );
}
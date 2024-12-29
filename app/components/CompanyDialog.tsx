import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Building2, Globe, Users, Calendar } from "lucide-react";
import type { CompanyType } from "@/app/types/company";

type CompanyDialogProps = {
  company: CompanyType | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CompanyDialog({
  company,
  isOpen,
  onOpenChange,
}: CompanyDialogProps) {
  if (!company) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white rounded-[24px] p-8">
        <div className="animate-in zoom-in-95 duration-200">
          <DialogTitle className="text-3xl font-bold text-gray-900 mb-6">
            {company.name}
          </DialogTitle>

          <div className="mb-8 pb-6 border-b border-[#FFA229]/20">
            <div className="flex items-start space-x-6">
              <div className="h-20 w-20 rounded-2xl bg-[#FFA229]/10 flex items-center justify-center flex-shrink-0">
                <Building2 className="h-10 w-10 text-[#FFA229]" />
              </div>
              <div>
                <p className="text-[#FFA229] text-xl font-semibold mb-2">
                  {company.industry}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {company.description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-500 mb-2 block">
                  Founded
                </label>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-lg bg-[#FFA229]/10 flex items-center justify-center mr-3">
                    <Calendar className="h-5 w-5 text-[#FFA229]" />
                  </div>
                  <span className="text-gray-900 font-medium">
                    {company.founded}
                  </span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 mb-2 block">
                  Website
                </label>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-lg bg-[#FFA229]/10 flex items-center justify-center mr-3">
                    <Globe className="h-5 w-5 text-[#FFA229]" />
                  </div>
                  <a
                    href={`https://${company.website}`}
                    className="text-[#FFA229] hover:underline font-medium"
                  >
                    {company.website}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-500 mb-4 block">
                Directors
              </label>
              <div className="space-y-4">
                {company.directors.map((director) => (
                  <div
                    key={director.id}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-lg bg-[#FFA229]/10 flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-[#FFA229]" />
                    </div>
                    <div>
                      <span className="text-gray-900 font-medium block">
                        {director.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {director.position}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
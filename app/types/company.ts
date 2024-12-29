export type Director = {
    id: number;
    name: string;
    position: string;
    companyId: number;
  };
  
  export type CompanyType = {
    id: number;
    name: string;
    review: string;
    description: string;
    industry: string;
    founded: number;
    website: string;
    directors: Director[];
  };
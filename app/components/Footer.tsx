// app/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Register Karo.
          </p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-white hover:text-[#FFA229]">Privacy Policy</a>
          <a href="#" className="text-white hover:text-[#FFA229]">Terms of Service</a>
          <a href="#" className="text-white hover:text-[#FFA229]">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

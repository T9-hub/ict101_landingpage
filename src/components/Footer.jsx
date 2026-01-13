import React from 'react';
import { Heart, Sparkles, Code2 } from 'lucide-react'; // อย่าลืม npm install lucide-react
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        
        {/* === ส่วนบน: โลโก้และชื่อโรงเรียน === */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Logo & Brand */}
          <div className="flex items-center gap-4">
            {/* กล่องใส่รูป Logo */}
            <div className="w-12 h-12 md:w-16 md:h-16 relative bg-blue-50 rounded-full flex items-center justify-center overflow-hidden border border-blue-100 shadow-sm">
              <img 
                src={assets.logo_ict} // เปลี่ยนเป็น path รูปโลโก้จริงของคุณ
                alt="Uttaradis School Logo" 
                className="w-full h-full object-cover p-1" // p-1 เพื่อเว้นขอบนิดหน่อย
              />
            </div>
            
            <div className="text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                ICT TALENT
              </h3>
              <p className="text-sm text-gray-500 font-medium tracking-wide">
                UTTARADIT SCHOOL
              </p>
            </div>
          </div>

          {/* Social / Contact (Optional - ใส่หลอกไว้ให้ดูเต็ม หรือลบออกได้) */}
          <div className="flex gap-4">
            <a href="https://www.facebook.com/ictutd" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            {/* เพิ่มปุ่มอื่นๆ ตามต้องการ */}
          </div>
        </div>

        {/* เส้นคั่นบางๆ */}
        <div className="border-t border-gray-100 mb-8"></div>

        {/* === ส่วนล่าง: เครดิต === */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-sm text-gray-500">
          
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
            <span>&copy; 2025 ICT TALENT.</span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span>Uttaradit School.</span>
          </div>

          {/* Built By & Powered By */}
          <div className="flex flex-col items-center md:items-end gap-1.5">
            {/* แถวที่ 1: Built by */}
            <p className="flex items-center gap-1.5">
              Built with <Code2 size={14} className="text-blue-500" /> by 
              <span className="font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded text-xs">
                Students ICT 6/9 #68
              </span>
            </p>

            {/* แถวที่ 2: Powered by */}
            <p className="flex items-center gap-1 text-xs opacity-80 flex-wrap justify-center">
              Powered by 
              <span className="flex items-center gap-0.5 text-pink-500 font-medium">
                creativity <Heart size={10} fill="currentColor" />
              </span>
              , 
              <span className="flex items-center gap-0.5 text-purple-500 font-medium">
                AI <Sparkles size={10} />
              </span>
              & 
              <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent ml-1">
                Group ลกโลก
              </span>
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
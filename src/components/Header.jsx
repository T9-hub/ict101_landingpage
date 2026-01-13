
// // export default Header

// // ============================================
// // Header.jsx - Hero Section (หน้าแรก)
// // ============================================
// // Component นี้เป็นส่วนแรกที่ผู้ใช้เห็นเมื่อเข้าเว็บ
// // แสดง: Background Image, Title, Subtitle, CTA Buttons
// // เชื่อมต่อกับ: Navbar (แสดงอยู่ด้านบน), GradientText (animation text)

// // ============================================
// // Header.jsx - Hero Section (หน้าแรก)
// // ============================================
// // Component นี้เป็นส่วนแรกที่ผู้ใช้เห็นเมื่อเข้าเว็บ
// // แสดง: Background Image, Title, Subtitle, CTA Buttons
// // เชื่อมต่อกับ: GradientText (animation text), /success page, Facebook

// import { useMemo } from "react";
// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";
// import GradientText from "./GradientText";


// const Header = () => {
//   const navigate = useNavigate();

//   const backgroundStyle = useMemo(
//     () => ({
//       backgroundImage: `url(${assets.utd_home})`,
//       // เพิ่มความมั่นใจว่า LCP จะโหลดเร็วขึ้นด้วยการใส่ background-color สำรอง
//       backgroundColor: '#1a202c', 
//     }),
//     []
//   );

//   return (
//     <div
//       className="relative min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
//       style={backgroundStyle}
//        loading="lazy" width="800" height="600"
//       id="Header"
//     >
//       {/* เพิ่ม Overlay เล็กน้อยเพื่อให้ Text อ่านง่ายขึ้น (Text Shadow อย่างเดียวอาจไม่พอ) 
//          และช่วยลดความรู้สึก 'กระตุก' ขณะรูปยังโหลดไม่เสร็จ
//       */}
//       <div className="absolute inset-0 bg-black/30 z-0"></div>

//       <div className="container relative z-10 text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        
//         {/* LCP Element: พยายามลดความซับซ้อนของ Animation ในวินาทีแรก */}
//         <GradientText
//           colors={["#f7f7f7", "#FF9FFC", "#0062ff"]}
//           animationSpeed={15}
//           className="text-7xl md:text-8xl font-semibold text-shadow-black "
//         >
//           ICT TALENT
//         </GradientText>

//         <h3 className="text-xl md:text-2xl mt-3.5 tracking-wider text-shadow-black uppercase">
//           Uttaradit School
//         </h3>
// <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center items-center">
    
//     {/* ปุ่มที่ 1 */}
//     <button
//       onClick={() => navigate("/success")}
//       className="group relative w-48 sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 
//                  rounded-xl font-medium text-white shadow-lg transition-all duration-300 active:scale-95"
//     >
//       <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
//         {/* วิธีใส่ SVG เอง: วางโค้ด <svg> ลงไปตรงนี้ได้เลย */}
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//         ทำเนียบ ICT
//       </span>
//     </button>

//     {/* ปุ่มที่ 2 */}
//     <a
//       href="https://www.facebook.com/ictutd"
//       target=""
//       rel="noopener noreferrer"
//       className="group relative w-48 sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3.5 bg-white/10 backdrop-blur-sm
//                  border border-white/40 rounded-xl font-medium text-white transition-all duration-300 active:scale-95"
//     >
//       <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
//         {/* ตัวอย่าง SVG เฟซบุ๊กที่ปรับขนาดตามตัวอักษร */}
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//         </svg>
//         ติดต่อเรา
//       </span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import GradientText from "./GradientText";

const Header = () => {
  const navigate = useNavigate();

  // หน่วง animation นิดนึง ให้ LCP มาก่อน
  const [showAnim, setShowAnim] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowAnim(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="Header"
      className="relative min-h-screen mb-4 w-full overflow-hidden flex items-center"
    >
      {/* ================= LCP IMAGE ================= */}
      <img
        src={assets.utd_home}
        alt="ICT Talent Background"
        width="1920"
        height="1080"
        fetchpriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (เหมือนเดิม) */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* ================= CONTENT ================= */}
      <div className="container relative z-10 text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        
        {/* Title */}
        {showAnim ? (
          <GradientText
            colors={["#f7f7f7", "#FF9FFC", "#0062ff"]}
            animationSpeed={15}
            className="text-7xl md:text-8xl font-semibold text-shadow-black"
          >
            ICT TALENT
          </GradientText>
        ) : (
          // fallback text (ช่วย LCP)
          <h1 className="text-7xl md:text-8xl font-semibold text-shadow-black">
            ICT TALENT
          </h1>
        )}

        <h3 className="text-xl md:text-2xl mt-3.5 tracking-wider text-shadow-black uppercase">
          Uttaradit School
        </h3>

        {/* ================= BUTTONS ================= */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center items-center">
          
          {/* Button 1 */}
          <button
            onClick={() => navigate("/success")}
            className="group relative w-48 sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3.5 
                       bg-gradient-to-r from-blue-600 to-blue-700 
                       rounded-xl font-medium text-white shadow-lg 
                       transition-all duration-300 active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              ทำเนียบ ICT
            </span>
          </button>

          {/* Button 2 */}
          <a
            href="https://www.facebook.com/ictutd"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-48 sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3.5 
                       bg-white/10 backdrop-blur-sm border border-white/40 
                       rounded-xl font-medium text-white 
                       transition-all duration-300 active:scale-95"
          >
            <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              ติดต่อเรา
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;

// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Trophy, ExternalLink } from 'lucide-react';
// // import { assets } from '../assets/assets';
// // import { Link } from 'react-router-dom'; // <--- เพิ่มบรรทัดนี้!!!

// // const SuccessShowcase = () => {
// //   // ข้อมูลจำลอง (Mock Data) สำหรับเทสรูป 1080x1080
// //   const students = [
// //     { name: "นายพัฒนชัย เศวตบรรเจิด", faculty: "เทคโนโลยีสารสนเทศ", university: "มหาวิทยาลัยมหิดล", img:assets.awa_ict1 },
// //     { name: "นางจิรายุ พรมยวน", faculty: "วิทยาลัยศิลปะ สื่อ เเละเทคโนโลยี",  university: "มหาวิทยาลัยเชียงใหม่", img:assets.awa_ict2 },
// //     { name: "นายอรรถวิทย์ พลูใจ", faculty: "วิทยาลัยศิลปะ สื่อ เเละเทคโนโลยี", university: "มหาวิทยาลัยเชียงใหม่", img: assets.awa_ict3  },
// //     { name: "นายอุกฤษฎ์ ตันติศุภรักษ์", faculty: "วิทยาลัยศิลปะ สื่อ เเละเทคโนโลยี", university: "มหาวิทยาลัยเชียงใหม่", img: assets.awa_ict4  },
// //     { name: "นายจักรพันธ์ นามวงษ์", faculty: "วิทยาลัยศิลปะ สื่อ เเละเทคโนโลยี", university: "มหาวิทยาลัยแม่โจ้", img: assets.awa_ict6  },
// //     { name: "นางสาวกนกพิชญา ครุธแก้ว", faculty: "วิทยาลัยศิลปะ สื่อ เเละเทคโนโลยี", university: "มหาวิทยาลัยเชียงใหม่", img: assets.awa_ict7  },
// //     { name: "นางสาวอัญชิสา บุตรจัน", faculty: "บริหารธุรกิจ", university: "มหาวิทยาลัยนเรศวร", img: assets.awa_ict5  },
   
    
// //   ];

// //   return (
// //     <section className="py-24 bg-white">
// //       <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
// //         {/* หัวข้อ Section */}
// //         <div className="text-center max-w-3xl mx-auto mb-16">
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 text-yellow-700 text-sm font-bold mb-6 border border-yellow-100"
// //           >
// //             <Trophy size={16} /> 
// //           </motion.div>
// //           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
// //             ความสำเร็จของ <span className="text-blue-600">ICT TALENT</span>
// //           </h2>
// //           <p className="text-lg text-gray-600 leading-relaxed">
// //             นักเรียนห้องเรียนพิเศษอัจฉริยภาพทางด้านไอซีที <br className="hidden md:block" />
// //             ผ่านการคัดเลือกเข้าศึกษาในระดับอุดมศึกษา <span className="font-bold text-gray-900">ประจำปีการศึกษา 2567</span>
// //           </p>
// //         </div>

// //         {/* Grid รูปภาพ 1:1 */}
// //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
// //           {students.map((student, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: index * 0.1 }}
// //               className="group relative aspect-square rounded-2xl md:rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm border border-gray-100"
// //             >
// //               {/* รูปภาพนักเรียน */}
// //               <img 
// //                 src={student.img} 
// //                 alt={student.name}
// //                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
// //               />

// //               {/* Overlay เมื่อ Hover */}
// //               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 md:p-6">
// //                 <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
// //                   <p className="text-white font-bold text-base md:text-lg mb-3 leading-tight">
// //                     {student.name}
// //                   </p>
// //                   <p className="text-blue-200 text-xs md:text-sm font-medium mb-7">
// //                     {student.faculty}
// //                   </p>
// //                   <p className="text-white/70 text-[10px] md:text-xs flex items-center gap-1">
// //                     {student.university} <ExternalLink size={10} />
// //                   </p>
// //                 </div>
// //               </div>

// //               {/* ป้ายชื่อแบบเรียบ (แสดงตลอดเวลาในจอมือถือ หรือถ้าไม่ Hover) */}
// //               <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md py-2 px-3 rounded-xl shadow-lg md:group-hover:opacity-0 transition-opacity">
// //                  <p className="text-[10px] md:text-xs font-bold text-gray-800 truncate">{student.name}</p>
// //                  <p className="text-[9px] text-blue-600 truncate">{student.university}</p>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* ปุ่มดูทั้งหมด (ถ้ามี) */}
// //        <div className="mt-16 text-center">
// //           {/* 2. เปลี่ยนจาก button เป็น Link */}
// //           <Link 
// //             to="/success" 
// //             onClick={() => window.scrollTo(0, 0)} // ให้เลื่อนขึ้นไปบนสุดของหน้าใหม่
// //             className="inline-block px-8 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-gray-200"
// //           >
// //             ดูทำเนียบรุ่นทั้งหมด
// //           </Link>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default SuccessShowcase;
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Trophy, ExternalLink } from 'lucide-react';
// import { assets } from '../assets/assets';
// import { Link } from 'react-router-dom';
// /**
//  * 1. Data Configuration
//  * ย้ายข้อมูลออกมาข้างนอกเพื่อ Performance ที่ดีกว่า
//  */


// const STUDENTS_DATA = [
//   // --- ล็อตเดิม (ปี 2567) ---
//   { name: "นายพัฒนชัย เศวตบรรเจิด", faculty: "เทคโนโลยีสารสนเทศ", university: "มหาวิทยาลัยมหิดล", img: assets.awa_ict1 },
//   { name: "นางจิรายุ พรมยวน", faculty: "วิทยาลัยศิลปะ สื่อ เเละเทคโนโลยี", university: "มหาวิทยาลัยเชียงใหม่", img: assets.awa_ict2 },
//   { name: "นายอรรถวิทย์ พลูใจ", faculty: "วิทยาลัยศิลปะ สื่อ เเละเทคโนโลยี", university: "มหาวิทยาลัยเชียงใหม่", img: assets.awa_ict3 },
//   { name: "นายอุกฤษฎ์ ตันติศุภรักษ์", faculty: "วิทยาลัยศิลปะ สื่อ เเละเทคโนโลยี", university: "มหาวิทยาลัยเชียงใหม่", img: assets.awa_ict4 },
//   { name: "นายจักรพันธ์ นามวงษ์", faculty: "วิทยาลัยศิลปะ สื่อ เเละเทคโนโลยี", university: "มหาวิทยาลัยแม่โจ้", img: assets.awa_ict6 },
//   { name: "นางสาวกนกพิชญา ครุธแก้ว", faculty: "วิทยาลัยศิลปะ สื่อ เเละเทคโนโลยี", university: "มหาวิทยาลัยเชียงใหม่", img: assets.awa_ict7 },
//   { name: "นางสาวอัญชิสา บุตรจัน", faculty: "บริหารธุรกิจ", university: "มหาวิทยาลัยนเรศวร", img: assets.awa_ict5 },

//   // --- ล็อตใหม่ที่ต้องการเพิ่ม (ตัวอย่าง) ---
//   // ให้คุณเปลี่ยน img: assets.xxx เป็นชื่อไฟล์ที่คุณ import ไว้ใน assets.js นะครับ
//   { name: "ชื่อนักเรียนใหม่ 1", faculty: "คณะวิศวกรรมศาสตร์", university: "จุฬาลงกรณ์มหาวิทยาลัย", img: assets.project1_1 },
//   { name: "ชื่อนักเรียนใหม่ 2", faculty: "คณะวิทยาศาสตร์", university: "มหาวิทยาลัยเกษตรศาสตร์", img: assets.project1_2 },
//   { name: "ชื่อนักเรียนใหม่ 3", faculty: "คณะสถาปัตยกรรมศาสตร์", university: "ม.ศิลปากร", img: assets.project1_3 },
// ];



// const SuccessShowcase = () => {
//   return (
//     <section className="relative py-24 bg-white overflow-hidden">
      
//       {/* === 2. Animated Gradient Pattern (มุมขวาบน) === */}
//       <motion.div
//         animate={{
//           scale: [1, 1.2, 1],
//           x: [0, 30, 0],
//           y: [0, -20, 0],
//           rotate: [0, 45, 0],
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "linear"
//         }}
//         className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 via-indigo-300/20 to-purple-400/20 blur-[80px] rounded-full -z-10"
//       />

//       <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
//         {/* หัวข้อ Section */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 text-yellow-700 text-sm font-bold mb-6 border border-yellow-100"
//           >
//             <Trophy size={16} /> 
//             <span className="uppercase tracking-wider">Achievement</span>
//           </motion.div>
          
//           <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-sans">
//             ความสำเร็จของ <span className="text-blue-600">ICT TALENT</span>
//           </h2>
//           <p className="text-lg text-gray-600 leading-relaxed font-sans">
//             นักเรียนห้องเรียนพิเศษอัจฉริยภาพทางด้านไอซีที <br className="hidden md:block" />
//             ผ่านการคัดเลือกเข้าศึกษาในระดับอุดมศึกษา <span className="font-bold text-gray-900">ประจำปีการศึกษา 2567</span>
//           </p>
//         </div>

//         {/* Grid รูปภาพ 1:1 (รักษาโครงสร้างเดิมตามที่คุณต้องการ) */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//           {STUDENTS_DATA.map((student, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.05 }} // ปรับดีเลย์ให้เร็วขึ้นเล็กน้อย
//               className="group relative aspect-square rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-gray-50 shadow-sm border border-gray-100"
//             >
//               {/* รูปภาพนักเรียน */}
//               <img 
//                 src={student.img} 
//                 alt={student.name}
//                 loading="lazy" // ช่วยเรื่อง Performance
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               {/* Overlay เมื่อ Hover */}
//               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 md:p-6">
//                 <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                   <p className="text-white font-bold text-base md:text-lg mb-2 leading-tight">
//                     {student.name}
//                   </p>
//                   <p className="text-blue-200 text-xs md:text-sm font-medium mb-6.5">
//                     {student.faculty}
//                   </p>
//                   <p className="text-white/70 text-[10px] md:text-xs flex items-center gap-1">
//                     {student.university} <ExternalLink size={10} />
//                   </p>
//                 </div>
//               </div>

//               {/* ป้ายชื่อแบบเรียบ (แสดงเมื่อไม่ Hover) */}
//               <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md py-2 px-3 rounded-xl shadow-lg md:group-hover:opacity-0 transition-opacity duration-300">
//                  <p className="text-[10px] md:text-xs font-bold text-gray-800 truncate">{student.name}</p>
//                  <p className="text-[9px] text-blue-600 truncate">{student.university}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* ปุ่มดูทั้งหมด */}
//         <div className="mt-16 text-center">
//           <Link 
//             to="/success" 
//             onClick={() => window.scrollTo(0, 0)} 
//             className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-gray-200 hover:-translate-y-1"
//           >
//             ดูทำเนียบรุ่นทั้งหมด
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default SuccessShowcase;


import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink, Calendar } from 'lucide-react'; // เพิ่ม Calendar
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

/**
 * 1. Data Configuration
 * จัดโครงสร้างเป็น Object { yearXXXX: [data] }
 */
const SUCCESS_DATA = {
  year2568: [
    { name: "นายพัฒนชัย เศวตบรรเจิด", faculty: "เทคโนโลยีสารสนเทศ", university: "มหาวิทยาลัยมหิดล", img: assets.awa_ict1 },
    { name: "นางจิรายุ พรมยวน", faculty: "วิทยาลัยศิลปะ สื่อ เเละเทคโนโลยี", university: "มหาวิทยาลัยเชียงใหม่", img: assets.awa_ict2 },
    { name: "นายอรรถวิทย์ พลูใจ", faculty: "วิทยาลัยศิลปะ สื่อ เเละเทคโนโลยี", university: "มหาวิทยาลัยเชียงใหม่", img: assets.awa_ict3 },
    { name: "นายอุกฤษฎ์ ตันติศุภรักษ์", faculty: "วิทยาลัยศิลปะ สื่อ เเละเทคโนโลยี", university: "มหาวิทยาลัยเชียงใหม่", img: assets.awa_ict4 },
    { name: "นายจักรพันธ์ นามวงษ์", faculty: "วิทยาลัยศิลปะ สื่อ เเละเทคโนโลยี", university: "มหาวิทยาลัยแม่โจ้", img: assets.awa_ict6 },
    { name: "นางสาวกนกพิชญา ครุธแก้ว", faculty: "วิทยาลัยศิลปะ สื่อ เเละเทคโนโลยี", university: "มหาวิทยาลัยเชียงใหม่", img: assets.awa_ict7 },
    { name: "นางสาวอัญชิสา บุตรจัน", faculty: "บริหารธุรกิจ", university: "มหาวิทยาลัยนเรศวร", img: assets.awa_ict5 },
  ],
  year2567: [
    { name: "ชื่อนักเรียนรุ่น 67", faculty: "เทคโนโลยีสารสนเทศ", university: "มหาวิทยาลัยมหิดล", img: assets.awa_ict1 },
    { name: "ชื่อนักเรียนรุ่น 67", faculty: "วิทยาลัยศิลปะ สื่อ เเละเทคโนโลยี", university: "มหาวิทยาลัยเชียงใหม่", img: assets.awa_ict2 },
    // สามารถเพิ่มข้อมูลคนอื่นๆ ในรุ่น 2567 ต่อได้เลยครับ
  ]
};

const SuccessShowcase = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/10 via-indigo-300/10 to-purple-400/10 blur-[80px] rounded-full -z-10" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* หัวข้อ Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 text-yellow-700 text-sm font-bold mb-6 border border-yellow-100"
          >
            <Trophy size={16} /> 
            <span className="uppercase tracking-wider">Our Success Stories</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-sans">
            ความสำเร็จของ <span className="text-blue-600">ICT TALENT</span>
          </h2>
        </div>

        {/* --- วนลูปแสดงข้อมูลตามปี --- */}
        {Object.entries(SUCCESS_DATA).map(([yearKey, students], groupIndex) => (
          <div key={yearKey} className={groupIndex !== 0 ? "mt-24" : ""}>
            
            {/* Label บอกปีการศึกษา */}
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-blue-600 text-white px-6 py-2 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-blue-200">
                <Calendar size={18} />
                ปีการศึกษา {yearKey.replace('year', '')}
              </div>
              <div className="h-px bg-gray-100 flex-1"></div>
            </div>

            {/* Grid รูปภาพ */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {students.map((student, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative aspect-square rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-gray-50 shadow-sm border border-gray-100"
                >
                  <img 
                    src={student.img} 
                    alt={student.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 md:p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-left">
                      <p className="text-white font-bold text-base md:text-lg mb-1 leading-tight">{student.name}</p>
                      <p className="text-blue-200 text-xs md:text-sm font-medium mb-4">{student.faculty}</p>
                      <p className="text-white/70 text-[10px] md:text-xs flex items-center gap-1 border-t border-white/20 pt-3">
                        {student.university} <ExternalLink size={10} />
                      </p>
                    </div>
                  </div>

                  {/* ป้ายชื่อ (Mobile/Static) */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md py-2 px-3 rounded-xl shadow-lg md:group-hover:opacity-0 transition-opacity duration-300 text-left">
                     <p className="text-[10px] md:text-xs font-bold text-gray-800 truncate">{student.name}</p>
                     <p className="text-[9px] text-blue-600 truncate">{student.university}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* ปุ่มดูทั้งหมด */}
        <div className="mt-20 text-center">
          <Link 
            to="/success" 
            onClick={() => window.scrollTo(0, 0)} 
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-gray-200 hover:-translate-y-1 active:scale-95"
          >
            เปิดดูทำเนียบรุ่นทั้งหมด
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SuccessShowcase;

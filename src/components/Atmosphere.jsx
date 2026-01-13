// import React, { memo } from 'react';
// import { motion } from 'framer-motion'; // เพิ่ม motion เพื่อความลื่นไหล
// import { assets } from '../assets/assets';

// /**
//  * Component สำหรับแสดงภาพแต่ละใบ 
//  * แยกออกมาเพื่อลดภาระการ Re-render และช่วยให้โค้ดสะอาดขึ้น
//  */
// const PhotoItem = memo(({ src, alt, className, delay = 0 }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.6, delay }}
//     className={className}
//   >
//     <img
//       src={src}
//       alt={alt}
//       loading="lazy" // [Performance] ช่วยให้เบราว์เซอร์โหลดเฉพาะรูปที่มองเห็น
//       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//     />
//     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//   </motion.div>
// ));

// const Atmosphere = () => {
//   // ข้อมูลกลุ่มรูปภาพ (ดึงมาจาก assets/assets.js)
//   const photoGroups = [
//     {
//       main: assets.env_ict3,
//       sub: [assets.env_ict1, assets.env_ict2, assets.env_ict1, assets.env_ict2]
//     },
//     {
//       main: assets.env_ict2,
//       sub: [assets.env_ict3, assets.env_ict1, assets.env_ict3, assets.env_ict1]
//     }
//   ];

//   return (
//     <section id="atmosphere" className="py-20 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* --- Header Section --- */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-12">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-sans">
//               บรรยากาศการเรียนรู้
//             </h2>
//             <p className="text-gray-600 text-lg">ภาพรวมของห้องเรียน ICT TALENT</p>
//           </motion.div>
//           <div className="hidden md:block h-px bg-gray-100 w-1/3 mb-4"></div>
//         </div>

//         {/* --- Photo Grid Layout --- */}
//         <div className="space-y-16">
//           {photoGroups.map((group, groupIndex) => (
//             <div key={groupIndex} className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
//               {/* รูปใหญ่ (ฝั่งซ้าย) - สัดส่วน 7/12 */}
//               <div className="md:col-span-7 h-[300px] md:h-[550px] relative group overflow-hidden rounded-[2.5rem] shadow-sm border border-gray-100">
//                 <PhotoItem 
//                   src={group.main} 
//                   alt={`ICT Learning Environment ${groupIndex + 1}`}
//                   className="w-full h-full"
//                 />
//               </div>

//               {/* กลุ่มรูปเล็ก (ฝั่งขวา) - สัดส่วน 5/12 */}
//               <div className="md:col-span-5">
//                 <div className="grid grid-cols-2 gap-4 h-full">
//                   {group.sub.map((src, subIndex) => (
//                     <div 
//                       key={subIndex} 
//                       className="h-[150px] md:h-auto relative group overflow-hidden rounded-[1.5rem] shadow-sm border border-gray-100"
//                     >
//                       <PhotoItem 
//                         src={src} 
//                         alt={`ICT Detail ${groupIndex + 1}-${subIndex + 1}`}
//                         className="w-full h-full"
//                         delay={subIndex * 0.1} // staggered animation (เหลื่อมเวลาโหลด)
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Atmosphere;


import React from 'react';
import { assets } from '../assets/assets';

/**
 * Atmosphere Component
 * แสดงบรรยากาศห้องเรียน แบ่งเป็นเซตละ 5 รูป (1 ใหญ่ 4 เล็ก)
 * เชื่อมโยง: แสดงผลในหน้าหลัก (App.jsx) ส่วนของ ID #atmosphere
 */
const Atmosphere = () => {
  // 1. ข้อมูลรูปภาพ: แยกเป็น Array ของ Object เพื่อจัดการง่าย
  // คุณสามารถเพิ่มข้อมูล ที่ไหน/ทำอะไร ลงใน title และ description ได้เลย
  const photoGroups = [
    {
      title: "งานสัมนาห้องเรียนพิเศษ ICT'",
      description: " โครงการห้องเรียนพิเศษ ICT Talent ชั้นมัธยมศึกษาปีที่ 4-6 จัดโครงการสัมมนาปฏิบัติวิชาการด้านคอมพิวเตอร์ และเทคโนโลยีสารสนเทศ เพื่อเปิดโอกาสให้นักเรียนแลกเปลี่ยนความรู้ประสบการณ์ร่วมกันและเผยแพร่ผลงานวิชาการด้านคอมพิวเตอร์ และเทคโนโลยีสารสนเทศ",
      main: [assets.project1_1],
      sub: [assets.project1_2, assets.project1_3, assets.project1_4, assets.project1_5]
    },
    {
      title: "โครงการ LINK Certified Network Cabling for Engineering : 2025 ",
      description: "เมื่อวันอังคารที่ 28 มกราคม 2568 บริษัท อินเตอร์ลิ้งค์ คอมมิวนิเคชั่น จำกัด (มหาชน) ร่วมกับคณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยราชภัฏอุตรดิตถ์ (ลำรางทุ่งกะโล่) พื่อการฝึกอบรมเชิงปฏิบัติการสร้างเสริมทักษะความรู้ ความเข้าใจ ในระบบเครือข่ายสัญญาณ อุปกรณ์ส่งสัญญาณได้อย่างถูกต้องและมีประสิทธิภาพให้กับนักเรียนโครงการห้องเรียนพิเศษอัจฉริยภาพทางด้านไอซีที (ICT Talent) มัธยมศึกษาปีที่ 5",
      main: [assets.project2_1],
      sub: [assets.project2_2, assets.project2_3, assets.project2_4, assets.project2_5]
    },
    {
      title: "โครงการส่งเสริมและพัฒนาการเรียนรู้ ห้องเรียน ICT โรงเรียนอุตรดิตถ์",
      description: "ทางโครงการส่งเสริมและพัฒนาการเรียนรู้ ได้ให้นักเรียนห้องเรียนพิเศษอัจฉริยภาพทางด้าน ICT โรงเรียนอุตรดิตถ์ ไปสัมผัสประสบการณ์ต่างจังหวัดทุกชั้นปีการศึกษา เพื่อขยายโอกาสทางการศึกษาให้กับนักเรียนได้มีความรู้พื้นฐานเกี่ยวกับวิชาทางด้านเทคโนโลยีสารสนเทศและให้เกิดประสบการณ์จริง เน้นให้นักเรียนได้ค้นหาความสามารถของตัวเอง เพื่อเป็นแนวทางการศึกษาในระดับอุดมศึกษา",
      main: [assets.project3_1],
      sub: [assets.project3_2, assets.project3_3, assets.project3_4, assets.project3_5]
      
    },
    {
      title: "โครงการส่งเสริมและพัฒนาการเรียนรู้ ห้องเรียน ICT โรงเรียนอุตรดิตถ์",
      main: [assets.project3_1],
      sub: [assets.project3_2, assets.project3_3, assets.project3_4, assets.project3_5]
      
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header ส่วนหัวของ Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-sans tracking-tight">
              บรรยากาศการเรียนรู้
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
              สัมผัสสภาพแวดล้อมที่ส่งเสริมความคิดสร้างสรรค์และเทคโนโลยีในแบบ ICT TALENT
            </p>
          </div>
          <div className="hidden md:block h-[2px] bg-blue-600 w-24 mb-4 rounded-full"></div>
        </div>

        {/* รายการกลุ่มรูปภาพ */}
        <div className="space-y-32">
          {photoGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col gap-8">
              
              {/* --- ส่วนหัวข้อของแต่ละเซต (เพิ่มใหม่) --- */}
              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="text-2xl font-bold text-gray-800">{group.title}</h3>
                <p className="text-gray-500 mt-1">{group.description}</p>
              </div>

              {/* ส่วน Grid รูปภาพ */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* รูปภาพหลัก (ด้านซ้าย) - เน้น Performance ด้วย Lazy Loading */}
                <div className="md:col-span-7 aspect-[4/3] md:aspect-auto md:h-[550px] relative group overflow-hidden rounded-3xl shadow-lg">
                  <img
                    src={group.main}
                    alt={group.title}
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Overlay แสงเงาเวลา Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* กลุ่มรูปย่อย 4 รูป (ด้านขวา) */}
                {/* กลุ่มรูปย่อย 4 รูป (ด้านขวา) */}
<div className="md:col-span-5">
  <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full md:h-[550px]">
    {group.sub.map((src, subIndex) => (
      <div 
        key={subIndex}
        className="relative group overflow-hidden rounded-2xl shadow-md border border-gray-100"
      >
        <img
          src={src}
          alt={`${group.title} detail ${subIndex + 1}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    ))}
  </div>
</div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Atmosphere;
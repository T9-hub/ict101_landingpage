// import { motion } from 'framer-motion'; // ใช้ Framer Motion ที่คุณลงไว้
// import { Monitor, Globe, Cpu, Wifi, Smartphone, Video, Database, Mic, Layers, Code, PenTool, Gamepad2, GraduationCap } from 'lucide-react'; 

// // *หมายเหตุ: ต้องลง npm install lucide-react เพื่อใช้ icon สวยๆ (หรือใช้ icon อื่นแทนได้)

// const CurriculumPage = () => {
//   // ข้อมูลรายวิชา (Data Configuration)
//   const curriculumData = [
//     {
//       year: "มัธยมศึกษาปีที่ 4",
//       title: "Foundation of Technology",
//       description: "ปูพื้นฐานฮาร์ดแวร์และนวัตกรรม IoT",
//       color: "bg-blue-50 border-blue-100 text-blue-600",
//       iconColor: "text-blue-500",
//       subjects: [
//         { name: "ซ่อมบำรุงคอมพิวเตอร์", icon: <Monitor size={18} /> },
//         { name: "การเขียนโปรแกรมผ่านอินเตอร์เน็ต", icon: <Globe size={18} /> },
//         { name: "การออกแบบและพัฒนาระบบอัจฉริยะ", icon: <Cpu size={18} /> },
//         { name: "เทคโนโลยี IoT", icon: <Wifi size={18} /> },
//       ]
//     },
//     {
//       year: "มัธยมศึกษาปีที่ 5",
//       title: "Application & Development",
//       description: "สร้างสรรค์แอปพลิเคชันและมัลติมีเดีย",
//       color: "bg-indigo-50 border-indigo-100 text-indigo-600",
//       iconColor: "text-indigo-500",
//       subjects: [
//         { name: "การพัฒนาเว็บแอปพลิเคชัน", icon: <Code size={18} /> },
//         { name: "การพัฒนาแอปพลิเคชันบนมือถือ", icon: <Smartphone size={18} /> },
//         { name: "มัลติมีเดียและแอนิเมชัน", icon: <Video size={18} /> },
//         { name: "เทคโนโลยีการสื่อสารข้อมูล", icon: <Layers size={18} /> },
//       ]
//     },
//     {
//       year: "มัธยมศึกษาปีที่ 6",
//       title: "Advanced Media & Data",
//       description: "นวัตกรรมสื่อดิจิทัลและข้อมูลขนาดใหญ่",
//       color: "bg-violet-50 border-violet-100 text-violet-600",
//       iconColor: "text-violet-500",
//       subjects: [
//         { name: "การผลิตสื่อโฆษณา", icon: <PenTool size={18} /> },
//         { name: "การออกแบบและพัฒนาสื่อนำเสนอ", icon: <Monitor size={18} /> },
//         { name: "เทคโนโลยีการจัดการข้อมูลขนาดใหญ่", icon: <Database size={18} /> },
//         { name: "สัมมนาคอมพิวเตอร์", icon: <Mic size={18} /> },
//       ]
//     }
//   ];

//   // ข้อมูลการศึกษาต่อ
//   const pathways = [
//     { name: "วิทยาการคอมพิวเตอร์", icon: <Code /> },
//     { name: "เทคโนโลยีสารสนเทศ", icon: <Globe /> },
//     { name: "การออกแบบกราฟิก", icon: <PenTool /> },
//     { name: "การออกแบบและสร้างเกม", icon: <Gamepad2 /> },
//     { name: "การออกแบบแอนิเมชัน", icon: <Video /> },
//     { name: "คณะทางด้านสายศิลป์", icon: <GraduationCap /> },
//   ];

//   return (


//     <div className="bg-white min-h-screen text-gray-800 font-sans ">
      
    
//       {/* === Hero Section === */}
//       <section className="pt-20 pb-16 px-4 text-center bg-gradient-to-b from-blue-50/50 to-white">
//                 <div className="absolute inset-0">

//   </div>
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-3xl mx-auto"
//         >
//           <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4 tracking-wider">
//             ACADEMIC ROADMAP
//           </span>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//             หลักสูตรห้องเรียน <span className="text-blue-600">ICT TALENT</span>
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             ออกแบบมาเพื่อพัฒนาทักษะดิจิทัลตั้งแต่พื้นฐานจนถึงระดับมืออาชีพ 
//             เตรียมความพร้อมสู่มหาวิทยาลัยและตลาดงานในอนาคต
//           </p>
//         </motion.div>
//       </section>

//       {/* === Curriculum Grid (M.4 - M.6) === */}
//       <section className="container mx-auto px-4 md:px-6 lg:px-8 mb-24">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {curriculumData.map((level, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
//             >
//               {/* Header ของแต่ละปี */}
//               <div className="mb-8">
//                 <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 ${level.color}`}>
//                   {level.year}
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">{level.title}</h3>
//                 <p className="text-gray-500 text-sm">{level.description}</p>
//               </div>

//               {/* รายวิชา */}
//               <ul className="space-y-4">
//                 {level.subjects.map((subject, subIndex) => (
//                   <li key={subIndex} className="flex items-center gap-4 text-gray-700 group/item">
//                     <div className={`p-2 rounded-lg bg-gray-50 ${level.iconColor} group-hover/item:bg-blue-50 transition-colors`}>
//                       {subject.icon}
//                     </div>
//                     <span className="font-medium">{subject.name}</span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* === Future Pathways Section (แนวทางศึกษาต่อ) === */}
//       <section className="container mx-auto px-4 md:px-6 lg:px-8">
//         <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
//            {/* Decorative Background Blob */}
//            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

//           <div className="relative z-10 text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">เส้นทางสู่ระดับอุดมศึกษา</h2>
//             <p className="text-gray-600">ต่อยอดความรู้สู่คณะและสาขาวิชาชั้นนำ</p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {pathways.map((path, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center gap-3 cursor-default hover:border-blue-200 transition-colors"
//               >
//                 <div className="text-blue-600 bg-blue-50 p-3 rounded-full mb-1">
//                   {path.icon}
//                 </div>
//                 <span className="text-sm font-medium text-gray-800">{path.name}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default CurriculumPage;


import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, Globe, Cpu, Wifi, Smartphone, Video, 
  Database, Mic, Layers, Code, PenTool, Gamepad2, GraduationCap 
} from 'lucide-react';

/** * 1. Data Configuration (ย้ายไว้นอก Component เพื่อลดภาระการ Render)
 * จัดกลุ่มข้อมูลวิชาเรียนแยกตามระดับชั้น
 */
const CURRICULUM_DATA = [
  {
    year: "มัธยมศึกษาปีที่ 4",
    title: "Foundation of Technology",
    description: "ปูพื้นฐานฮาร์ดแวร์และนวัตกรรม IoT",
    color: "bg-blue-50 border-blue-100 text-blue-600",
    iconColor: "text-blue-500",
    subjects: [
      { name: "ซ่อมบำรุงคอมพิวเตอร์", icon: <Monitor size={18} /> },
      { name: "การเขียนโปรแกรมผ่านอินเตอร์เน็ต", icon: <Globe size={18} /> },
      { name: "การออกแบบและพัฒนาระบบอัจฉริยะ", icon: <Cpu size={18} /> },
      { name: "เทคโนโลยี IoT", icon: <Wifi size={18} /> },
    ]
  },
  {
    year: "มัธยมศึกษาปีที่ 5",
    title: "Application & Development",
    description: "สร้างสรรค์แอปพลิเคชันและมัลติมีเดีย",
    color: "bg-indigo-50 border-indigo-100 text-indigo-600",
    iconColor: "text-indigo-500",
    subjects: [
      { name: "การพัฒนาเว็บแอปพลิเคชัน", icon: <Code size={18} /> },
      { name: "การพัฒนาแอปพลิเคชันบนมือถือ", icon: <Smartphone size={18} /> },
      { name: "มัลติมีเดียและแอนิเมชัน", icon: <Video size={18} /> },
      { name: "เทคโนโลยีการสื่อสารข้อมูล", icon: <Layers size={18} /> },
    ]
  },
  {
    year: "มัธยมศึกษาปีที่ 6",
    title: "Advanced Media & Data",
    description: "นวัตกรรมสื่อดิจิทัลและข้อมูลขนาดใหญ่",
    color: "bg-violet-50 border-violet-100 text-violet-600",
    iconColor: "text-violet-500",
    subjects: [
      { name: "การผลิตสื่อโฆษณา", icon: <PenTool size={18} /> },
      { name: "การออกแบบและพัฒนาสื่อนำเสนอ", icon: <Monitor size={18} /> },
      { name: "เทคโนโลยีการจัดการข้อมูลขนาดใหญ่", icon: <Database size={18} /> },
      { name: "สัมมนาคอมพิวเตอร์", icon: <Mic size={18} /> },
    ]
  }
];

const PATHWAYS = [
  { name: "วิทยาการคอมพิวเตอร์", icon: <Code /> },
  { name: "เทคโนโลยีสารสนเทศ", icon: <Globe /> },
  { name: "การออกแบบกราฟิก", icon: <PenTool /> },
  { name: "การออกแบบและสร้างเกม", icon: <Gamepad2 /> },
  { name: "การออกแบบแอนิเมชัน", icon: <Video /> },
  { name: "คณะทางด้านสายศิลป์", icon: <GraduationCap /> },
];

/**
 * Sub-Component: CurriculumCard
 * แสดงผลการ์ดรายวิชาในแต่ละปี
 */
const CurriculumCard = ({ level, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full"
  >
    <div className="mb-8">
      <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 ${level.color}`}>
        {level.year}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{level.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{level.description}</p>
    </div>

    <ul className="space-y-4 mt-auto">
      {level.subjects.map((subject, subIndex) => (
        <li key={subIndex} className="flex items-center gap-4 text-gray-700 group/item">
          <div className={`p-2 rounded-lg bg-gray-50 ${level.iconColor} group-hover/item:bg-blue-100 transition-colors duration-300`}>
            {subject.icon}
          </div>
          <span className="font-medium group-hover/item:text-blue-600 transition-colors">{subject.name}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const CurriculumPage = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans overflow-x-hidden">
      
      {/* 2. Hero Section: อธิบายภาพรวมหลักสูตร */}
      <section className="relative pt-24 pb-20 px-4 text-center">
        {/* Background Blur Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-blue-50/50 blur-[100px] -z-10 rounded-full"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-6 tracking-[0.2em] uppercase">
            Ict Roadmap
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
            หลักสูตรห้องเรียน <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">ICT TALENT</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            บ่มเพาะนักนวัตกรดิจิทัลรุ่นใหม่ ผ่านหลักสูตรที่เข้มข้นทั้งทฤษฎีและปฏิบัติ
          </p>
        </motion.div>
      </section>

      {/* 3. Curriculum Grid: แสดงผลรายวิชา (ลิ้งก์กับ CURRICULUM_DATA) */}
    <section className="container mx-auto px-4 md:px-8 mb-24">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {CURRICULUM_DATA.map((level, index) => (
      <div
        key={index}
        className={`
          ${index === 2 
            ? "sm:col-span-2 sm:flex sm:justify-center lg:col-span-1" 
            : ""}
        `}
      >
        <div className="w-full sm:max-w-md lg:max-w-none">
          <CurriculumCard level={level} index={index} />
        </div>
      </div>
    ))}
  </div>
</section>

      {/* 4. Future Pathways: เส้นทางศึกษาต่อ (เพิ่มความโดดเด่นของ UI) */}
      <section className="container mx-auto px-4 md:px-8 pb-20">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
           {/* Decorative Elements */}
           <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[80px] -mr-40 -mt-40"></div>
           <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[80px] -ml-40 -mb-40"></div>

          <div className="relative z-10 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 italic">FUTURE PATHWAYS</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 text-lg">โอกาสทางการศึกษาที่กว้างไกล</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {PATHWAYS.map((path, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300"
              >
                <div className="text-blue-400 bg-blue-400/10 p-4 rounded-xl">
                  {path.icon}
                </div>
                <span className="text-sm font-semibold text-slate-200 leading-snug">{path.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default CurriculumPage;
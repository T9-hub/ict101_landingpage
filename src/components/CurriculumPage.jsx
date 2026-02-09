import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, X, Monitor, Globe, Cpu, Wifi, Smartphone, Video,
  Database, Mic, Layers, Code, PenTool, Gamepad2, GraduationCap
} from 'lucide-react';

/** * 1. Data Configuration (ย้ายไว้นอก Component เพื่อลดภาระการ Render)
 * จัดกลุ่มข้อมูลวิชาเรียนแยกตามระดับชั้น
 */
const CURRICULUM_DATA = [
  {
    year: "มัธยมศึกษาปีที่ 4",
    title: "Foundation of Technology",
    description: "สร้างพื้นฐานฮาร์ดแวร์และนวัตกรรม IoT",
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
  {
    name: "วิทยาการคอมพิวเตอร์",
    icon: <Code />,
    description: "ศึกษาเกี่ยวกับการคำนวณ การประมวลผลข้อมูล และการวางระบบซอฟต์แวร์ เน้นการเขียนโปรแกรมและอัลกอริทึม",
    careers: ["Software Engineer", "Data Scientist", "System Architect", "AI Developer"]
  },
  {
    name: "เทคโนโลยีสารสนเทศ",
    icon: <Globe />,
    description: "เน้นการประยุกต์ใช้คอมพิวเตอร์และอุปกรณ์โทรคมนาคม เพื่อจัดเก็บ ค้นหา ส่งผ่าน และจัดดำเนินการข้อมูล",
    careers: ["IT Support", "Network Administrator", "System Analyst", "Database Admin"]
  },
  {
    name: "การออกแบบกราฟิก",
    icon: <PenTool />,
    description: "การใช้ศิลปะและเทคโนโลยีในการสื่อสารผ่านภาพ ไม่ว่าจะเป็นสื่อสิ่งพิมพ์ หรือสื่อดิจิทัล",
    careers: ["Graphic Designer", "UX/UI Designer", "Art Director", "Brand Identity Designer"]
  },
  {
    name: "การออกแบบและสร้างเกม",
    icon: <Gamepad2 />,
    description: "เรียนรู้กระบวนการสร้างเกม ตั้งแต่การออกแบบกลไกเกม การเขียนโปรแกรม ไปจนถึงกราฟิกในเกม",
    careers: ["Game Developer", "Level Designer", "Game Artist", "Game Tester"]
  },
  {
    name: "การออกแบบแอนิเมชัน",
    icon: <Video />,
    description: "การสร้างภาพเคลื่อนไหวทางคอมพิวเตอร์ ทั้ง 2D และ 3D สำหรับภาพยนตร์ โฆษณา และสื่อออนไลน์",
    careers: ["3D Modeler", "Animator", "Motion Graphics Artist", "VFX Artist"]
  },
  {
    name: "คณะทางด้านสายศิลป์",
    icon: <GraduationCap />,
    description: "เส้นทางสำหรับผู้ที่สนใจการประยุกต์ใช้เทคโนโลยีกับความคิดสร้างสรรค์ทางศิลปะและมนุษยศาสตร์",
    careers: ["Digital Artist", "Multimedia Artist", "Creative Director", "Content Creator"]
  },
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
  const [selectedPathway, setSelectedPathway] = useState(null);

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
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPathway(path)}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 cursor-pointer h-full group"
              >
                <div className="text-blue-400 bg-blue-400/10 p-4 rounded-xl group-hover:bg-blue-400/20 transition-colors">
                  {path.icon}
                </div>
                <span className="text-sm font-semibold text-slate-200 leading-snug">{path.name}</span>
                <span className="text-[10px] text-blue-300 border border-blue-500/30 px-2 py-1 rounded-full opacity-60 group-hover:opacity-100 transition-opacity">
                  กดดูรายละเอียด
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Pathway Details */}
      <AnimatePresence>
        {selectedPathway && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedPathway(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedPathway(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-800 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  {React.cloneElement(selectedPathway.icon, { size: 40 })}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedPathway.name}</h3>

                <p className="text-gray-600 leading-relaxed mb-8 px-4 text-sm md:text-base">
                  {selectedPathway.description}
                </p>

                <div className="w-full text-left bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b pb-2 border-gray-200 flex items-center gap-2">
                    <GraduationCap size={16} className="text-blue-500" />
                    เส้นทางอาชีพ
                  </h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {selectedPathway.careers && selectedPathway.careers.map((career, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 text-sm bg-white px-4 py-3 rounded-xl border border-gray-100 shadow-sm">
                        <ArrowRight size={14} className="text-blue-500 shrink-0" />
                        <span className="font-medium">{career}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default CurriculumPage;
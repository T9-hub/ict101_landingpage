import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, X, Instagram, Facebook, Mail, Quote, GraduationCap, Circle } from 'lucide-react';
import { leader, vices, departments } from './membersData';
//  อัปจาก member  ไปแก้ในนั้น

// --- Member Modal ---
const MemberModal = ({ member, onClose }) => {
    if (!member) return null;
    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 bg-slate-900/95 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }}
                className="bg-white w-full max-w-5xl rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden relative flex flex-col md:flex-row max-h-[90vh] md:max-h-[95vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-slate-100 hover:bg-pink-500 hover:text-white rounded-full transition-all">
                    <X size={20} />
                </button>

                {/* Left Side: Profile */}
                <div className="w-full md:w-[40%] bg-slate-50 p-6 md:p-8 flex flex-col items-center border-r border-slate-100">
                    <div className="w-32 h-32 md:w-64 md:h-64 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-4 border-white mb-4">
                        {member.img ? <img src={member.img} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400"><User size={60} /></div>}
                    </div>
                    <div className="text-center">
                        <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{member.role}</span>
                        <h2 className="text-xl md:text-3xl font-black text-slate-900 mt-2">{member.name}</h2>
                        <p className="text-pink-500 font-bold text-sm md:text-lg">({member.nickname})</p>
                        
                        <div className="flex gap-3 mt-4 justify-center">
                            <a href="#" className="p-2 bg-white shadow-sm rounded-xl text-blue-600 hover:scale-110 transition-transform"><Facebook size={20}/></a>
                            <a href="#" className="p-2 bg-white shadow-sm rounded-xl text-pink-600 hover:scale-110 transition-transform"><Instagram size={20}/></a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Details */}
                <div className="w-full md:w-[60%] p-6 md:p-12 overflow-y-auto bg-white">
                    <div className="space-y-8">
                        <section>
                            <h3 className="flex items-center gap-2 text-pink-500 font-bold uppercase tracking-tighter mb-2 italic text-sm md:text-base"><Quote size={18}/> Motto</h3>
                            <p className="text-lg md:text-2xl font-medium text-slate-700 leading-relaxed italic">"{member.quote}"</p>
                        </section>

                        <section>
                            <h3 className="flex items-center gap-2 text-slate-900 font-black uppercase tracking-tighter mb-4 text-sm md:text-base"><GraduationCap size={20} className="text-pink-500"/> Education</h3>
                            <div className="space-y-4 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                                {[
                                    { label: "มัธยมศึกษาตอนต้น", val: member.eduHistory.university, active: true },
                                    { label: "มัธยมศึกษาตอนปลาย", val: member.eduHistory.seniorHigh, active: true },
                                    { label: "มหาวิทยาลัย", val: member.eduHistory.juniorHigh, active: true }
                                ].map((edu, idx) => (
                                    <div key={idx} className="pl-8 relative">
                                        <div className={`absolute left-0 top-1.5 w-4 h-4 bg-white border-4 ${edu.active ? 'border-pink-500' : 'border-slate-300'} rounded-full`} />
                                        <h4 className="font-bold text-slate-800 text-sm md:text-base">{edu.label}</h4>
                                        <p className="text-slate-500 text-xs md:text-sm">{edu.val}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// --- Member Card ---
const MemberCard = ({ member, isBig = false, layout = "vertical", onClick }) => {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={onClick}
            className={`cursor-pointer group relative bg-white rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-xl overflow-hidden
                ${layout === "horizontal" 
                    ? "flex flex-row items-center gap-3 p-2 w-full" 
                    : "flex flex-col items-center p-4 md:p-6 w-40 md:w-64"} 
            `}
        >
          <div className={`absolute top-1 right-3 bg-slate-900 text-white 
                ${layout === "horizontal" ? "w-4 h-4 text-[7px]" : "w-5 h-5 md:w-6 md:h-6 text-[8px] md:text-[10px]"} 
                rounded-full flex items-center justify-center font-black z-20 shadow-md 
                group-hover:bg-pink-500 transition-colors border-2 border-white`}
            >
                {member.id}
            </div>
            <div className={`rounded-xl md:rounded-2xl overflow-hidden bg-slate-50 border border-slate-50 transition-transform duration-500 group-hover:scale-105
                ${isBig ? 'w-28 h-28 md:w-48 md:h-48' : layout === "horizontal" ? 'w-12 h-12 md:w-16 md:h-16' : 'w-24 h-24 md:w-40 md:h-40'}
            `}>
                {member.img ? <img src={member.img} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-slate-200"><User size={isBig ? 40 : 20} /></div>}
            </div>
            
            <div className={`mt-3 ${layout === "horizontal" ? "mt-0 text-left flex-1" : "text-center"}`}>
                <h4 className="font-black text-slate-800 text-[12px] md:text-lg leading-tight group-hover:text-pink-600 transition-colors truncate">
                    {member.name}
                </h4>
                <p className="text-[9px] md:text-[10px] text-pink-500 font-black uppercase tracking-widest mt-1">
                    {member.nickname ? `(${member.nickname})` : member.role}
                </p>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-pink-500 transition-all duration-300 group-hover:w-full" />
        </motion.div>
    );
};

// --- Main Page ---
const HallOfFame = () => {
    const [selected, setSelected] = useState(null);

    return (
        /* 1. ตัวคลุมหลัก: ต้องเป็น relative และห้ามใส่ bg ทับ เพื่อให้เห็น Aurora */
        <div className="min-h-screen w-full relative overflow-hidden pt-32 pb-20 px-4">
            
            {/* 2. Background Layer: อยู่แค่ภายใน div นี้เท่านั้น ไม่ไปกวน Footer */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(ellipse 85% 65% at 8% 8%, rgba(175, 109, 255, 0.42), transparent 60%),
                        radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.55), transparent 62%),
                        radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.40), transparent 62%),
                        radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.45), transparent 62%),
                        linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
                    `,
                }}
            />

            {/* 3. เนื้อหาเดิมของคุณทั้งหมด (ครอบด้วย z-10 เพื่อให้อยู่เหนือสี) */}
            <div className="relative z-10">
                <header className="text-center mb-16 md:mb-24">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase mb-4">
                             <span className="text-pink-500 italic tracking-wider  font-serif">ICT</span> 112
                        </h1>
                        <p className="text-slate-400 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-sm">Class Ict • 35 Members</p>
                        <div className="h-1 w-20 md:w-40 bg-slate-900 mx-auto mt-6 rounded-full" />
                    </motion.div>
                </header>

                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col items-center gap-12 md:gap-20">
                        {/* Leader Section */}
                        <div className="relative">
                            <MemberCard member={leader} isBig onClick={() => setSelected(leader)} />
                            <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-20 bg-slate-200" />
                        </div>

                        {/* Vices Section */}
                        <div className="relative w-full max-w-4xl px-4">
                            <div className="hidden md:block absolute top-0 left-1/4 right-1/4 h-0.5 bg-slate-200" />
                            <div className="flex flex-row justify-center md:justify-around gap-4 md:pt-20">
                                {vices.map(v => (
                                    <div key={v.id} className="relative">
                                        <div className="hidden md:block absolute -top-20 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-slate-200" />
                                        <MemberCard member={v} onClick={() => setSelected(v)} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Departments Grid */}
                        <div className="grid grid-cols-2 gap-2 w-full p-2 md:p-3 rounded-[1.5rem] bg-slate-50/50 border border-dashed border-slate-200">

                                    {/* แบบเก่ารูปบีบ */}
                              {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 w-full mt-10"></div> */}
                            {departments.map((dept) => (
                                <div key={dept.id} className="flex flex-col items-center">
                                    <div className={`w-full text-center py-2 md:py-3 rounded-xl mb-6 border-2 ${dept.color} font-black bg-white shadow-sm text-[10px] md:text-xs uppercase tracking-widest`}>
                                        {dept.title}
                                    </div>
                                    <div className="mb-6 relative">
                                        <MemberCard member={dept.head} onClick={() => setSelected(dept.head)} />
                                        <div className="hidden md:block h-10 w-0.5 bg-slate-100 mx-auto mt-4" />
                                    </div>
                                    <div className="flex flex-col gap-3 w-full p-3 md:p-4 rounded-[1.5rem] md:rounded-[2rem] bg-slate-50/50 border border-dashed border-slate-200">
                                        {dept.members.map((m) => (
                                            <MemberCard key={m.id} member={m} layout="horizontal" onClick={() => setSelected(m)} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selected && <MemberModal member={selected} onClose={() => setSelected(null)} />}
            </AnimatePresence>
        </div>
    );
};

export default HallOfFame;


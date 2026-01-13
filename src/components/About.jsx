// ============================================
// About.jsx - เกี่ยวกับเรา Section
// ============================================
// Component นี้แสดงข้อมูลเกี่ยวกับห้องเรียน ICT TALENT
// ประกอบด้วย 2 sections:
// 1. Hero Section - แนะนำห้องเรียนพร้อมรูปภาพ
// 2. Vision & Mission - วิสัยทัศน์และจุดเด่น 3 ประการ
//
// เชื่อมต่อกับ:
// - assets.js: nai_back (รูพื้นหลัง)
// - App.jsx: ถูกเรียกใช้ที่ <div id="about">

import React from 'react'
import { assets } from '../assets/assets'
import { GraduationCap } from "lucide-react";

const AboutPage = () => {
  return (
    // ============================================
    // Main Container
    // ============================================
    // bg-white: พื้นหลังสีขาว
    // text-gray-800: สีตัวอักษรเทาเข้ม (default)
    <div className="bg-white text-gray-800">
      
      {/* ============================================ */}
      {/* Section 1: Hero (ส่วนแนะนำหลัก) */}
      {/* ============================================ */}
      {/* relative: position relative - ใช้เป็น reference สำหรับ absolute children
         overflow-hidden: ซ่อนส่วนที่เกิน (สำหรับ blob decoration)
         pt-16: padding-top 4rem (64px) - เว้นที่สำหรับ navbar
         pb-24: padding-bottom 6rem (96px) - ระยะห่างจาก section ถัดไป */}
      <section className="relative overflow-hidden pt-16 pb-24">
        {/* Inner Container */}
        {/* container mx-auto: จำกัดความกว้าง + จัดกึ่งกลาง
           px-4 sm:px-6 lg:px-8: responsive padding
           flex: flexbox layout
           flex-col-reverse lg:flex-row: 
             - mobile: รูปบน text ล่าง (reverse เพราะใน code text อยู่ก่อน)
             - desktop: text ซ้าย รูปขวา
           items-center: จัดกึ่งกลางแนวตั้ง
           gap-12: ระยะห่าง 3rem (48px) */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
          
          {/* ============================================ */}
          {/* Text Content (ซ้าย/ล่าง) */}
          {/* ============================================ */}
          {/* lg:w-1/2: ครึ่งหนึ่งของพื้นที่ใน desktop
             flex flex-col: วาง children แนวตั้ง
             items-start: จัดชิดซ้าย
             z-10: z-index 10 - อยู่เหนือ decoration */}
          <div className="lg:w-1/2 flex flex-col items-start z-10">
            
            {/* Badge/Tag */}
            {/* inline-block: ให้ span ปรับขนาดตาม content
               py-1 px-3: padding ในแนวตั้ง/นอน
               rounded-full: border-radius เต็ม (เป็นรูปแคปซูล)
               bg-blue-50: พื้นน้ำเงินอ่อนมาก
               text-blue-600: ตัวอักษรน้ำเงิน
               text-sm: font size เล็ก
               tracking-wider: letter-spacing กว้าง
               mb-4: margin-bottom 1rem */}
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4 tracking-wider">
              โรงเรียนอุตรดิตถ์
            </span>
            
            {/* Main Heading */}
            {/* text-4xl md:text-5xl: responsive font size
               - mobile: 2.25rem (36px)
               - md+: 3rem (48px)
               font-bold: ตัวหนา
               text-gray-900: สีเทาเข้มมาก (เกือบดำ)
               leading-tight: line-height แน่น
               mb-6: margin-bottom 1.5rem */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              ห้องเรียน <span className="text-blue-600">ICT TALENT</span>
            </h1>
            
            {/* Description Paragraph */}
            {/* text-lg: font size ใหญ่ขึ้น (1.125rem / 18px)
               text-gray-600: สีเทากลาง
               mb-8: margin-bottom 2rem
               leading-relaxed: line-height กว้าง (อ่านง่าย)
               max-w-xl: ความกว้างสูงสุด 36rem (576px) */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              มุ่งมั่นสร้างสรรค์พื้นที่การเรียนรู้แห่งอนาคต บ่มเพาะทักษะดิจิทัล 
              และส่งเสริมศักยภาพนักเรียนสู่การเป็นผู้นำด้านเทคโนโลยีในยุคศตวรรษที่ 21
            </p>
            
            {/* Decorative Line */}
            {/* h-1: ความสูง 0.25rem (4px)
               w-20: ความกว้าง 5rem (80px)
               bg-blue-600: สีน้ำเงิน
               rounded-full: มุมโค้งเต็ม (เป็นแท่งยาว) */}
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          </div>

          {/* ============================================ */}
          {/* Hero Image (ขวา/บน) */}
          {/* ============================================ */}
          {/* lg:w-1/2: ครึ่งหนึ่งของพื้นที่ใน desktop
             w-full: เต็มความกว้างใน mobile
             relative: ใช้เป็น reference สำหรับ blob decoration */}
          <div className="lg:w-1/2 w-full relative">
            
            {/* Background Blob Decoration */}
            {/* absolute: position absolute - วางทับ
               top-0 right-0: มุมบนขวา
               -z-10: z-index ติดลบ - อยู่ด้านหลังรูป
               translate-x-1/4 -translate-y-1/4: เลื่อนออกไปนอกกรอบนิดหน่อย
               blur-3xl: เบลอมากๆ (24px)
               opacity-30: โปร่งใส 70%
               w-[500px] h-[500px]: ขนาด 500x500px
               bg-blue-200: สีน้ำเงินอ่อน
               rounded-full: กลม
               mix-blend-multiply: blend mode (ผสมสีกับพื้นหลัง)
               
               หลักการ: สร้าง "แสง" สีน้ำเงินโปร่งๆ ด้านหลังรูปเพื่อความสวยงาม */}
            <div className="absolute top-0 right-0 -z-10 translate-x-1/4 -translate-y-1/4 blur-3xl opacity-30 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply"></div>
            
            {/* Main Image */}
            {/* src={assets.nai_back}: รูปภาพจาก assets
               rounded-2xl: border-radius ใหญ่ (16px)
               shadow-xl: เงาใหญ่มาก
               object-cover: ครอบคลุมพื้นที่โดยไม่บิดเบี้ยว (อาจตัดขอบ)
               h-[400px] lg:h-[500px]: ความสูง responsive
               hover:scale-[1.02]: ขยายนิดหน่อยเมื่อ hover (102%)
               transition-transform duration-500 ease-out: animate การขยายใน 500ms */}
            <img
              src={assets.nai_back}
              alt="ICT Talent Classroom Atmosphere"
              className="rounded-2xl shadow-xl object-cover w-full h-[400px] lg:h-[500px] hover:scale-[1.02] transition-transform duration-500 ease-out"
            />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Section 2: Vision & Mission */}
      {/* ============================================ */}
      {/* py-20: padding แนวตั้ง 5rem (80px) บนล่าง
         bg-gray-50: พื้นหลังสีเทาอ่อนมาก (แยกจาก section อื่น) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ============================================ */}
          {/* Header Text (วิสัยทัศน์) */}
          {/* ============================================ */}
          {/* max-w-3xl: ความกว้างสูงสุด 48rem (768px)
             mx-auto: จัดกึ่งกลาง
             text-center: จัดข้อความกึ่งกลาง
             mb-16: margin-bottom 4rem (ระยะห่างจาก cards) */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            {/* Heading */}
            {/* text-3xl: font size 1.875rem (30px)
               font-bold: ตัวหนา
               mb-4: margin-bottom 1rem */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              วิสัยทัศน์ของเรา
            </h2>
            
            {/* Vision Statement */}
            {/* text-lg: font size ใหญ่ขึ้น
               leading-relaxed: line-height กว้าง (อ่านง่าย) */}
            <p className="text-gray-600 text-lg leading-relaxed">
              "เราเชื่อว่าเทคโนโลยีคือเครื่องมือสำคัญในการเปิดโลกการเรียนรู้
              ห้องเรียน ICT TALENT จึงถูกออกแบบมาเพื่อเป็นมากกว่าห้องคอมพิวเตอร์
              แต่เป็นศูนย์กลางแห่งความคิดสร้างสรรค์ และนวัตกรรมสำหรับนักเรียนโรงเรียนอุตรดิตถ์ทุกคน"
            </p>
          </div>

          {/* ============================================ */}
          {/* Feature Cards (จุดเด่น 3 ข้อ) */}
          {/* ============================================ */}
          {/* grid: CSS Grid layout
             grid-cols-1: 1 column ใน mobile
             md:grid-cols-3: 3 columns ตั้งแต่ md (768px) ขึ้นไป
             gap-8: ระยะห่างระหว่าง cards 2rem
             text-center: จัดข้อความกึ่งกลาง */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* ============================================ */}
            {/* Feature Card 1: การเรียนรู้ที่ทันสมัย */}
            {/* ============================================ */}
            {/* bg-white: พื้นหลังขาว
               p-8: padding 2rem ทุกด้าน
               rounded-2xl: มุมโค้งมาก
               shadow-sm: เงาเบาๆ
               border border-gray-100: เส้นขอบบางๆ
               hover:shadow-md: เงาเข้มขึ้นเมื่อ hover
               transition: animate การเปลี่ยนแปลง */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              
              {/* Icon Container */}
              {/* w-14 h-14: ขนาด 3.5rem × 3.5rem (56px)
                 bg-blue-100: พื้นน้ำเงินอ่อน
                 text-blue-600: สีไอคอนน้ำเงิน
                 rounded-xl: มุมโค้ง
                 flex items-center justify-center: จัดไอคอนกึ่งกลาง
                 mx-auto: จัดกึ่งกลางแนวนอน
                 mb-6: margin-bottom 1.5rem */}
             
                {/* SVG Icon: หมวกครู (Education) */}
                {/* xmlns: XML namespace (จำเป็นสำหรับ SVG)
                   fill="none": ไม่เติมสี (แค่เส้นขอบ)
                   viewBox: กำหนดพื้นที่ 24×24
                   strokeWidth: ความหนาเส้น 1.5
                   stroke="currentColor": สีเส้น = สีตัวอักษร (blue-600)
                   w-8 h-8: ขนาดไอคอน 2rem */}
            
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
  <GraduationCap className="w-8 h-8" /></div>

              
              
              {/* Card Title */}
              {/* text-xl: font size 1.25rem (20px)
                 font-semibold: ตัวหนาปานกลาง
                 mb-3: margin-bottom 0.75rem */}
              <h3 className="text-xl font-semibold mb-3">การเรียนรู้ที่ทันสมัย</h3>
              
              {/* Card Description */}
              {/* text-gray-600: สีเทากลาง */}
              <p className="text-gray-600">
                เข้าถึงอุปกรณ์และซอฟต์แวร์ล่าสุด เพื่อการเรียนรู้ที่ไม่สะดุด
              </p>
            </div>
            
            {/* ============================================ */}
            {/* Feature Card 2: พื้นที่แห่งความร่วมมือ */}
            {/* ============================================ */}
            {/* โครงสร้างเหมือน card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                {/* SVG Icon: กลุ่มคน (Collaboration) */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">พื้นที่แห่งความร่วมมือ</h3>
              <p className="text-gray-600">
                ออกแบบมาเพื่อการทำงานกลุ่ม แลกเปลี่ยนความคิด และแก้ปัญหาร่วมกัน
              </p>
            </div>
            
            {/* ============================================ */}
            {/* Feature Card 3: จุดประกายความคิด */}
            {/* ============================================ */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                {/* SVG Icon: ฟ้าผ่า (Innovation/Energy) */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">จุดประกายความคิด</h3>
              <p className="text-gray-600">
                ส่งเสริมให้นักเรียนกล้าคิด กล้าทำ และสร้างสรรค์นวัตกรรมใหม่ๆ
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
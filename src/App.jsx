// ============================================
// App.jsx - Component หลักของเว็บไซต์
// ============================================
// ไฟล์นี้เป็นตัวจัดการ routing และ smooth scroll ทั้งหมด
// เชื่อมต่อกับ components ทั้งหมดและกำหนด route ของแต่ละหน้า

import { useEffect } from 'react'
import Lenis from 'lenis'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

// ============================================
// นำเข้า Components ทั้งหมด
// ============================================

import Navbar from "./components/Navbar"           // เมนูด้านบน (fixed position)
import Header from "./components/Header"           // Hero Section (หน้าแรก)
import About from './components/About'             // ส่วนเกี่ยวกับเรา
import CurriculumPage from "./components/CurriculumPage"  // หลักสูตรการเรียน
import Atmosphere from "./components/Atmosphere"   // บรรยากาศห้องเรียน
import Footer from "./components/Footer"           // ส่วนท้ายเว็บ + ข้อมูลติดต่อ
import SuccessShowcase from "./components/SuccessShowcase"  // แสดงผลงานนักเรียน
import HallOfFame from './components/HallOfFame'   // ทำเนียบคนเก่ง (หน้าแยก)
import FeedbackForm from './components/FeedbackForm'  // ฟอร์มแสดงความคิดเห็น
import SmoothCursor from './components/SmoothCursor'
import DragDropImageUpload from './components/DragDropImageUpload' // Import DragDropImageUpload
// ============================================
// ScrollToTop Component
// ============================================
// หน้าที่: บังคับให้หน้าเว็บเลื่อนขึ้นบนสุดทุกครั้งที่เปลี่ยน route
// ทำงาน: ตรวจจับ pathname เปลี่ยน → scrollTo(0,0)
// ป้องกัน: การที่เปลี่ยนหน้าแล้วยังอยู่ตำแหน่งเดิม
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // ปิด smooth scroll ชั่วคราว
    document.documentElement.style.scrollBehavior = 'auto'

    // เลื่อนไปบนสุดทันที
    window.scrollTo(0, 0)

    // เปิด smooth scroll กลับมา หลังจาก 10ms
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth'
    }, 10)
  }, [pathname]) // ทำงานทุกครั้งที่ pathname เปลี่ยน

  return null
}


// ============================================
// App Component (Main)
// ============================================
const App = () => {

  // ============================================
  // Lenis Smooth Scroll Setup
  // ============================================
  // ทำให้การเลื่อนหน้าเว็บนุ่มนวล (smooth scrolling)
  // ใช้ requestAnimationFrame สำหรับ performance ที่ดี
  useEffect(() => {
    // สร้าง Lenis instance
    const lenis = new Lenis({
      duration: 1.2,  // ระยะเวลาในการเลื่อน (วินาที)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // easing function
      orientation: 'vertical',  // เลื่อนแนวตั้ง
      gestureOrientation: 'vertical',  // รองรับ touch gesture
      smoothWheel: true,  // เลื่อนด้วย mouse wheel แบบนุ่มนวล
      wheelMultiplier: 1,  // ความเร็วการเลื่อน
      smoothTouch: false,  // ปิด smooth ใน mobile (ป้องกัน lag)
      touchMultiplier: 2,  // ความเร็วการเลื่อนบน touch device
    })

    // Update loop สำหรับ Lenis
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Cleanup: ทำลาย Lenis เมื่อ component ถูก unmount
    return () => {
      lenis.destroy()
    }
  }, []) // ทำงานครั้งเดียวตอน mount

  // ============================================
  // JSX Return
  // ============================================
  return (
    <Router>
      {/* Component ที่เลื่อนหน้าขึ้นบนทุกครั้งที่เปลี่ยน route */}
      <ScrollToTop />
      {/* <SmoothCursor /> */}

      <div className="w-full overflow-hidden">
        {/* Navbar แสดงทุกหน้า (fixed ด้านบน) */}
        <Navbar />

        {/* ============================================ */}
        {/* Route Configuration */}
        {/* ============================================ */}
        <Routes>

          {/* ============================================ */}
          {/* หน้าแรก (/) */}
          {/* ============================================ */}
          {/* แสดง: Hero, About, Atmosphere, Curriculum, Success, Contact */}
          {/* id="xxx" ใช้สำหรับ anchor link (#about, #contact) */}
          {/* scroll-mt-20 เพิ่ม margin top 20 (5rem) เพื่อหลบ Navbar */}
          <Route path="/" element={
            <>
              <div id="home">
                <Header />
              </div>

              <div id="about" className="scroll-mt-20">
                <About />
              </div>

              <div id="atmosphere" className="scroll-mt-20">
                <Atmosphere />
              </div>

              <div id="curriculum" className="scroll-mt-20">
                <CurriculumPage />
              </div>

              {/* SuccessShowcase ไม่มี id เพราะไม่ได้ใส่ใน navbar */}


              <div id="successshowcase" className="scroll-mt-20">
                <SuccessShowcase />
              </div>

              <div id="contact" className="scroll-mt-20">
                <Footer />
              </div>
            </>
          } />

          {/* ============================================ */}
          {/* หน้าทำเนียบคนเก่ง (/success) */}
          {/* ============================================ */}
          {/* แสดง: HallOfFame, FeedbackForm, Footer */}
          <Route path="/success" element={
            <>
              <HallOfFame />      {/* แสดงรายชื่อและผลงานนักเรียนดีเด่น */}
              <FeedbackForm />    {/* ฟอร์มรับความคิดเห็น */}
              <Footer />          {/* ส่วนท้ายเว็บ */}
            </>
          } />

          {/* Test Route for Drag & Drop Component */}
          <Route path="/test-upload" element={
            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-20">
              <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
                <h1 className="text-2xl font-bold text-center mb-6">Test Image Upload</h1>
                <DragDropImageUpload />
                <div className="mt-8 text-center">
                  <a href="/" className="text-blue-500 hover:underline">Back to Home</a>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
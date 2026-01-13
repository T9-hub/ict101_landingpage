// ============================================
// Navbar.jsx - Navigation Bar Component
// ============================================
// Component นี้เป็นเมนูนำทางหลักของเว็บไซต์
// แสดงที่ด้านบนสุดของทุกหน้า (fixed position)
// 
// Features:
// - Responsive: Desktop menu + Mobile hamburger menu
// - Scroll Detection: เปลี่ยนสีพื้นหลังเมื่อเลื่อนลง
// - Smooth Navigation: เลื่อนไปยัง section ต่างๆ อย่างนุ่มนวล
// - Mobile Menu: Full-screen overlay menu สำหรับมือถือ
//
// เชื่อมต่อกับ:
// - assets.js: logo, menu icon, cross icon
// - React Router: useNavigate, useLocation (navigation between pages)
// - App.jsx sections: #home, #about, #curriculum, #contact

import { useEffect, useState } from "react"
import { assets } from "../assets/assets"
import { useNavigate, useLocation } from "react-router-dom"

const Navbar = () => {
    // ============================================
    // State Management (การจัดการสถานะ)
    // ============================================
    
    // showMobileMenu: ควบคุมการเปิด/ปิด mobile menu
    // - true = เมนูมือถือเปิด (แสดง full-screen menu)
    // - false = เมนูมือถือปิด (ซ่อน)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    
    // isScrolled: ตรวจสอบว่าหน้าเว็บเลื่อนลงมาแล้วหรือยัง
    // - true = เลื่อนลงมากกว่า 50px → Navbar เปลี่ยนเป็นพื้นขาว
    // - false = อยู่บนสุด → Navbar โปร่งใส
    const [isScrolled, setIsScrolled] = useState(false)
    
    // ============================================
    // React Router Hooks
    // ============================================
    
    // navigate: function สำหรับเปลี่ยนหน้า
    // ตัวอย่าง: navigate('/success') → ไปหน้า /success
    const navigate = useNavigate()
    
    // location: object ที่บอกว่าอยู่หน้าไหน
    // location.pathname = "/", "/success", etc.
    const location = useLocation()

    // ============================================
    // Navigation Links Configuration
    // ============================================
    // Array ของลิงก์ทั้งหมดใน navbar
    // name: ชื่อที่แสดงบนเมนู
    // href: id ของ section ที่จะเลื่อนไป (ต้องตรงกับ id="xxx" ใน App.jsx)
    const navLinks = [
        { name: "หน้าแรก", href: "home" },
        { name: "เกี่ยวกับเรา", href: "about" },
        { name: "หลักสูตร", href: "curriculum" },
        { name: "ทำเนียบคนเก่ง", href: "successshowcase" },
        { name: "ติดต่อ", href: "contact" }
    ]

    // ============================================
    // useEffect #1: Lock Scroll When Mobile Menu Opens
    // ============================================
    // ป้องกันการเลื่อนหน้าเว็บเมื่อเปิด mobile menu
    // 
    // หลักการทำงาน:
    // 1. เมื่อ showMobileMenu = true → ล็อกการ scroll
    // 2. คำนวณความกว้าง scrollbar (เพื่อป้องกันเนื้อหากระโดด)
    // 3. ซ่อน scrollbar ด้วย overflow: hidden
    // 4. เพิ่ม padding-right เท่ากับความกว้าง scrollbar (ชดเชย)
    // 5. เมื่อ showMobileMenu = false → ปลดล็อก
    useEffect(() => {
        if (showMobileMenu) {
            // คำนวณความกว้าง scrollbar
            // window.innerWidth = ความกว้างรวม scrollbar
            // document.documentElement.clientWidth = ความกว้างไม่รวม scrollbar
            // ผลต่าง = ความกว้าง scrollbar (ปกติ ~15-17px)
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
            
            // ล็อก scroll: ซ่อน scrollbar
            document.body.style.overflow = 'hidden'
            
            // ชดเชยด้วย padding เพื่อไม่ให้เนื้อหากระโดด
            document.body.style.paddingRight = `${scrollBarWidth}px`
        } else {
            // ปลดล็อก: คืนค่าเดิม
            document.body.style.overflow = ''
            document.body.style.paddingRight = ''
        }
        
        // Cleanup function: ทำงานเมื่อ component ถูก unmount
        // หรือก่อนที่ useEffect จะทำงานรอบใหม่
        return () => {
            document.body.style.overflow = ''
            document.body.style.paddingRight = ''
        }
    }, [showMobileMenu]) // Dependency: ทำงานใหม่เมื่อ showMobileMenu เปลี่ยน

    // ============================================
    // useEffect #2: Scroll Detection
    // ============================================
    // ตรวจจับการเลื่อนหน้าเว็บเพื่อเปลี่ยนสี navbar
    //
    // หลักการทำงาน:
    // 1. เพิ่ม event listener 'scroll' ให้ window
    // 2. ทุกครั้งที่ user เลื่อนหน้า → เรียก handleScroll
    // 3. ตรวจสอบ window.scrollY (ระยะที่เลื่อนลงมา)
    // 4. ถ้า > 50px → setIsScrolled(true) → navbar เปลี่ยนสี
    // 5. ถ้า <= 50px → setIsScrolled(false) → navbar โปร่งใส
    useEffect(() => {
        // handleScroll: function ที่ทำงานทุกครั้งที่เลื่อน
        // window.scrollY: ระยะทางที่เลื่อนลงมาจากบนสุด (px)
        // > 50: ถ้าเลื่อนลงมามากกว่า 50px
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        
        // เพิ่ม listener
        window.addEventListener('scroll', handleScroll)
        
        // Cleanup: ลบ listener เมื่อ component unmount
        // ป้องกัน memory leak
        return () => window.removeEventListener('scroll', handleScroll)
    }, []) // [] = ทำงานครั้งเดียวตอน mount

    // ============================================
    // Event Handler: Navigation Click
    // ============================================
    // จัดการเมื่อ user คลิกเมนู
    //
    // Parameters:
    // - e: event object (ใช้ preventDefault เพื่อไม่ให้ browser jump)
    // - id: id ของ section ที่จะเลื่อนไป (เช่น "about", "contact")
    //
    // Flow:
    // 1. ป้องกัน default behavior (ไม่ให้ jump ทันที)
    // 2. ปิด mobile menu
    // 3. ปลดล็อก scroll
    // 4. รอ animation ปิดเมนู (300ms)
    // 5. ตรวจสอบว่าอยู่หน้าแรกหรือไม่
    //    - ไม่ใช่ → navigate('/') → รอโหลด → scroll
    //    - ใช่ → scroll ไปยัง section ทันที
    const handleNavClick = (e, id) => {
        // e.preventDefault(): ป้องกัน browser จาก default behavior
        // (คือการ jump ไปยัง #id ทันที ซึ่งไม่ smooth)
        e.preventDefault()
        
        // ปิดเมนูมือถือ (ถ้าเปิดอยู่)
        setShowMobileMenu(false)
        
        // ปลดล็อก body scroll
        document.body.style.overflow = ''
        document.body.style.paddingRight = ''

        // setTimeout: รอให้ mobile menu animation เสร็จก่อน
        // 300ms = ตรงกับ duration-300 ของ transition
        setTimeout(() => {
            // ตรวจสอบว่าอยู่หน้าไหน
            if (location.pathname !== "/") {
                // กรณี: อยู่หน้าอื่น (เช่น /success)
                // 1. navigate ไปหน้าแรก (/)
                navigate("/")
                
                // 2. รอให้หน้าแรกโหลดเสร็จ (100ms)
                setTimeout(() => {
                    // 3. หา element ที่มี id ตรงกับที่ต้องการ
                    const element = document.getElementById(id)
                    if (element) {
                        // 4. เลื่อนไปยัง element นั้น
                        // behavior: 'smooth' = เลื่อนแบบนุ่มนวล (ไม่กระโดด)
                        // block: 'start' = จัดให้ element อยู่ด้านบนของ viewport
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                }, 100)
            } else {
                // กรณี: อยู่หน้าแรกอยู่แล้ว
                // เลื่อนไปยัง section ทันที
                const element = document.getElementById(id)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            }
        }, 300)
    }

    // ============================================
    // JSX Return
    // ============================================
    return (
        // ============================================
        // Main Navbar Container
        // ============================================
        // fixed: position fixed - ติดด้านบนตลอด
        // top-0 left-0: ชิดขอบบน-ซ้าย
        // w-full: ความกว้าง 100%
        // z-50: z-index 50 - อยู่เหนือ content อื่นๆ
        // transition-all duration-300: animate ทุก property ใน 300ms
        //
        // Dynamic classes (ตาม isScrolled):
        // - isScrolled = true → bg-white shadow-md py-3 (พื้นขาว + เงา + padding น้อย)
        // - isScrolled = false → bg-transparent py-5 (โปร่งใส + padding มาก)
        //
        // style: inline CSS สำหรับ font smoothing (ป้องกันตัวอักษรแตก)
        <nav 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
            }`}
            style={{
                WebkitFontSmoothing: 'antialiased',  // Safari, Chrome
                MozOsxFontSmoothing: 'grayscale'     // Firefox
            }}
        >
            {/* ============================================ */}
            {/* Inner Container (Logo + Menu) */}
            {/* ============================================ */}
            {/* container: จำกัดความกว้างตาม breakpoint
               mx-auto: จัดกึ่งกลาง
               flex: flexbox layout
               justify-between: วาง children ชิดซ้าย-ขวา
               items-center: จัดกึ่งกลางแนวตั้ง
               px-6 md:px-20 lg:px-32: responsive padding */}
            <div className="container mx-auto flex justify-between items-center px-6 md:px-20 lg:px-32">
                
                {/* ============================================ */}
                {/* Logo Section */}
                {/* ============================================ */}
                {/* onClick: คลิกโลโก้ → ไปหน้าแรก (scroll to #home)
                   cursor-pointer: แสดงรูปมือเมื่อ hover
                   z-[60]: z-index 60 - สูงกว่า mobile menu
                   select-none: ป้องกันการเลือกข้อความ */}
                <div 
                    className="flex items-center gap-3 cursor-pointer z-[60] select-none"
                    onClick={(e) => handleNavClick(e, 'home')}
                >
                    {/* Logo Image */}
                    {/* w-12 md:w-14: ขนาด 48px (default), 56px (md+) */}
                    <img className="w-12 md:w-14" src={assets.logo_ict} alt="ICT LOGO" />
                    
                    {/* Text Container */}
                    {/* leading-tight: line-height แน่น (ลดระยะห่างบรรทัด) */}
                    <div className="flex flex-col leading-tight">
                        {/* Main Title */}
                        {/* Dynamic color: เปลี่ยนตาม isScrolled
                           - scrolled → น้ำเงินเข้ม (เพราะพื้นขาว)
                           - not scrolled → ขาว (เพราะพื้นมืด) */}
                        <span 
                            className={`font-bold text-lg transition-colors ${
                                isScrolled ? "text-blue-900" : "text-white"
                            }`}
                            style={{
                                WebkitFontSmoothing: 'antialiased',
                                MozOsxFontSmoothing: 'grayscale'
                            }}
                        >
                            ICT TALENT
                        </span>
                        
                        {/* Subtitle */}
                        {/* text-[10px]: custom size 10px (เล็กมาก)
                           font-light: ตัวบาง */}
                        <span 
                            className={`text-[10px] font-light transition-colors ${
                                isScrolled ? "text-blue-600" : "text-blue-200"
                            }`}
                            style={{
                                WebkitFontSmoothing: 'antialiased',
                                MozOsxFontSmoothing: 'grayscale'
                            }}
                        >
                            UTTARADIT SCHOOL
                        </span>
                    </div>
                </div>

                {/* ============================================ */}
                {/* Desktop Menu (ซ่อนในมือถือ) */}
                {/* ============================================ */}
                {/* hidden md:flex: ซ่อนใน mobile, แสดงตั้งแต่ md (768px) ขึ้นไป
                   gap-8: ระยะห่างระหว่างลิงก์ 2rem */}
                <ul 
                    className={`hidden md:flex gap-8 font-medium transition-colors ${
                        isScrolled ? "text-gray-700" : "text-white"
                    }`}
                    style={{
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale'
                    }}
                >
                    {/* Loop ผ่าน navLinks array */}
                    {/* .map(): สร้าง <li> สำหรับแต่ละ link */}
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            {/* href: #xxx (anchor link)
                               onClick: เรียก handleNavClick
                               hover:text-blue-500: สีน้ำเงินเมื่อ hover
                               transition-colors duration-200: animate color ใน 200ms
                               text-sm lg:text-base: responsive font size */}
                            <a 
                                href={`#${link.href}`}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="hover:text-blue-500 transition-colors duration-200 text-sm lg:text-base select-none"
                                style={{
                                    WebkitFontSmoothing: 'antialiased',
                                    MozOsxFontSmoothing: 'grayscale'
                                }}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* ============================================ */}
                {/* Hamburger Button (แสดงเฉพาะมือถือ) */}
                {/* ============================================ */}
                {/* md:hidden: แสดงเฉพาะหน้าจอเล็กกว่า 768px
                   onClick: เปิด mobile menu (setShowMobileMenu(true))
                   active:scale-95: ย่อขนาดเมื่อกด
                   aria-label: ข้อความสำหรับ screen reader */}
                <button 
                    onClick={() => setShowMobileMenu(true)}
                    className="md:hidden p-2 focus:outline-none z-[60] active:scale-95 transition-transform"
                    aria-label="เปิดเมนู"
                >
                    {/* Menu Icon (3 ขีด)
                       invert brightness-0: กลับสี (ดำ→ขาว) เมื่อไม่ scroll
                       เพราะปกติ icon เป็นสีดำ แต่พื้นหลังมืด */}
                    <img 
                        src={assets.menu_icon} 
                      className={`w-7 h-7 transition-all duration-300 ${
                        isScrolled 
                            ? "invert-50"               // เมื่อ Scroll ลงมา (ให้เป็นสีเดิมของไฟล์ เช่น สีดำ)
                            : "invert brightness-0"    // เมื่ออยู่ด้านบนสุด (บังคับให้เป็นสีขาว)
                    }`}
                    alt="Menu"
                    />
                </button>
            </div>

            {/* ============================================ */}
            {/* Mobile Menu Overlay (Background Dimmer) */}
            {/* ============================================ */}
            {/* fixed inset-0: เต็มหน้าจอ
               bg-black/50: สีดำ opacity 50%
               z-[90]: ต่ำกว่า menu (100) แต่สูงกว่า navbar (50)
               
               Dynamic classes:
               - showMobileMenu = true → opacity-100 (มองเห็น)
               - showMobileMenu = false → opacity-0 pointer-events-none (มองไม่เห็น + ไม่คลิกได้)
               
               onClick: คลิก overlay → ปิดเมนู */}
            <div 
                className={`fixed inset-0 bg-black/50 z-[90] md:hidden transition-opacity duration-300 ${
                    showMobileMenu ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setShowMobileMenu(false)}
            />

            {/* ============================================ */}
            {/* Mobile Menu Panel */}
            {/* ============================================ */}
            {/* fixed inset-0: เต็มหน้าจอ
               z-[100]: สูงสุด - อยู่เหนือทุกอย่าง
               flex flex-col: วาง children แนวตั้ง
               
               Animation:
               - translate-x-0: อยู่ตำแหน่งปกติ (เมื่อเปิด)
               - translate-x-full: เลื่อนออกไปทางขวานอกจอ (เมื่อปิด)
               - transition-transform duration-300 ease-out: animate การเลื่อน */}
            <div 
                className={`fixed inset-0 bg-white z-[100] flex flex-col transition-transform duration-300 ease-out md:hidden ${
                    showMobileMenu ? "translate-x-0" : "translate-x-full"
                }`}
                style={{
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale'
                }}
            >
                {/* ============================================ */}
                {/* Header (Logo + Close Button) */}
                {/* ============================================ */}
                {/* border-b: เส้นขอบด้านล่าง (แบ่ง header กับ content) */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-white">
                    {/* Logo */}
                    <div className="flex items-center gap-3 select-none">
                         <img className="w-10" src={assets.logo_ict} alt="Logo" />
                         <span className="font-bold text-gray-800 text-lg">ICT TALENT</span>
                    </div>
                    
                    {/* Close Button (ปุ่ม X) */}
                    {/* onClick: ปิดเมนู */}
                    <button 
                        onClick={() => setShowMobileMenu(false)} 
                        className="p-2 active:scale-95 transition-transform"
                        aria-label="ปิดเมนู"
                    >
                         <img src={assets.cross_icon} className="w-6 h-6" alt="Close" />
                    </button>
                </div>

                {/* ============================================ */}
                {/* Menu Items (ลิงก์ทั้งหมด) */}
                {/* ============================================ */}
                {/* flex-1: ใช้พื้นที่ที่เหลือทั้งหมด (ระหว่าง header กับ footer)
                   justify-center items-center: จัดกึ่งกลางทั้งแนวตั้งและแนวนอน
                   gap-6: ระยะห่างระหว่างลิงก์
                   bg-gradient-to-b from-white to-blue-50/30: gradient นุ่มๆ */}
                <div className="flex-1 flex flex-col justify-center items-center gap-6 px-6 bg-gradient-to-b from-white to-blue-50/30">
                    {/* Loop ผ่าน navLinks */}
                    {navLinks.map((link) => (
                        <a 
                            key={link.href}
                            href={`#${link.href}`}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-2xl font-medium text-gray-700 hover:text-blue-600 active:text-blue-700 transition-colors duration-200 select-none"
                            style={{
                                WebkitFontSmoothing: 'antialiased',
                                MozOsxFontSmoothing: 'grayscale'
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* ============================================ */}
                {/* Footer (Copyright) */}
                {/* ============================================ */}
                {/* border-t: เส้นขอบด้านบน (แบ่ง content กับ footer) */}
                <div className="p-6 text-center text-sm text-gray-500 border-t border-gray-200">
                    <p className="select-none">ICT Talent © 2024</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
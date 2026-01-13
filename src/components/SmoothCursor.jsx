import { useEffect, useRef, useState } from "react"
import { motion, useSpring } from "framer-motion"

const DefaultCursorSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={54}
      viewBox="0 0 50 54"
      fill="none"
      style={{ scale: 0.5 }}
    >
      <path
        d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
        fill="black"
        stroke="white"
        strokeWidth={2}
      />
    </svg>
  )
}

export default function SmoothCursor({
  cursor = <DefaultCursorSVG />,
  springConfig = {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  },
}) {
  const lastMousePos = useRef({ x: 0, y: 0 })
  const velocity = useRef({ x: 0, y: 0 })
  const lastUpdateTime = useRef(Date.now())
  const previousAngle = useRef(0)
  const accumulatedRotation = useRef(0)

  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)

  const rotation = useSpring(0, {
    ...springConfig,
    damping: 60,
    stiffness: 300,
  })

  const scale = useSpring(1, {
    ...springConfig,
    stiffness: 500,
    damping: 35,
  })

  useEffect(() => {
    

    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    
    // ถ้าเป็น Mobile ไม่ต้องรัน Logic ด้านล่าง และคืนค่าปกติ
    if (isMobile) {
      document.body.style.cursor = "auto";
      return; 
    }



    const updateVelocity = (pos) => {
      const now = Date.now()
      const dt = now - lastUpdateTime.current

      if (dt > 0) {
        velocity.current = {
          x: (pos.x - lastMousePos.current.x) / dt,
          y: (pos.y - lastMousePos.current.y) / dt,
        }
      }

      lastMousePos.current = pos
      lastUpdateTime.current = now
    }

    const handleMouseMove = (e) => {
      const pos = { x: e.clientX, y: e.clientY }
      updateVelocity(pos)

      cursorX.set(pos.x)
      cursorY.set(pos.y)

      const speed = Math.hypot(
        velocity.current.x,
        velocity.current.y
      )

      if (speed > 0.1) {
        const angle =
          Math.atan2(velocity.current.y, velocity.current.x) *
            (180 / Math.PI) +
          90

        let diff = angle - previousAngle.current
        if (diff > 180) diff -= 360
        if (diff < -180) diff += 360

        accumulatedRotation.current += diff
        rotation.set(accumulatedRotation.current)
        previousAngle.current = angle

        scale.set(0.95)
        setTimeout(() => scale.set(1), 120)
      }
    }

    document.body.style.cursor = "none"
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.body.style.cursor = "auto"
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])


  // เพิ่ม State หรือเงื่อนไขเพื่อไม่ให้ Render Component บนมือถือ
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  useEffect(() => {
    setIsMobileDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  if (isMobileDevice) return null; // ไม่วาด Cursor ลงในหน้าเว็บเลย

  return (
    <motion.div
      style={{
        position: "fixed",
        left: cursorX,
        top: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        rotate: rotation,
        scale,
        pointerEvents: "none",
        zIndex: 9999,
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {cursor}
    </motion.div>
  )
}

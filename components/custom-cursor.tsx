"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    setIsHidden(false)

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") !== null ||
          target.closest("a") !== null,
      )
    }

    const handleMouseEnter = () => setIsHidden(false)
    const handleMouseLeave = () => setIsHidden(true)

    document.addEventListener("mousemove", updateCursor)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", updateCursor)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${isHidden ? "opacity-0" : "opacity-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Outer glow ring */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-200 ${isPointer ? "w-12 h-12" : "w-8 h-8"}`}
          style={{
            transform: "translate(-50%, -50%)",
            opacity: 0.3,
            filter: "blur(8px)",
          }}
        />

        {/* Middle ring */}
        <div
          className={`absolute rounded-full border-2 border-primary transition-all duration-200 ${isPointer ? "w-10 h-10 border-primary" : "w-6 h-6 border-accent"}`}
          style={{
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
          }}
        />

        {/* Inner dot */}
        <div
          className={`absolute w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-100 ${isPointer ? "scale-150" : "scale-100"}`}
          style={{
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
          }}
        />
      </div>

      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}

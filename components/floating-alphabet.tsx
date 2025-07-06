"use client"

import { useState, useEffect } from "react"
import { alphabets } from "@/lib/data"

interface AlphabetElement {
  id: number
  char: string
  font: string
  left: number
  top: number
  delay: number
  duration: number
}

export function FloatingAlphabet() {
  const [alphabetElements, setAlphabetElements] = useState<AlphabetElement[]>([])

  useEffect(() => {
    const createAlphabet = () => {
      const randomAlphabet = alphabets[Math.floor(Math.random() * alphabets.length)]
      const newElement: AlphabetElement = {
        id: Date.now() + Math.random(),
        char: randomAlphabet.char,
        font: randomAlphabet.font,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 10,
      }

      setAlphabetElements((prev) => [...prev, newElement])

      setTimeout(() => {
        setAlphabetElements((prev) => prev.filter((el) => el.id !== newElement.id))
      }, 15000)
    }

    // Initial alphabets
    for (let i = 0; i < 15; i++) {
      setTimeout(createAlphabet, i * 200)
    }

    // Continuous generation
    const interval = setInterval(createAlphabet, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {alphabetElements.map((element) => (
        <div
          key={element.id}
          className="absolute pointer-events-none text-4xl opacity-20 animate-pulse"
          style={{
            fontFamily: element.font,
            left: `${element.left}%`,
            top: `${element.top}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
            color: "rgba(239, 228, 210, 0.4)",
          }}
        >
          {element.char}
        </div>
      ))}
    </>
  )
}

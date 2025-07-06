"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react"
import { multilingualChars } from "@/lib/chars"

interface FloatingChar {
  id: number
  char: string
  x: number
  y: number
  vx: number
  vy: number
  opacity: number
  maxOpacity: number
  life: number
  maxLife: number
  size: number
}

export function HeroSection() {
  const [floatingChars, setFloatingChars] = useState<FloatingChar[]>([])
  const [displayText, setDisplayText] = useState({
    line1: Array(20).fill(" "), // "Language & Cognition" length
    line2: Array(10).fill(" ")  // "Laboratory" length
  })
  const [contentVisible, setContentVisible] = useState(false)
  const router = useRouter();
  const MIN_CHARS = 50
  const MAX_CHARS = 100
  const SPAWN_RATE = 60 // milliseconds between spawns
  const TOTAL_REVEAL_DURATION_LINE1 = 1500 // 1.5 seconds for first line

  // Size configuration for floating characters
  const MIN_CHAR_SIZE = 1.2 // Minimum size in rem
  const MAX_CHAR_SIZE = 2.5 // Maximum size in rem

  const targetText = {
    line1: "Language & Cognition", // This already has proper spacing
    line2: "Laboratory"
  }
  const LETTER_REVEAL_INTERVAL = TOTAL_REVEAL_DURATION_LINE1 / targetText.line1.length // ms per letter for both lines

  const createChar = useCallback((id?: number): FloatingChar => {
    const x = Math.random() * 90 + 5
    const y = Math.random() * 90 + 5
    const speed = 0.10
    const angle = Math.random() * Math.PI * 2
    const vx = Math.cos(angle) * speed
    const vy = Math.sin(angle) * speed
    const maxOpacity = Math.random() * 0.15 + 0.05
    const maxLife = Math.random() * 180 + 120
    const size = Math.random() * (MAX_CHAR_SIZE - MIN_CHAR_SIZE) + MIN_CHAR_SIZE // Variable size

    return {
      id: id || Date.now() + Math.random(),
      char: multilingualChars[Math.floor(Math.random() * multilingualChars.length)],
      x,
      y,
      vx,
      vy,
      opacity: 0,
      maxOpacity,
      life: 0,
      maxLife,
      size
    }
  }, [])

  const updateChars = useCallback(() => {
    setFloatingChars(prevChars => {
      const updatedChars = prevChars.map(char => {
        const newChar = { ...char }
        newChar.x += newChar.vx
        newChar.y += newChar.vy
        newChar.life += 1
        const lifeProgress = newChar.life / newChar.maxLife

        if (lifeProgress < 0.2) {
          newChar.opacity = (lifeProgress / 0.2) * newChar.maxOpacity
        } else if (lifeProgress > 0.8) {
          newChar.opacity = ((1 - lifeProgress) / 0.2) * newChar.maxOpacity
        } else {
          newChar.opacity = newChar.maxOpacity
        }

        if (newChar.x < -5) newChar.x = 105
        if (newChar.x > 105) newChar.x = -5
        if (newChar.y < -5) newChar.y = 105
        if (newChar.y > 105) newChar.y = -5

        return newChar
      })

      return updatedChars.filter(char => char.life < char.maxLife)
    })
  }, [])

  useEffect(() => {
    const initialChars: FloatingChar[] = []
    for (let i = 0; i < MIN_CHARS; i++) {
      const char = createChar(i)
      char.life = Math.random() * char.maxLife * 0.5
      const lifeProgress = char.life / char.maxLife
      if (lifeProgress < 0.2) {
        char.opacity = (lifeProgress / 0.2) * char.maxOpacity
      } else if (lifeProgress > 0.8) {
        char.opacity = ((1 - lifeProgress) / 0.2) * char.maxOpacity
      } else {
        char.opacity = char.maxOpacity
      }
      initialChars.push(char)
    }
    setFloatingChars(initialChars)

    const animationFrame = setInterval(updateChars, 16)
    const spawnInterval = setInterval(() => {
      setFloatingChars(prevChars => {
        if (prevChars.length < MIN_CHARS) {
          const charsToAdd = Math.min(3, MIN_CHARS - prevChars.length)
          const newChars = []
          for (let i = 0; i < charsToAdd; i++) {
            newChars.push(createChar())
          }
          return [...prevChars, ...newChars]
        } else if (prevChars.length < MAX_CHARS && Math.random() < 0.7) {
          return [...prevChars, createChar()]
        }
        return prevChars
      })
    }, SPAWN_RATE)

    return () => {
      clearInterval(animationFrame)
      clearInterval(spawnInterval)
    }
  }, [createChar, updateChars])

  // Sequential letter-by-letter reveal effect
  useEffect(() => {
    let index = -1
    let isLine1Complete = false

    const revealLetter = () => {
      setDisplayText(prev => {
        const newDisplay = { ...prev }
        if (!isLine1Complete && index < targetText.line1.length) {
          newDisplay.line1[index] = targetText.line1[index]
        } else if (isLine1Complete && index < targetText.line2.length) {
          newDisplay.line2[index] = targetText.line2[index]
        }
        return newDisplay
      })

      // Randomly change unrevealed letters - but preserve spaces
      setDisplayText(prev => {
        const newDisplay = { ...prev }
        if (!isLine1Complete) {
          for (let i = index + 1; i < targetText.line1.length; i++) {
            // Only change non-space characters
            if (targetText.line1[i] !== " ") {
              newDisplay.line1[i] = multilingualChars[Math.floor(Math.random() * multilingualChars.length)]
            } else {
              newDisplay.line1[i] = " " // Preserve spaces
            }
          }
          for (let i = 0; i < targetText.line2.length; i++) {
            if (targetText.line2[i] !== " ") {
              newDisplay.line2[i] = multilingualChars[Math.floor(Math.random() * multilingualChars.length)]
            } else {
              newDisplay.line2[i] = " " // Preserve spaces
            }
          }
        } else {
          for (let i = index + 1; i < targetText.line2.length; i++) {
            if (targetText.line2[i] !== " ") {
              newDisplay.line2[i] = multilingualChars[Math.floor(Math.random() * multilingualChars.length)]
            } else {
              newDisplay.line2[i] = " " // Preserve spaces
            }
          }
        }
        return newDisplay
      })

      index++
      if (!isLine1Complete && index >= targetText.line1.length) {
        isLine1Complete = true
        index = 0 // Reset index for second line
      } else if (isLine1Complete && index >= targetText.line2.length) {
        clearInterval(revealInterval)
        // Ensure final text is exact
        setDisplayText({
          line1: targetText.line1.split(""),
          line2: targetText.line2.split("")
        })
        setContentVisible(true) // Show content immediately after second line
      }
    }

    const revealInterval = setInterval(revealLetter, LETTER_REVEAL_INTERVAL)
    return () => clearInterval(revealInterval)
  }, [])

  return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          {floatingChars.map((char) => (
              <div
                  key={char.id}
                  className="absolute text-white font-serif transition-opacity duration-75 ease-linear"
                  style={{
                    left: `${char.x}%`,
                    top: `${char.y}%`,
                    opacity: char.opacity,
                    fontSize: `${char.size}rem`, // Using variable size
                    transform: 'translate(-50%, -50%)',
                    willChange: 'transform, opacity'
                  }}
              >
                {char.char}
              </div>
          ))}
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight whitespace-nowrap">
              {displayText.line1.map((char, index) => (
                  <span
                      key={`line1-${index}`}
                      className={char !== targetText.line1[index] && char !== " " ? "scale-95 inline-block" : "inline-block"}
                  >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                {displayText.line2.map((char, index) => (
                    <span
                        key={`line2-${index}`}
                        className={char !== targetText.line2[index] && char !== " " ? "scale-85 inline-block" : "inline-block"}
                    >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </h1>
            <div
                className={`transition-all duration-1000 ease-out ${
                    contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Exploring the intersection of language, cognition, and communication at Department of Humanities and Social Sciences, IIT Madras
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                    onClick={() => router.push("/research")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Explore Our Research
                </button>
                <button
                    onClick={() => router.push("/team")}
                    className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Meet the Team
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60" size={24} />
        </div>
      </section>
  )
}
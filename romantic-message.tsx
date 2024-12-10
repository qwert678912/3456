'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function RomanticMessage() {
  const [currentLine, setCurrentLine] = useState(0)
  const lines = [
    "Priyu ❤️...",
    "Tum na bahut cutie ho🥺❤️...",
    "aaj paper bahut acha gya bss tumse vc hogya🥺❤️...",
    "tumhare liye hoga bahut kuch haso mt 🥺...",
    "jo cheez humko perfectly aati h uska use krke bhi tumko khus rkhnge🥺...",
    "ye dil hai na tere liye hi hai pakaa... ",
    "kahi aur nhi jyega promise..",
    "hrr baar hum nye tarike nikalenge tumse ishq ladane ke ...",
    "dubara hasaynge ache se sb hoga❤️...",
    "only yours forever💖...",
    "Effort never dies..."
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % lines.length)
    }, 5000) // Change line every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="https://media.gettyimages.com/id/640985534/photo/pastel-colour-heart-shape-bouquet.jpg?s=612x612&w=0&k=20&c=ZBhETVCKKZSAGLKqj8qAaOAh66kKWzyT2UyzGmc8WPk="
        alt="Pastel colour heart shape bouquet"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 flex items-center justify-center z-10 backdrop-filter backdrop-blur-sm bg-black bg-opacity-30">
        <motion.div
          key={currentLine}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          className="text-black font-bold text-2xl md:text-4xl text-center max-w-3xl px-4"
        >
          {lines[currentLine]}
        </motion.div>
      </div>
      <div className="absolute bottom-4 right-4 text-white text-opacity-70 text-sm z-20">
        For Priyu ❤️
      </div>
    </div>
  )
}


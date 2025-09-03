'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + Math.random() * 30
      })
    }, 200)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-dark flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-32 h-32 border-4 border-primary border-t-transparent rounded-full"
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl font-orbitron font-black">
            <span className="text-primary">D</span>
            <span className="text-accent">F5</span>
          </div>
        </div>
      </div>

      <div className="mt-12 w-64">
        <div className="text-center mb-4">
          <span className="text-2xl font-bold text-white">{Math.min(100, Math.floor(progress))}%</span>
        </div>
        
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <div className="text-center mt-4">
          <p className="text-white/60 animate-pulse">LOADING DEADF5...</p>
        </div>
      </div>

      <div className="absolute bottom-10 text-center">
        <p className="text-white/40 text-sm">Secure blockchain connection</p>
      </div>
    </motion.div>
  )
}
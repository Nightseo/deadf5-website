'use client'

import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div className="flex justify-center mb-8">
            <motion.div
              className="relative"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="text-6xl md:text-8xl font-black font-mono text-primary glitch" data-text="F5">F5</div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-accent opacity-80">REFRESH</div>
            </motion.div>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
            <span className="text-white">The </span>
            <span className="text-primary">Refresh</span>
            <span className="text-white"> Revolution</span>
          </h1>
          
          <div className="text-lg md:text-2xl mb-6 text-yellow-400 font-semibold">
            <Typewriter
              options={{
                strings: [
                  'Press F5 to Moon',
                  'Refresh Your Wallet',
                  'Faster Than Light',
                  'Built on Solana'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 60,
              }}
            />
          </div>

          <motion.p 
            className="text-base md:text-lg text-white/70 mb-8 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Born from the legendary F5 key. Built on Solana for speed. 
            <span className="text-accent">Zero tax. Fair launch. Community driven.</span>
          </motion.p>

          <div className="flex items-center justify-center gap-6 mb-8">
            <a href="https://twitter.com/deadf5coin" target="_blank" className="text-white/60 hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-white/40 cursor-not-allowed">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.56c-.21 2.2-1.1 7.53-1.56 9.98-.19 1.04-.57 1.39-.93 1.42-.8.07-1.41-.53-2.18-1.03-1.21-.79-1.9-1.28-3.07-2.05-1.36-.9-.48-1.39.3-2.2.2-.21 3.7-3.38 3.76-3.67.01-.04.01-.17-.06-.25-.08-.07-.19-.05-.27-.03-.12.02-1.96 1.25-5.54 3.66-.52.36-1.0.54-1.43.53-.47-.01-1.37-.27-2.04-.49-.82-.27-1.48-.42-1.42-.88.03-.24.36-.49.98-.74 3.84-1.67 6.4-2.77 7.68-3.3 3.66-1.52 4.42-1.79 4.92-1.8.11 0 .35.02.51.13.13.09.17.22.19.38-.01.05.01.15 0 .23z"/>
              </svg>
            </a>
            <a href="#" className="text-white/40 cursor-not-allowed">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="https://dexscreener.com"
              target="_blank"
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-primary/40 transition-all transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy $DEADF5
            </motion.a>
            
            <motion.a
              href="https://t.me/deadf5"
              target="_blank"
              className="px-6 py-3 border-2 border-accent text-accent rounded-full font-semibold text-sm hover:bg-accent hover:text-dark transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Community
            </motion.a>
          </div>


          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">1B</div>
              <div className="text-xs text-white/60">SUPPLY</div>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">0%</div>
              <div className="text-xs text-white/60">BUY/SELL TAX</div>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">LIVE</div>
              <div className="text-xs text-white/60">ON PUMP.FUN</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const memes = [
  "Community First",
  "Sustainable Growth",
  "Transparent Development",
  "Long-term Vision",
  "Fair Distribution",
  "Security Focused",
  "Innovation Driven",
  "Decentralized Future"
]

const stats = [
  { label: "HOLDERS", value: "2,500", suffix: "+" },
  { label: "MARKET CAP", value: "$1.2M", suffix: "" },
  { label: "24H VOLUME", value: "$125K", suffix: "" },
  { label: "GROWTH", value: "15", suffix: "%" }
]

export default function MemeSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [currentMeme, setCurrentMeme] = useState(0)
  const [glitchEffect, setGlitchEffect] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchEffect(true)
      setTimeout(() => {
        setCurrentMeme((prev) => (prev + 1) % memes.length)
        setGlitchEffect(false)
      }, 100)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-dark to-accent/10"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-primary">DEAD</span>
            <span className="text-white">F5</span>
            <span className="text-accent"> PROJECT </span>
            <span className="gradient-text">OVERVIEW</span>
          </h2>
          
          <div className={`text-xl md:text-3xl font-semibold mt-6 ${glitchEffect ? 'glitch' : ''}`}>
            <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.5)]">
              {memes[currentMeme]}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-dark/90 backdrop-blur-sm border-2 border-primary/50 rounded-2xl p-6 text-center hover:border-accent transition-all transform hover:scale-105">
                <div className="text-xs text-white/60 mb-1">{stat.label}</div>
                <div className="text-xl md:text-2xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-primary">
                    {stat.value}
                  </span>
                  <span className="text-accent text-xl">{stat.suffix}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <div className="relative">
            <div className="bg-dark/90 backdrop-blur-xl rounded-3xl border border-primary/20 p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-2">
                  <span className="text-white">Why </span>
                  <span className="text-primary">DEADF5</span>
                  <span className="text-white">?</span>
                </h3>
                <p className="text-center text-white/60 text-sm mb-10">Here's what we actually do</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-6 border border-primary/30"
                  >
                    <div className="text-4xl mb-4">⚡</div>
                    <h4 className="text-xl font-bold text-white mb-2">Actually Fast</h4>
                    <p className="text-sm text-white/70">Solana means your transactions go through. No waiting, no BS.</p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-6 border border-accent/30"
                  >
                    <div className="text-4xl mb-4">🎮</div>
                    <h4 className="text-xl font-bold text-white mb-2">Fun Community</h4>
                    <p className="text-sm text-white/70">Active Discord, memes, and people who actually get crypto culture.</p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 rounded-2xl p-6 border border-yellow-500/30"
                  >
                    <div className="text-4xl mb-4">📈</div>
                    <h4 className="text-xl font-bold text-white mb-2">Real Utility</h4>
                    <p className="text-sm text-white/70">Not just another token. Staking, governance, and actual use cases.</p>
                  </motion.div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-bold text-white mb-4 text-center">The Numbers</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">0%</div>
                      <div className="text-xs text-white/60">Buy/Sell Tax</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">100%</div>
                      <div className="text-xs text-white/60">Fair Launch</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">2 Years</div>
                      <div className="text-xs text-white/60">LP Locked</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">5.5M</div>
                      <div className="text-xs text-white/60">Total Supply</div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all"
                  >
                    Get Started Now
                  </motion.button>
                  <p className="mt-4 text-xs text-white/50">Do your own research - NFA</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .glitch {
          animation: glitch 0.2s ease-in-out;
        }
        
        @keyframes glitch {
          0%, 100% {
            text-shadow: 
              0.025em 0 0 rgba(255, 0, 0, 0.75),
              -0.025em -0.025em 0 rgba(0, 255, 255, 0.75);
          }
          25% {
            text-shadow: 
              -0.025em 0.025em 0 rgba(255, 0, 0, 0.75),
              0.025em 0.025em 0 rgba(0, 255, 255, 0.75);
          }
          50% {
            text-shadow: 
              0.025em -0.025em 0 rgba(255, 0, 0, 0.75),
              -0.025em 0.025em 0 rgba(0, 255, 255, 0.75);
          }
          75% {
            text-shadow: 
              -0.025em -0.025em 0 rgba(255, 0, 0, 0.75),
              0.025em -0.025em 0 rgba(0, 255, 255, 0.75);
          }
        }
      `}</style>
    </section>
  )
}
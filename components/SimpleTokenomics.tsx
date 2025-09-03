'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SimpleTokenomics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="tokenomics" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-accent/5 to-dark"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-3">
            <span className="gradient-text">Tokenomics</span>
          </h2>
          <p className="text-base text-white/70 max-w-xl mx-auto">
            Simple and transparent. No hidden fees, no complex mechanisms.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6 mb-8"
          >
            <div className="bg-dark/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 text-center hover:border-primary/40 transition-all">
              <div className="text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-base text-white/80 mb-1">Liquidity Pool</div>
              <div className="text-xs text-white/50">Locked on launch</div>
            </div>
            <div className="bg-dark/50 backdrop-blur-sm border border-accent/20 rounded-2xl p-6 text-center hover:border-accent/40 transition-all">
              <div className="text-5xl font-bold text-accent mb-2">5%</div>
              <div className="text-base text-white/80 mb-1">Treasury</div>
              <div className="text-xs text-white/50">Marketing & Dev</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">1B</div>
                <div className="text-xs text-white/60">Total Supply</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">0%</div>
                <div className="text-xs text-white/60">Buy/Sell Tax</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">FAIR</div>
                <div className="text-xs text-white/60">Launch Type</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-white/50 max-w-md mx-auto">
              Contract: So1anaDeAdF5Contract... 
              <button className="ml-2 text-primary hover:text-accent transition-colors">
                [Copy]
              </button>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
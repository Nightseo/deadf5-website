'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Wallet, ArrowRight, RefreshCw } from 'lucide-react'

const steps = [
  {
    number: "1",
    title: "Get some SOL",
    description: "Buy SOL via exchange or onramp",
    icon: "💰",
    color: "from-purple-500 to-purple-600"
  },
  {
    number: "2",
    title: "Install a wallet",
    description: "Phantom, Backpack, or Solflare",
    icon: "👛",
    color: "from-blue-500 to-blue-600"
  },
  {
    number: "3",
    title: "Swap for $DEADF5",
    description: "Use Pump.fun or your favorite DEX",
    icon: "🔄",
    color: "from-green-500 to-green-600"
  }
]

export default function HowToBuySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="py-16 relative overflow-hidden">
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
            <span className="text-white">💸 HOW TO </span>
            <span className="gradient-text">BUY</span>
          </h2>
          <p className="text-base text-white/70 max-w-xl mx-auto">
            Three simple steps to join the F5 revolution
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex-1 w-full"
              >
                <div className="bg-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all group">
                  <div className="flex items-center mb-4">
                    <div className={`text-4xl mr-4`}>{step.icon}</div>
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/60">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/50">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://jup.ag"
              target="_blank"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/40 transition-all text-center"
            >
              Buy on DEX
            </a>
            <a
              href="https://pump.fun"
              target="_blank"
              className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-dark transition-all text-center"
            >
              View on Pump.fun
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
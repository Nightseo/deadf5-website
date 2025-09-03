'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Coins, Vote, Shield, Zap, Gift, Lock } from 'lucide-react'

const utilities = [
  {
    icon: Coins,
    title: 'Staking Rewards',
    description: 'Earn passive income by staking your DEADF5 tokens',
    status: 'Live',
    color: 'text-green-400'
  },
  {
    icon: Vote,
    title: 'Governance',
    description: 'Vote on project proposals and shape the future',
    status: 'Q2 2025',
    color: 'text-blue-400'
  },
  {
    icon: Shield,
    title: 'DeFi Integration',
    description: 'Use DEADF5 across multiple DeFi platforms',
    status: 'Q3 2025',
    color: 'text-purple-400'
  },
  {
    icon: Zap,
    title: 'Payment Solution',
    description: 'Fast peer-to-peer transactions with minimal fees',
    status: 'Live',
    color: 'text-yellow-400'
  },
  {
    icon: Gift,
    title: 'Reward Program',
    description: 'Earn rewards for holding and community participation',
    status: 'Q1 2025',
    color: 'text-pink-400'
  },
  {
    icon: Lock,
    title: 'Liquidity Provision',
    description: 'Provide liquidity and earn trading fees',
    status: 'Live',
    color: 'text-cyan-400'
  }
]

export default function UtilitySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/5 to-dark"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-3">
            <span className="gradient-text">REAL UTILITY</span>
          </h2>
          <p className="text-base text-white/70 max-w-xl mx-auto">
            DEADF5 isn't just a token - it's a complete ecosystem with actual use cases
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {utilities.map((utility, index) => {
            const Icon = utility.icon
            return (
              <motion.div
                key={utility.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-dark/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${utility.color}`}>
                      <Icon className="w-full h-full" />
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      utility.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-white/10 text-white/60 border border-white/20'
                    }`}>
                      {utility.status}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{utility.title}</h3>
                  <p className="text-sm text-white/60">{utility.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-dark/50 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4">
            <div className="text-left">
              <p className="text-xs text-white/60 mb-1">Total Value Locked</p>
              <p className="text-xl font-bold text-white">$450,000+</p>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-left">
              <p className="text-xs text-white/60 mb-1">Active Users</p>
              <p className="text-xl font-bold text-white">2,500+</p>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-left">
              <p className="text-xs text-white/60 mb-1">Transactions</p>
              <p className="text-xl font-bold text-white">15,000+</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
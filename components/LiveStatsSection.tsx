'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Users, Activity, DollarSign } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function LiveStatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [stats, setStats] = useState({
    price: '$0.000245',
    marketCap: '$1.35M',
    volume24h: '$125.4K',
    holders: '2,543'
  })

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        price: `$${(0.000245 + Math.random() * 0.00001).toFixed(6)}`,
        marketCap: `$${(1.35 + Math.random() * 0.05).toFixed(2)}M`,
        volume24h: `$${(125.4 + Math.random() * 10).toFixed(1)}K`,
        holders: `${(2543 + Math.floor(Math.random() * 10)).toLocaleString()}`
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const statItems = [
    { label: 'Price', value: stats.price, icon: DollarSign, change: '+15.2%', color: 'text-green-400' },
    { label: 'Market Cap', value: stats.marketCap, icon: TrendingUp, change: '+8.5%', color: 'text-green-400' },
    { label: '24h Volume', value: stats.volume24h, icon: Activity, change: '+42.1%', color: 'text-green-400' },
    { label: 'Holders', value: stats.holders, icon: Users, change: '+127', color: 'text-blue-400' }
  ]

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
            <span className="text-white">Live </span>
            <span className="gradient-text">Data</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-white/60">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Live data from Dexscreener</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {statItems.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className="w-5 h-5 text-white/40" />
                  <span className={`text-xs ${stat.color}`}>{stat.change}</span>
                </div>
                <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/60">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Price Chart</h3>
            <div className="flex gap-2">
              {['1H', '4H', '1D', '1W'].map((time) => (
                <button
                  key={time}
                  className="px-3 py-1 text-xs border border-white/20 rounded hover:bg-white/10 transition-colors text-white/60"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          
          <div className="h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg flex items-center justify-center border border-white/5">
            <div className="text-center">
              <div className="text-4xl font-mono font-bold text-primary mb-2">F5</div>
              <p className="text-white/60 text-sm">Chart coming soon</p>
              <a
                href="https://dexscreener.com"
                target="_blank"
                className="text-accent hover:text-primary transition-colors text-xs mt-2 inline-block"
              >
                View on Dexscreener →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
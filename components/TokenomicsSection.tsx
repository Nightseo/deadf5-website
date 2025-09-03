'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PieChart, Wallet, Flame, Users } from 'lucide-react'

const tokenomicsData = [
  {
    label: 'Liquidity',
    percentage: 95,
    amount: '950,000,000',
    color: 'bg-primary',
    icon: Wallet,
    description: '95% locked on launch'
  },
  {
    label: 'Treasury/Marketing',
    percentage: 5,
    amount: '50,000,000',
    color: 'bg-accent',
    icon: PieChart,
    description: 'Transparent wallet for growth'
  }
]

export default function TokenomicsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="tokenomics" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-accent/5 to-dark"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-3">
            <span className="gradient-text">TOKENOMICS</span>
          </h2>
          <p className="text-base text-white/70 max-w-xl mx-auto">
            Total Supply: 1,000,000,000 $DEADF5 | 0% trading fees
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                {tokenomicsData.reduce((acc, item, index) => {
                  const startAngle = acc
                  const angle = (item.percentage / 100) * 360
                  const endAngle = startAngle + angle
                  
                  const x1 = 100 + 80 * Math.cos((startAngle * Math.PI) / 180)
                  const y1 = 100 + 80 * Math.sin((startAngle * Math.PI) / 180)
                  const x2 = 100 + 80 * Math.cos((endAngle * Math.PI) / 180)
                  const y2 = 100 + 80 * Math.sin((endAngle * Math.PI) / 180)
                  
                  const largeArcFlag = angle > 180 ? 1 : 0
                  
                  return (
                    <>
                      <motion.path
                        key={index}
                        d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill={`url(#gradient${index})`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="hover:opacity-80 transition-opacity cursor-pointer"
                      />
                      <defs>
                        <linearGradient id={`gradient${index}`}>
                          <stop offset="0%" stopColor={
                            item.color === 'bg-primary' ? '#F50000' :
                            item.color === 'bg-accent' ? '#00F5FF' :
                            item.color === 'bg-secondary' ? '#FF6B6B' :
                            '#FFA500'
                          } stopOpacity="0.8" />
                          <stop offset="100%" stopColor={
                            item.color === 'bg-primary' ? '#F50000' :
                            item.color === 'bg-accent' ? '#00F5FF' :
                            item.color === 'bg-secondary' ? '#FF6B6B' :
                            '#FFA500'
                          } stopOpacity="1" />
                        </linearGradient>
                      </defs>
                      {acc + angle}
                    </>
                  )
                }, 0)}
                
                <circle cx="100" cy="100" r="50" fill="#0A0A0A" />
                <text x="100" y="95" textAnchor="middle" className="fill-white text-xs font-bold">
                  TOTAL SUPPLY
                </text>
                <text x="100" y="110" textAnchor="middle" className="fill-primary text-sm font-bold">
                  1B
                </text>
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {tokenomicsData.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover-lift"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{item.label}</h4>
                        <p className="text-xs text-white/50">{item.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">{item.percentage}%</div>
                      <div className="text-xs text-white/50">{item.amount}</div>
                    </div>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full ${item.color}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.percentage}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">0%</div>
            <div className="text-sm text-white/60">Buy/Sell Tax</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">RENOUNCED</div>
            <div className="text-sm text-white/60">Contract Ownership</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary mb-1">LOCKED</div>
            <div className="text-sm text-white/60">Liquidity Status</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
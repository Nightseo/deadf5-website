'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Circle, Clock } from 'lucide-react'

const roadmapData = [
  {
    phase: 'Q1 2025',
    title: 'Launch',
    status: 'active',
    items: [
      { text: 'Token deployment on Solana', done: true },
      { text: 'Website & Twitter launch', done: true },
      { text: 'Pump.fun listing', done: true },
      { text: 'Community building', done: false },
      { text: 'First 1000 holders', done: false }
    ]
  },
  {
    phase: 'Q2 2025',
    title: 'Growth',
    status: 'upcoming',
    items: [
      { text: 'DEX listings (Raydium, Orca)', done: false },
      { text: 'Staking platform launch', done: false },
      { text: 'F5 mini-game release', done: false },
      { text: 'CMC & CoinGecko listing', done: false },
      { text: 'Community events & meme contests', done: false }
    ]
  },
  {
    phase: 'Q3 2025',
    title: 'Expansion',
    status: 'upcoming',
    items: [
      { text: 'CEX listings', done: false },
      { text: 'F5 merch store', done: false },
      { text: 'Partnership announcements', done: false },
      { text: 'Mobile app beta', done: false },
      { text: '10,000+ holders milestone', done: false }
    ]
  },
  {
    phase: 'Q4 2025',
    title: 'Evolution',
    status: 'upcoming',
    items: [
      { text: 'Major CEX listing', done: false },
      { text: 'DAO governance launch', done: false },
      { text: 'Cross-chain expansion', done: false },
      { text: 'Real utility implementations', done: false },
      { text: 'F5 ecosystem development', done: false }
    ]
  }
]

export default function BetterRoadmap() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/5 to-dark"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-3">
            <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-base text-white/70 max-w-xl mx-auto">
            Real goals. Real timeline. No empty promises.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-secondary opacity-30"></div>

          <div className="space-y-12">
            {roadmapData.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`relative w-full md:w-5/12 ${index % 2 === 0 ? 'text-right md:pr-8' : 'text-left md:pl-8'}`}>
                  <div className={`bg-dark/60 backdrop-blur-sm border ${
                    phase.status === 'active' ? 'border-primary/40' : 'border-white/10'
                  } rounded-2xl p-6 hover:border-primary/30 transition-all`}>
                    {/* Status icon */}
                    <div className={`absolute top-6 ${index % 2 === 0 ? '-right-14 md:-right-14' : '-left-14 md:-left-14'} hidden md:block`}>
                      <div className={`w-6 h-6 rounded-full ${
                        phase.status === 'active' ? 'bg-primary animate-pulse' : 'bg-white/20'
                      }`}></div>
                    </div>

                    <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-3`}>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        phase.status === 'active' 
                          ? 'bg-primary/20 text-primary border border-primary/30' 
                          : 'bg-white/10 text-white/60'
                      }`}>
                        {phase.phase}
                      </div>
                    </div>

                    <h3 className={`text-xl font-bold text-white mb-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      {phase.title}
                    </h3>

                    <ul className={`space-y-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      {phase.items.map((item, idx) => (
                        <li key={idx} className={`flex items-center gap-2 text-sm ${
                          item.done ? 'text-green-400' : 'text-white/60'
                        } ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          {index % 2 === 0 && <span>{item.text}</span>}
                          {item.done ? (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          ) : phase.status === 'active' ? (
                            <Clock className="w-4 h-4 text-yellow-400" />
                          ) : (
                            <Circle className="w-4 h-4 text-white/30" />
                          )}
                          {index % 2 !== 0 && <span>{item.text}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-white/50">
              Timeline subject to market conditions and community growth
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
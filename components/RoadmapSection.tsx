'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Rocket, Users, Globe, Trophy } from 'lucide-react'

const roadmapData = [
  {
    phase: 'Phase 1',
    title: 'Meme Launch',
    icon: Rocket,
    color: 'from-primary to-secondary',
    items: [
      'Deploy token',
      'Launch Pump.fun',
      'Release sticker/GIF pack',
      'Community raids on Twitter/X'
    ],
    status: 'completed',
    timeline: 'Month 1'
  },
  {
    phase: 'Phase 2',
    title: 'Expansion',
    icon: Users,
    color: 'from-secondary to-accent',
    items: [
      'Meme contest + Quests',
      'Mini-game: "Smash F5"',
      'Listings on more DEXs',
      'Community partnerships'
    ],
    status: 'active',
    timeline: 'Months 2-3'
  },
  {
    phase: 'Phase 3',
    title: 'Domination',
    icon: Globe,
    color: 'from-accent to-primary',
    items: [
      'Merch drop (F5 caps, tees)',
      'Custom F5 keyboards',
      'Meme community partnerships',
      'Tier-2 exchange listing'
    ],
    status: 'upcoming',
    timeline: 'Months 4-6'
  }
]

export default function RoadmapSection() {
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
            Three phases. Clear goals. No BS.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapData.map((phase, index) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative group ${phase.status === 'completed' ? 'opacity-90' : phase.status === 'active' ? 'opacity-100' : 'opacity-60'}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                
                <div className="relative bg-dark/60 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-primary/30 transition-all">
                  <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className={`text-sm font-bold mb-2 ${
                    phase.status === 'completed' ? 'text-green-400' : 
                    phase.status === 'active' ? 'text-yellow-400' : 
                    'text-white/50'
                  }`}>
                    {phase.status === 'completed' ? 'COMPLETED' : 
                     phase.status === 'active' ? 'IN PROGRESS' : 
                     'UPCOMING'}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-1">{phase.phase}</h3>
                  <h4 className="text-base text-white/70">{phase.title}</h4>
                  <p className="text-xs text-white/50 mb-3">{phase.timeline}</p>
                  
                  <ul className="space-y-2">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className={`text-${phase.status === 'completed' ? 'green' : 'white'}/60 mt-1`}>▸</span>
                        <span className="text-white/70 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
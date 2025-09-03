'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Zap, Lock, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'No Rug Zone',
    description: 'Liquidity locked, contract renounced. Sleep easy.',
    color: 'text-primary'
  },
  {
    icon: Zap,
    title: 'Stupid Fast',
    description: 'Solana goes brrrr. Your transactions actually go through.',
    color: 'text-accent'
  },
  {
    icon: Lock,
    title: 'Zero Tax',
    description: 'No buy tax, no sell tax. Keep your money.',
    color: 'text-secondary'
  },
  {
    icon: TrendingUp,
    title: 'Actually Works',
    description: 'Staking live, governance coming. Real utility, not just promises.',
    color: 'text-primary'
  }
]

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            <span className="text-white">The </span>
            <span className="gradient-text">Story</span>
          </h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            Every developer knows the F5 key. It's the refresh button. The reset. The new beginning.
            DEADF5 embodies that spirit - constantly evolving, always refreshing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative bg-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover-lift">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${feature.color} mb-4`}>
                      <Icon className="w-full h-full" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/60">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl p-1"
        >
          <div className="bg-dark rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Why F5?</h3>
            <div className="space-y-3 text-sm text-white/70 max-w-3xl mx-auto">
              <p>
                In web development, F5 means refresh. In crypto, it means opportunity. Every time you refresh,
                there's potential for something new. That's the philosophy behind DEADF5.
              </p>
              <p>
                Built on Solana for genuine speed - not marketing speed. Zero tax because we believe in 
                letting people keep their money. Fair launch because everyone deserves a chance.
              </p>
              <p>
                This isn't about hype or promises. It's about building something that works, 
                with a community that understands the tech and appreciates the meme.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
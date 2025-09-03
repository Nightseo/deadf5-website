'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Twitter, Send } from 'lucide-react'

const communityLinks = [
  {
    platform: 'Twitter/X',
    icon: Twitter,
    link: 'https://twitter.com/deadf5coin',
    color: 'from-primary to-secondary',
    description: 'Follow @deadf5coin',
    active: true
  },
  {
    platform: 'Telegram',
    icon: Send,
    link: '#',
    color: 'from-gray-600 to-gray-700',
    description: 'Coming soon',
    active: false
  },
  {
    platform: 'Discord',
    icon: MessageCircle,
    link: '#',
    color: 'from-gray-600 to-gray-700',
    description: 'Coming soon',
    active: false
  }
]

export default function CommunitySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="community" className="py-20 relative overflow-hidden">
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
            <span className="gradient-text">Community</span>
          </h2>
          <p className="text-base text-white/70 max-w-xl mx-auto">
            Join the F5 family. We're just getting started.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
          {communityLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.div
                key={link.platform}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group ${link.active ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}`}
                onClick={() => link.active && window.open(link.link, '_blank')}
              >
                <div className={`relative bg-dark/40 backdrop-blur-sm border ${link.active ? 'border-white/10 hover:border-primary/30' : 'border-white/5'} rounded-2xl p-6 transition-all`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} rounded-2xl opacity-10 ${link.active ? 'group-hover:opacity-20' : ''} transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{link.platform}</h3>
                    <p className={`text-sm ${link.active ? 'text-white/70' : 'text-white/40'}`}>{link.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-1 rounded-3xl">
            <div className="bg-dark rounded-3xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  Ready to Refresh?
                </h3>
                <p className="text-sm text-white/70 mb-6">
                  Join early. The best time to press F5 is now.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="https://pump.fun"
                    target="_blank"
                    className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-primary/40 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    BUY ON PUMP.FUN
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/deadf5coin"
                    target="_blank"
                    className="px-6 py-3 border-2 border-accent text-accent rounded-full font-semibold text-sm hover:bg-accent hover:text-dark transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    FOLLOW @DEADF5COIN
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-base font-medium text-white/80 mb-2">
            Contract Address
          </p>
          <div className="bg-dark/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 max-w-2xl mx-auto">
            <code className="text-accent text-xs md:text-sm break-all">
              Coming Soon on Pump.fun
            </code>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
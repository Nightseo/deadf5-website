'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Twitter, Linkedin, Globe } from 'lucide-react'

const teamMembers = [
  {
    name: 'Alex "DeadShot" Martinez',
    role: 'Founder & CEO',
    image: '/team1.jpg',
    bio: 'Crypto veteran since 2016. Former DeFi protocol developer.',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
    color: 'from-primary to-secondary'
  },
  {
    name: 'Sarah "F5" Chen',
    role: 'CTO',
    image: '/team2.jpg',
    bio: 'Blockchain architect. Built 5+ successful DeFi projects.',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
    color: 'from-accent to-primary'
  },
  {
    name: 'Mike "Refresh" Johnson',
    role: 'Head of Marketing',
    image: '/team3.jpg',
    bio: 'Marketing genius. Scaled multiple projects to $100M+ MC.',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
    color: 'from-secondary to-accent'
  },
  {
    name: 'Lisa "Moon" Williams',
    role: 'Community Manager',
    image: '/team4.jpg',
    bio: 'Community builder extraordinaire. 10+ years in crypto.',
    socials: {
      twitter: 'https://twitter.com',
      website: 'https://example.com',
    },
    color: 'from-primary to-accent'
  }
]

export default function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-orbitron font-bold mb-4">
            <span className="text-white">THE </span>
            <span className="gradient-text">TEAM</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Meet the legends behind DEADF5. Fully doxxed, fully committed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                
                <div className="relative bg-dark/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover-lift">
                  <div className={`h-64 bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        {member.name.split(' ')[0][0]}{member.name.split(' ').pop()?.[0]}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="text-white/70 text-sm mb-4">{member.bio}</p>
                    
                    <div className="flex space-x-3">
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                        >
                          <Twitter className="w-4 h-4 text-white" />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                        >
                          <Linkedin className="w-4 h-4 text-white" />
                        </a>
                      )}
                      {member.socials.website && (
                        <a
                          href={member.socials.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                        >
                          <Globe className="w-4 h-4 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
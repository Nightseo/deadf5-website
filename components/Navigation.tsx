'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'HOME' },
    { href: '#roadmap', label: 'ROADMAP' },
    { href: '#about', label: 'ABOUT' },
    { href: '#tokenomics', label: 'TOKENOMICS' },
    { href: '#community', label: 'COMMUNITY' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark/95 backdrop-blur-xl border-b border-primary/30 shadow-[0_0_30px_rgba(245,0,0,0.3)]' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="text-xl md:text-2xl font-orbitron font-bold"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                textShadow: [
                  '0 0 10px rgba(245, 0, 0, 0.5)',
                  '0 0 20px rgba(245, 0, 0, 0.8)',
                  '0 0 10px rgba(245, 0, 0, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-primary">DEAD</span>
              <span className="text-accent">F5</span>
            </motion.div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white transition-all font-medium text-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="https://dexscreener.com"
              target="_blank"
              className="px-5 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              BUY $DEADF5
            </motion.a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-white hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://dexscreener.com"
              target="_blank"
              className="block mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold text-center"
            >
              BUY $DEADF5
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
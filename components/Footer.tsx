'use client'

import { motion } from 'framer-motion'
import { Twitter, Send, MessageCircle, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 border-t border-white/10 bg-dark/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-orbitron font-bold mb-3">
              <span className="text-primary">DEAD</span>
              <span className="text-accent">F5</span>
            </div>
            <p className="text-white/50 text-xs">
              Press F5 to refresh.
            </p>
          </div>

          <div>
            <h4 className="text-white/80 font-medium mb-3 text-sm">Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/60 hover:text-primary transition-colors">About</a></li>
              <li><a href="#roadmap" className="text-white/60 hover:text-primary transition-colors">Roadmap</a></li>
              <li><a href="#tokenomics" className="text-white/60 hover:text-primary transition-colors">Tokenomics</a></li>
              <li><a href="#team" className="text-white/60 hover:text-primary transition-colors">Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/80 font-medium mb-3 text-sm">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Audit Report</a></li>
              <li><a href="https://dexscreener.com" className="text-white/60 hover:text-primary transition-colors">Chart</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Contract</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/80 font-medium mb-3 text-sm">Social</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://twitter.com/deadf5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://t.me/deadf5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Send className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://discord.gg/deadf5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
            <p className="text-white/60 text-sm">
              Join our growing community
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-xs mb-4 md:mb-0">
            © 2025 DEADF5
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
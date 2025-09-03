'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Typewriter from 'typewriter-effect'
import Navigation from '@/components/Navigation'
import MatrixRain from '@/components/MatrixRain'
import HeroSection from '@/components/HeroSection'
import MemeSection from '@/components/MemeSection'
import BetterRoadmap from '@/components/BetterRoadmap'
import AboutSection from '@/components/AboutSection'
import HowToBuySection from '@/components/HowToBuySection'
import LiveStatsSection from '@/components/LiveStatsSection'
import SimpleTokenomics from '@/components/SimpleTokenomics'
import UtilitySection from '@/components/UtilitySection'
import CommunitySection from '@/components/CommunitySection'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    setTimeout(() => setLoading(false), 3000)
  }, [])

  if (!mounted) return null

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <main className="min-h-screen bg-dark overflow-hidden relative">
        <MatrixRain />
        <div className="relative z-10">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <LiveStatsSection />
          <SimpleTokenomics />
          <BetterRoadmap />
          <CommunitySection />
          <Footer />
        </div>
      </main>
    </>
  )
}
'use client'

import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const matrix = "F5DEADF501REFRESH"
    const matrixArray = matrix.split("")
    const fontSize = 16
    const columns = canvas.width / fontSize

    const drops: number[] = []
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100
    }

    function draw() {
      if (!ctx || !canvas) return

      ctx.fillStyle = 'rgba(10, 10, 10, 0.03)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#F50000'
      ctx.font = fontSize + 'px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Gradient effect - brighter at the bottom
        const gradient = ctx.createLinearGradient(0, y - 20, 0, y)
        gradient.addColorStop(0, 'rgba(245, 0, 0, 0)')
        gradient.addColorStop(0.5, 'rgba(245, 0, 0, 0.5)')
        gradient.addColorStop(1, 'rgba(0, 245, 255, 1)')
        
        ctx.fillStyle = gradient
        ctx.fillText(text, x, y)

        // Glow effect for recent drops
        if (drops[i] * fontSize > canvas.height / 2 && Math.random() > 0.98) {
          ctx.shadowBlur = 20
          ctx.shadowColor = '#00F5FF'
          ctx.fillStyle = '#00F5FF'
          ctx.fillText(text, x, y)
          ctx.shadowBlur = 0
        }

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-30"
      style={{ pointerEvents: 'none' }}
    />
  )
}
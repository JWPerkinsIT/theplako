import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}

export function useCountUp(end, duration = 2000, isVisible = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime = null
    const startVal = 0

    function animate(currentTime) {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * (end - startVal) + startVal))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, isVisible])

  return count
}

/* global IntersectionObserver */

import { useEffect, useState } from 'react'

export const useIntersectionObserver = (enabled, ref, options) => {
  const [hasIntersected, setHasIntersected] = useState(false)

  useEffect(() => {
    if (enabled && ref.current) {
      const onIntersect = ([entry], self) => {
        if (entry.isIntersecting) {
          setHasIntersected(true)
          self.unobserve(entry.target)
        }
      }
      const observer = new IntersectionObserver(onIntersect, options)
      observer.observe(ref.current)
      return () => observer.disconnect()
    }
  }, [ref, enabled, options])

  return hasIntersected
}

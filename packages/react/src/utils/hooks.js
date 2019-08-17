/* global IntersectionObserver */

import { useCallback, useState } from 'react'

export const useIntersectionObserver = (enabled = false) => {
  const [hasIntersected, setHasIntersected] = useState(false)

  const refCallback = useCallback((node) => {
    if (enabled) {
      const onIntersectionObserverChange = ([entry], self) => {
        if (entry.isIntersecting) {
          setHasIntersected(true)
          self.unobserve(entry.target)
        }
      }
      const observer = new IntersectionObserver(onIntersectionObserverChange)

      if (node !== null) {
        observer.observe(node)
      }
    } else {
      setHasIntersected(true)
    }
  })

  return [hasIntersected, refCallback]
}

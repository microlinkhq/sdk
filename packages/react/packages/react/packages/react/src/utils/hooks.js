/* global IntersectionObserver */

import { useCallback, useState } from 'react'

export const useIntersectionObserver = (enabled, options) => {
  const [hasIntersected, setHasIntersected] = useState(false)

  const refCallback = useCallback(node => {
    if (enabled) {
      const onIntersect = ([entry], self) => {
        if (entry.isIntersecting) {
          setHasIntersected(true)
          self.unobserve(entry.target)
        }
      }
      const observer = new IntersectionObserver(onIntersect, options)

      if (node !== null) {
        observer.observe(node)
      }
    } else {
      setHasIntersected(true)
    }
  })

  return [hasIntersected, refCallback]
}

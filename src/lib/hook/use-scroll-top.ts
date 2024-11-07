import { useEffect, useState } from 'react'
import { debounce } from 'lodash-es'

export const useScrollTop = (debounceTime = 100) => {
  const [top, setTop] = useState(0)

  const handleScroll = debounce(() => {
    setTop(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop)
  }, debounceTime)

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return top
}

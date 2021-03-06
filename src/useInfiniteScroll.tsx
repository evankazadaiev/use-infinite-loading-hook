import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback
} from 'react'

interface Props {
  callback: (page: number) => void
  hasMore: boolean
  startPage: number
  direction?: 'bottom' | 'top'
  offset: number
}

export const useInfiniteScroll = ({
  callback,
  hasMore,
  startPage = 1,
  offset = 250,
  direction
}: Props) => {
  const ref = useRef<any>(null)
  const [firstScroll, setFirstScroll] = useState<boolean>(false)
  const containerRef = useRef<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [page, setPage] = useState<any>(startPage)

  const setRef = useCallback((node?: HTMLElement) => {
    if (node) {
      ref.current = node
    }
  }, [])

  const setContainerRef = useCallback((node?: HTMLElement) => {
    if (node) {
      containerRef.current = node
    }
  }, [])

  const fetchData = async (page: number) => {
    setIsLoading(true)
    await callback(page)
    setIsLoading(false)
  }

  useEffect(() => {
    const func = async () => {
      await fetchData(page)
      if (direction === 'top') containerRef.current.scrollTo(0, offset)
    }
    func()
  }, [page])

  useLayoutEffect(() => {
    if (!hasMore) return

    const currentRef = ref.current

    const options = {
      root: null,
      rootMargin:
        direction === 'bottom'
          ? `0px 0px ${offset}px 0px`
          : `${offset}px 0px 0px 0px`
    }

    const loadMore = async (entries: any) => {
      entries.forEach(({ isIntersecting }: any) => {
        if (isIntersecting && !isLoading) {
          setPage((prev: number) => prev + 1)
        }
      })
    }

    const observer = new IntersectionObserver(loadMore, options)

    observer.observe(currentRef)

    return () => {
      observer.disconnect()
    }
  }, [ref, hasMore, isLoading])

  useLayoutEffect(() => {
    if (direction === 'top' && !firstScroll) {
      containerRef.current.scrollIntoView({
        block: 'end',
        inline: 'nearest'
      })
    }
  })

  useEffect(() => {
    window.addEventListener('scroll', () => setFirstScroll(true))
    return () =>
      window.removeEventListener('scroll', () => setFirstScroll(true))
  }, [])

  return [setRef, setContainerRef, isLoading]
}

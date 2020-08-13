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
  direction: string
  offset: number
}

const DIRECTIONS = {
  BOTTOM: 'bottom',
  TOP: 'top'
}

export const useInfiniteScroll = ({
  callback,
  hasMore,
  startPage = 1,
  offset = 250,
  direction = DIRECTIONS.BOTTOM
}: Props) => {
  const ref = useRef<any>(null)
  const [firstScroll, setFirstScroll] = useState<boolean>(false)
  const containerRef = useRef<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [page, setPage] = useState<any>(startPage)

  const intersectionRef = useRef<any>(0)
  const setRef = useCallback((node?: HTMLElement) => {
    if (node) {
      // @ts-ignore
      ref.current = node
    }
  }, [])

  const setContainerRef = useCallback((node?: HTMLElement) => {
    if (node) {
      // @ts-ignore
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
      if (direction === DIRECTIONS.TOP) containerRef.current.scrollTo(0, offset)
    }
    func()
  }, [page])

  useLayoutEffect(() => {
    const currentRef = ref.current

    const options = {
      root: null,
      rootMargin:
        direction === DIRECTIONS.BOTTOM
          ? `0px 0px ${offset}px 0px`
          : `${offset}px 0px 0px 0px`
    }

    const loadMore = async (entries: any) => {
      entries.forEach(({ isIntersecting }: any) => {
        if (isIntersecting && !isLoading) {
          intersectionRef.current = intersectionRef.current + 1

          if (intersectionRef.current === 1) return
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
    if (direction === DIRECTIONS.TOP && !firstScroll) {
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

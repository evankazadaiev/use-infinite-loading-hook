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
  const containerRef = useRef<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [page, setPage] = useState<any>(startPage)

  const intersectionRef = useRef<any>(0)
  const setRef = useCallback((node: any) => {
    if (node) {
      ref.current = node
    }
  }, [])

  const setContainerRef = useCallback((node: any) => {
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
    console.log(containerRef)
    if (direction === DIRECTIONS.TOP) {
      // window.scrollTo({ block: 'end', behavior: 'smooth' })
      containerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      })
      // containerRef.current.scrollTo(0, containerRef.current.scrollHeight)
    }
  }, [containerRef])

  return [setRef, setContainerRef, isLoading]
}

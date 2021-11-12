import React, {
  forwardRef,
  Ref,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import MouseWheel from '@better-scroll/mouse-wheel'
import ScrollBar from '@better-scroll/scroll-bar'
import PullDown from '@better-scroll/pull-down'
import Pullup from '@better-scroll/pull-up'

BScroll.use(ObserveDOM)
BScroll.use(MouseWheel)
BScroll.use(ScrollBar)
BScroll.use(PullDown)
BScroll.use(Pullup)

export interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  wrapperHeight?: string
  direction?: 'vertical' | 'horizontal'
  click?: boolean
  refresh?: boolean
  pullUpLoading?: boolean // 上拉动画
  pullDownLoading?: boolean // 下拉动画
  bounceTop?: boolean // 是否上吸
  bounceBottom?: boolean // 是否下吸
  probeType?: number
  onPullup?(...args: any[]): void
  onPulldown?(...args: any[]): void
  onScroll?: (...args: any[]) => void
}

const DEFAULT_PROPS = {
  direction: 'vertical',
  click: true,
  pullUpLoading: false,
  pullDownLoading: false,
  refresh: true,
  bounceTop: true,
  bounceBottom: true,
  probeType: 3,
} as const

export interface ScrollRef {
  refresh(): void
  getBScroll(): BScroll | null | undefined
}

export const Scroll = forwardRef(
  (props: React.PropsWithChildren<ScrollProps>, ref: Ref<ScrollRef>) => {
    const {
      children,
      wrapperHeight,
      className,
      style,
      direction,
      click,
      refresh,
      pullUpLoading,
      pullDownLoading,
      bounceTop,
      bounceBottom,
      probeType,
      onScroll,
      onPulldown,
      onPullup,
    } = props as ScrollProps & typeof DEFAULT_PROPS
    const scrollWrapperRef = useRef<null | HTMLDivElement>(null)
    const [bScroll, setBScroll] = useState<null | BScroll>()
    const initBScroll = useCallback(() => {
      if (!scrollWrapperRef.current || bScroll) {
        return
      }
      const isVertical = direction === 'vertical'
      setBScroll(
        new BScroll(scrollWrapperRef.current, {
          probeType,
          click,
          scrollX: !isVertical,
          scrollY: isVertical,
          mouseWheel: {
            speed: 20,
            invert: false,
            easeTime: 200,
          },
          useTransition: true,
          pullDownRefresh: {
            threshold: 50,
            stop: 0,
          },
          pullUpLoad: {
            threshold: 50,
          },
          bounce: {
            top: isVertical && bounceTop,
            bottom: isVertical && bounceBottom,
          },
        }),
      )
    }, [bScroll, bounceBottom, bounceTop, click, direction, probeType])

    useEffect(() => {
      initBScroll()
      return () => {
        bScroll?.destroy()
        // setBScroll(null)
      }
    }, [bScroll, initBScroll])

    // 每次渲染都进行 refresh
    useEffect(() => {
      if (refresh && bScroll) {
        bScroll.refresh()
      }
    })

    // 绑定 scroll 事件
    useEffect(() => {
      if (!bScroll || !onScroll) return
      bScroll.on('scroll', (scroll: any) => {
        onScroll(scroll)
      })

      return () => {
        bScroll.off('scroll')
      }
    }, [bScroll, onScroll])

    // 上拉到底
    useEffect(() => {
      if (!bScroll || !onPullup) return

      bScroll.on('pullingUp', async () => {
        await onPullup()
        setTimeout(() => {
          bScroll?.finishPullUp()
          bScroll?.refresh()
        }, 1000)
      })
      return () => {
        bScroll.off('pullingUp')
      }
    }, [bScroll, onPullup])

    // 下拉刷新
    useEffect(() => {
      if (!bScroll || !onPulldown) return
      bScroll.on('pullingDown', async () => {
        await onPulldown()
        setTimeout(() => {
          bScroll?.finishPullDown()
          bScroll?.refresh()
        }, 500)
      })

      return () => {
        bScroll.off('pullingDown')
      }
    }, [onPulldown, bScroll])

    useImperativeHandle(ref, () => ({
      // 给外界暴露 refresh 方法
      refresh() {
        if (bScroll) {
          bScroll.refresh()
          bScroll.scrollTo(0, 0)
        }
      },
      // 给外界暴露 getBScroll 方法，提供 bs 实例
      getBScroll() {
        return bScroll
      },
    }))
    return (
      <div
        ref={scrollWrapperRef}
        className={'scroll-wrapper' + `${className ? ' ' + className : ''}`}
        style={{
          height: wrapperHeight,
          ...style,
        }}
      >
        <div className='scroll-content'>{children}</div>
      </div>
    )
  },
)

Scroll.displayName = 'scroll'
Scroll.defaultProps = DEFAULT_PROPS
export default Scroll

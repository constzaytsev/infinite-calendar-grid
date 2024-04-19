import type { Ref } from 'vue'
import { ref, watch, getCurrentScope, onScopeDispose, onMounted } from 'vue'
import { defaultWindow } from './utils'

interface ElementSize {
  width: number
  height: number
}

export function useElementSize (
  target: Ref<HTMLElement | null>,
  initialSize: ElementSize = { width: 0, height: 0 }
) {
  const window = defaultWindow
  let observer: ResizeObserver | undefined
  const isSupported = window && 'ResizeObserver' in window

  const width = ref(initialSize.width)
  const height = ref(initialSize.height)

  const callback: ResizeObserverCallback = ([entry]) => {
    const t = entry.contentBoxSize
    if (t) {
      const formatBoxSize = Array.isArray(t) ? t : [t]
      width.value = formatBoxSize.reduce(
        (acc, { inlineSize }) => acc + inlineSize,
        0
      )
      height.value = formatBoxSize.reduce(
        (acc, { blockSize }) => acc + blockSize,
        0
      )
    } else {
      width.value = entry.contentRect.width
      height.value = entry.contentRect.height
    }
  }

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = undefined
    }
  }

  const stopWatch = watch(
    target,
    el => {
      cleanup()
      if (isSupported && window) {
        observer = new ResizeObserver(callback)
        el && observer.observe(el)
      }
    },
    { immediate: true, flush: 'post' }
  )

  onMounted(() => {
    if (target.value) {
      width.value =
        'offsetWidth' in target.value
          ? target.value.offsetWidth
          : initialSize.width
      height.value =
        'offsetHeight' in target.value
          ? target.value.offsetHeight
          : initialSize.height
    }
  })

  if (getCurrentScope()) {
    onScopeDispose(() => {
      cleanup()
      stopWatch()
    })
  }

  return {
    width,
    height
  }
}

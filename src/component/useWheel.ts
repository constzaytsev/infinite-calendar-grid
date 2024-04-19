import type { Ref } from 'vue'
import { watch, getCurrentScope, onScopeDispose } from 'vue'

export function useWheel (
  element: Ref<HTMLElement | null>,
  scrollDownHandler: () => void,
  scrolUpHandler: () => void
) {
  let wheelPower = 0
  let wheelLock = false
  let wheelTimeStamp = 0
  let wheelLockTimer: ReturnType<typeof setTimeout> | null = null
  const deltaThreshold = 10
  const noiseThreshold = 10

  function handler (event: WheelEvent) {
    const delta = -event.deltaY
    const absDelta = Math.abs(delta)

    if (absDelta < noiseThreshold) return
    if (event.timeStamp - wheelTimeStamp < 300 && wheelLock) return

    wheelTimeStamp = event.timeStamp

    if (wheelPower < absDelta && !wheelLock) {
      if (delta < -deltaThreshold) scrollDownHandler()
      else if (delta > deltaThreshold) scrolUpHandler()

      lock(absDelta)

      wheelLockTimer && clearTimeout(wheelLockTimer)
      wheelLockTimer = setTimeout(() => {
        if (wheelPower !== absDelta) return
        unlock()
      }, 1000)
    } else if (absDelta < deltaThreshold) {
      unlock()
    }
  }

  function lock (absDelta: number) {
    wheelPower = absDelta
    wheelLock = true
  }

  function unlock () {
    wheelPower = deltaThreshold
    wheelLock = false
  }

  const cleanup = () => {
    if (element.value) {
      element.value.removeEventListener('wheel', handler)
    }
  }

  const stopWatch = watch(
    element,
    el => {
      cleanup()
      el && el.addEventListener('wheel', handler)
    },
    { immediate: true, flush: 'post' }
  )

  if (getCurrentScope()) {
    onScopeDispose(() => {
      cleanup()
      stopWatch()
    })
  }
}

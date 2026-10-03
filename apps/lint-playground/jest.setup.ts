if (typeof globalThis.ResizeObserver === "undefined") {
  class ResizeObserverMock {
    observe(): void {}
    unobserve(): void {}
    disconnect(): void {}
  }
  globalThis.ResizeObserver = ResizeObserverMock
}

if (typeof window !== "undefined") {
  if (typeof window.PointerEvent !== "function") {
    class PointerEventPolyfill extends MouseEvent {
      readonly pointerId: number
      readonly pointerType: string
      readonly isPrimary: boolean

      constructor(type: string, params: PointerEventInit = {}) {
        super(type, params)
        this.pointerId = params.pointerId ?? 0
        this.pointerType = params.pointerType ?? ""
        this.isPrimary = params.isPrimary ?? false
      }
    }

    Object.defineProperty(window, "PointerEvent", {
      writable: true,
      value: PointerEventPolyfill,
    })
  }

  if (typeof window.matchMedia !== "function") {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: (query: string): MediaQueryList => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: (): void => {},
        removeListener: (): void => {},
        addEventListener: (): void => {},
        removeEventListener: (): void => {},
        dispatchEvent: (): boolean => false,
      }),
    })
  }

  const elementProto = window.Element.prototype as unknown as Record<
    string,
    unknown
  >
  const stubs: Record<string, (...args: never[]) => unknown> = {
    scrollIntoView: () => undefined,
    scrollTo: () => undefined,
    hasPointerCapture: () => false,
    setPointerCapture: () => undefined,
    releasePointerCapture: () => undefined,
  }
  for (const [name, stub] of Object.entries(stubs)) {
    if (elementProto[name] === undefined) {
      elementProto[name] = stub
    }
  }
}

(globalThis as Record<string, unknown>).IS_REACT_ACT_ENVIRONMENT = true

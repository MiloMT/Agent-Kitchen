import { act, renderHook } from "@testing-library/react"

import { useTasks } from "./useTasks"

describe("useTasks", () => {
  it("starts with seed data and the all filter", () => {
    const { result } = renderHook(() => useTasks())

    expect(result.current.tasks).toHaveLength(3)
    expect(result.current.filter).toBe("all")
    expect(result.current.stats.total).toBe(3)
  })

  it("adds a task as incomplete at the top of the list", () => {
    const { result } = renderHook(() => useTasks())

    act(() => {
      result.current.addTask({ title: "Fresh task", priority: "high" })
    })

    const first = result.current.tasks[0]
    expect(first.title).toBe("Fresh task")
    expect(first.done).toBe(false)
    expect(result.current.stats.total).toBe(4)
  })

  it("toggles the done flag without touching other fields", () => {
    const { result } = renderHook(() => useTasks())
    const before = result.current.tasks[0]

    act(() => {
      result.current.toggleTask(before.id)
    })

    const toggled = result.current.tasks[0]
    expect(toggled.done).toBe(true)
    expect(toggled.title).toBe(before.title)
  })

  it("removes a task", () => {
    const { result } = renderHook(() => useTasks())
    const id = result.current.tasks[0].id

    act(() => {
      result.current.removeTask(id)
    })

    expect(result.current.tasks).toHaveLength(2)
  })

  it("filters visible tasks but keeps stats global", () => {
    const { result } = renderHook(() => useTasks())

    act(() => {
      result.current.setFilter("done")
    })

    expect(result.current.tasks).toHaveLength(1)
    expect(result.current.stats.total).toBe(3)
    expect(result.current.stats.done).toBe(1)
  })
})

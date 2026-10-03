import { calculateTaskStats } from "./taskStats"
import type { Task } from "./types"

const task = (id: string, done: boolean): Task => ({
  id,
  title: `Task ${id}`,
  priority: "low",
  createdAt: 0,
  done,
})

describe("calculateTaskStats", () => {
  it("returns zeroes for an empty board", () => {
    expect(calculateTaskStats([])).toEqual({
      total: 0,
      done: 0,
      remaining: 0,
      percentComplete: 0,
    })
  })

  it("derives completion from the full task list", () => {
    const stats = calculateTaskStats([
      task("a", true),
      task("b", true),
      task("c", false),
      task("d", false),
    ])

    expect(stats).toEqual({
      total: 4,
      done: 2,
      remaining: 2,
      percentComplete: 50,
    })
  })
})

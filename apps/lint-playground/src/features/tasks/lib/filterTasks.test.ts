import { filterTasks } from "./filterTasks"
import type { Task } from "./types"

const task = (id: string, done: boolean): Task => ({
  id,
  title: `Task ${id}`,
  priority: "medium",
  createdAt: 0,
  done,
})

const tasks: readonly Task[] = [task("a", false), task("b", true), task("c", false)]

const idOf = (item: Task): string => item.id

describe("filterTasks", () => {
  it("shows everything for the all filter", () => {
    expect(filterTasks(tasks, "all").map(idOf)).toEqual(["a", "b", "c"])
  })

  it("shows only incomplete tasks for the active filter", () => {
    expect(filterTasks(tasks, "active").map(idOf)).toEqual(["a", "c"])
  })

  it("shows only completed tasks for the done filter", () => {
    expect(filterTasks(tasks, "done").map(idOf)).toEqual(["b"])
  })

  it("never mutates the input", () => {
    filterTasks(tasks, "active")
    expect(tasks).toHaveLength(3)
  })
})

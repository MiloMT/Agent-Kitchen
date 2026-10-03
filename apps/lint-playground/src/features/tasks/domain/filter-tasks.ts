import type { Task, TaskFilter } from "./types"

export function filterTasks(
  tasks: readonly Task[],
  filter: TaskFilter,
): readonly Task[] {
  return tasks.filter((task) => {
    if (filter === "active") return !task.done
    if (filter === "done") return task.done
    return true
  })
}

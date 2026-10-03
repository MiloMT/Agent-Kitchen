import type { Task, TaskFilter } from "./types"

/**
 * Returns the subset of tasks visible under the given board filter.
 */
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

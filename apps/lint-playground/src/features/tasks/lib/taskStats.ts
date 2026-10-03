import type { Task, TaskStats } from "./types"

/**
 * Derives board-wide completion stats from the full task list.
 */
export function calculateTaskStats(tasks: readonly Task[]): TaskStats {
  const total = tasks.length
  const done = tasks.filter((task) => task.done).length
  return {
    total,
    done,
    remaining: total - done,
    percentComplete: total === 0 ? 0 : Math.round((done / total) * 100),
  }
}

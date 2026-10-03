import type { Task, TaskStats } from "./types"

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

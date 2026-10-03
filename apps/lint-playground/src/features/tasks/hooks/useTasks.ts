import { useCallback, useMemo, useState } from "react"

import { calculateTaskStats, createTask, filterTasks } from "../lib"
import type { NewTaskInput, Task, TaskFilter, TaskStats } from "../types"

const createId = (): string => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID()
  }
  return `task-${Math.random().toString(36).slice(2)}`
}

const SEED_TASKS: readonly Task[] = [
  {
    id: "seed-1",
    title: "Wire up eslint-plugin-boundaries",
    notes: "Enforce the feature folder layout at the lint level.",
    priority: "high",
    createdAt: Date.parse("2025-01-02T09:00:00Z"),
    done: false,
  },
  {
    id: "seed-2",
    title: "Try eslint-plugin-functional",
    notes: "Ban mutation and imperative loops in app code.",
    priority: "medium",
    createdAt: Date.parse("2025-01-03T14:30:00Z"),
    done: false,
  },
  {
    id: "seed-3",
    title: "Add import-x ordering rules",
    priority: "low",
    createdAt: Date.parse("2025-01-04T08:15:00Z"),
    done: true,
  },
]

export interface UseTasksResult {
  readonly tasks: readonly Task[]
  readonly filter: TaskFilter
  readonly setFilter: (filter: TaskFilter) => void
  readonly addTask: (input: NewTaskInput) => void
  readonly toggleTask: (id: string) => void
  readonly removeTask: (id: string) => void
  readonly stats: TaskStats
}

export function useTasks(): UseTasksResult {
  const [tasks, setTasks] = useState<readonly Task[]>(SEED_TASKS)
  const [filter, setFilter] = useState<TaskFilter>("all")

  const addTask = useCallback((input: NewTaskInput): void => {
    const task = createTask(input, { id: createId(), now: Date.now() })
    setTasks((previous) => [task, ...previous])
  }, [])

  const toggleTask = useCallback((id: string): void => {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }, [])

  const removeTask = useCallback((id: string): void => {
    setTasks((previous) => previous.filter((task) => task.id !== id))
  }, [])

  const visibleTasks = useMemo(
    () => filterTasks(tasks, filter),
    [tasks, filter],
  )

  const stats = useMemo(
    () => calculateTaskStats(tasks),
    [tasks],
  )

  return { tasks: visibleTasks, filter, setFilter, addTask, toggleTask, removeTask, stats }
}

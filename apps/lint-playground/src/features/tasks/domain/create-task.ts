import type { NewTaskInput, Task } from "./types"

/**
 * Non-deterministic inputs (ids, timestamps) are injected by the shell so
 * this function stays pure and testable.
 */
export interface CreateTaskContext {
  readonly id: string
  readonly now: number
}

export function createTask(input: NewTaskInput, context: CreateTaskContext): Task {
  return {
    id: context.id,
    title: input.title,
    notes: input.notes === "" ? undefined : input.notes,
    priority: input.priority,
    createdAt: context.now,
    done: false,
  }
}

import type { NewTaskInput, Task } from "../types"

export interface CreateTaskContext {
  readonly id: string
  readonly now: number
}

/**
 * Creates a new, incomplete task from validated input.
 * Non-determinism (identity, timestamp) is supplied via the context.
 */
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

export type Priority = "low" | "medium" | "high"

export interface Task {
  readonly id: string
  readonly title: string
  readonly notes?: string
  readonly priority: Priority
  readonly createdAt: number
  readonly done: boolean
}

export interface NewTaskInput {
  readonly title: string
  readonly notes?: string
  readonly priority: Priority
}

export type TaskFilter = "all" | "active" | "done"

export interface TaskStats {
  readonly total: number
  readonly done: number
  readonly remaining: number
  readonly percentComplete: number
}

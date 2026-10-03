import type { Priority, TaskFilter } from "./lib/types"

export const PRIORITIES: readonly Priority[] = ["low", "medium", "high"]

export const PRIORITY_LABELS: Record<Priority, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
}

export const PRIORITY_BADGE_VARIANTS: Record<
  Priority,
  "default" | "secondary" | "destructive"
> = {
  low: "secondary",
  medium: "default",
  high: "destructive",
}

export const FILTERS: readonly { label: string; value: TaskFilter }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Done", value: "done" },
]

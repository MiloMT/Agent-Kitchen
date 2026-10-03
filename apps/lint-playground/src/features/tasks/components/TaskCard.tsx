import {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
} from "miloberry"
import { Trash2 } from "lucide-react"
import type { ReactElement } from "react"

import { PRIORITY_BADGE_VARIANTS, PRIORITY_LABELS } from "../constants"
import type { Task } from "../types"

export interface TaskCardProps {
  task: Task
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export function TaskCard({ task, onToggle, onRemove }: TaskCardProps): ReactElement {
  return (
    <Card size="sm">
      <CardHeader>
        <CardTitle className={task.done ? "text-muted-foreground line-through" : undefined}>
          {task.title}
        </CardTitle>
        {task.notes ? <CardDescription>{task.notes}</CardDescription> : null}
        <CardAction>
          <div className="flex items-center gap-2">
            <Badge variant={PRIORITY_BADGE_VARIANTS[task.priority]}>
              {PRIORITY_LABELS[task.priority]}
            </Badge>
            <Checkbox
              checked={task.done}
              onCheckedChange={(checked) => {
                if (checked !== task.done) onToggle(task.id)
              }}
              aria-label={`Mark "${task.title}" as ${task.done ? "active" : "done"}`}
            />
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{new Date(task.createdAt).toLocaleDateString()}</span>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={`Delete "${task.title}"`}
            onClick={() => {
              onRemove(task.id)
            }}
          >
            <Trash2 />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

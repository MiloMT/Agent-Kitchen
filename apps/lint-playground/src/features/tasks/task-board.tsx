import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  Progress,
  Separator,
  Tabs,
  TabsList,
  TabsTrigger,
} from "miloberry"
import { ListTodo } from "lucide-react"
import type { ReactElement } from "react"

import { AddTaskDialog } from "./add-task-dialog"
import { FILTERS } from "./constants"
import { TaskCard } from "./task-card"
import { useTasks } from "./use-tasks"
import type { TaskFilter } from "./domain"

export function TaskBoard(): ReactElement {
  const { tasks, filter, setFilter, addTask, toggleTask, removeTask, stats } = useTasks()

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Tabs
          value={filter}
          onValueChange={(value) => {
            setFilter(value as TaskFilter)
          }}
        >
          <TabsList>
            {FILTERS.map(({ value, label }) => (
              <TabsTrigger key={value} value={value}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            {stats.done} / {stats.total} done
          </span>
          <Progress value={stats.percentComplete} className="w-32" aria-label="Completion" />
        </div>
        <AddTaskDialog onAdd={addTask} />
      </div>

      <Separator />

      {tasks.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia>
              <ListTodo />
            </EmptyMedia>
            <EmptyTitle>No tasks here</EmptyTitle>
            <EmptyDescription>
              {filter === "all"
                ? "Your board is empty. Add your first task to get started."
                : "Nothing matches this filter. Try a different view."}
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button
              variant="outline"
              onClick={() => {
                setFilter("all")
              }}
            >
              Show all tasks
            </Button>
          </EmptyContent>
        </Empty>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onToggle={toggleTask} onRemove={removeTask} />
          ))}
        </div>
      )}
    </section>
  )
}

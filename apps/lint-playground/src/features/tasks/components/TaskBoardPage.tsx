import type { ReactElement } from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "miloberry"

import { TaskBoard } from "./TaskBoard"

export function TaskBoardPage(): ReactElement {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
        <CardDescription>Track small units of work by priority.</CardDescription>
      </CardHeader>
      <CardContent>
        <TaskBoard />
      </CardContent>
    </Card>
  )
}

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { fireEvent } from "@testing-library/react"

import { TaskCard } from "./TaskCard"
import type { Task } from "../lib"

const makeTask = (overrides: Partial<Task> = {}): Task => ({
  id: "t1",
  title: "Write report",
  priority: "high",
  createdAt: Date.parse("2025-01-02T09:00:00Z"),
  done: false,
  ...overrides,
})

describe("TaskCard", () => {
  it("renders title, notes and priority label", () => {
    render(
      <TaskCard
        task={makeTask({ notes: "some details" })}
        onToggle={(): void => {}}
        onRemove={(): void => {}}
      />,
    )

    expect(screen.getByText("Write report")).toBeTruthy()
    expect(screen.getByText("some details")).toBeTruthy()
    expect(screen.getByText("High")).toBeTruthy()
  })

  it("reports removal through onRemove", () => {
    const onRemove = jest.fn()
    render(
      <TaskCard
        task={makeTask()}
        onToggle={(): void => {}}
        onRemove={onRemove}
      />,
    )

    fireEvent.click(screen.getByRole("button", { name: /delete/i }))
    expect(onRemove).toHaveBeenCalledWith("t1")
  })

  it("reports completion through onToggle", async () => {
    const user = userEvent.setup()
    const onToggle = jest.fn()
    render(
      <TaskCard
        task={makeTask()}
        onToggle={onToggle}
        onRemove={(): void => {}}
      />,
    )

    await user.click(screen.getByRole("checkbox"))
    expect(onToggle).toHaveBeenCalledWith("t1")
  })

  it("strikes through done tasks", () => {
    render(
      <TaskCard
        task={makeTask({ done: true })}
        onToggle={(): void => {}}
        onRemove={(): void => {}}
      />,
    )

    const title = screen.getByText("Write report")
    expect(title.className).toContain("line-through")
  })
})

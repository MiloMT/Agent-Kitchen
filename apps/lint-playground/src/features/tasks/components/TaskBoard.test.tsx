import { render, screen } from "@testing-library/react"

import { TaskBoard } from "./TaskBoard"

describe("TaskBoard", () => {
  it("shows seeded tasks on the all view", () => {
    render(<TaskBoard />)

    expect(screen.getByText("Wire up eslint-plugin-boundaries")).toBeTruthy()
    expect(screen.getByText("Try eslint-plugin-functional")).toBeTruthy()
    expect(screen.getByText("Add import-x ordering rules")).toBeTruthy()
  })

  it("renders the completion progress and add-task affordance", () => {
    render(<TaskBoard />)

    expect(screen.getByText("1 / 3 done")).toBeTruthy()
    expect(screen.getByRole("button", { name: /add task/i })).toBeTruthy()
  })
})

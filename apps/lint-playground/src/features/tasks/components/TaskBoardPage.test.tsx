import { render, screen } from "@testing-library/react"

import { TaskBoardPage } from "./TaskBoardPage"

describe("TaskBoardPage", () => {
  it("renders the feature page with the seeded board", () => {
    render(<TaskBoardPage />)

    expect(screen.getByText("Tasks")).toBeTruthy()
    expect(screen.getByText("Track small units of work by priority.")).toBeTruthy()
    expect(screen.getByText("Wire up eslint-plugin-boundaries")).toBeTruthy()
  })
})

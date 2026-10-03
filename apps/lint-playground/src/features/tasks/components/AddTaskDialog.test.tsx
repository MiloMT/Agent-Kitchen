import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { AddTaskDialog } from "./AddTaskDialog"

describe("AddTaskDialog", () => {
  it("submits the entered task and closes", async () => {
    const user = userEvent.setup()
    const onAdd = jest.fn()
    render(<AddTaskDialog onAdd={onAdd} />)

    await user.click(screen.getByRole("button", { name: /add task/i }))

    const dialog = screen.getByRole("dialog")
    const titleInput = screen.getByLabelText(/title/i)
    await user.type(titleInput, "Write jest tests")

    const submit = [...screen.getAllByRole("button", { name: /add task/i })].find(
      (button) => dialog.contains(button),
    )
    if (submit === undefined) throw new Error("Submit button not found")
    await user.click(submit)

    expect(onAdd).toHaveBeenCalledWith({
      title: "Write jest tests",
      notes: "",
      priority: "medium",
    })
    expect(screen.queryByRole("dialog")).toBeNull()
  })

  it("keeps the submit button disabled until a title is entered", async () => {
    const user = userEvent.setup()
    const onAdd = jest.fn()
    render(<AddTaskDialog onAdd={onAdd} />)

    await user.click(screen.getByRole("button", { name: /add task/i }))

    const dialog = screen.getByRole("dialog")
    const submit = [...screen.getAllByRole("button", { name: /add task/i })].find(
      (button) => dialog.contains(button),
    )
    if (submit === undefined) throw new Error("Submit button not found")
    expect(submit.hasAttribute("disabled")).toBe(true)

    await user.type(screen.getByLabelText(/title/i), "a")
    expect(submit.hasAttribute("disabled")).toBe(false)

    expect(onAdd).not.toHaveBeenCalled()
  })
})

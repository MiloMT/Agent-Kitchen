import { createTask } from "./createTask"

describe("createTask", () => {
  it("creates an incomplete task using the injected id and clock", () => {
    const task = createTask(
      { title: "Write tests", priority: "high" },
      { id: "id-1", now: 1_700_000_000_000 },
    )

    expect(task).toEqual({
      id: "id-1",
      title: "Write tests",
      notes: undefined,
      priority: "high",
      createdAt: 1_700_000_000_000,
      done: false,
    })
  })

  it("normalizes empty notes to undefined", () => {
    const task = createTask(
      { title: "T", notes: "", priority: "low" },
      { id: "id-2", now: 0 },
    )

    expect(task.notes).toBeUndefined()
  })

  it("keeps provided notes", () => {
    const task = createTask(
      { title: "T", notes: "details", priority: "medium" },
      { id: "id-3", now: 0 },
    )

    expect(task.notes).toBe("details")
  })
})

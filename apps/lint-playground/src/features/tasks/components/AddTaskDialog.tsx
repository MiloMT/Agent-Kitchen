import { useState, type ReactElement } from "react"

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "miloberry"
import { Plus } from "lucide-react"

import { PRIORITIES, PRIORITY_LABELS } from "../constants"
import type { NewTaskInput, Priority } from "../types"

export interface AddTaskDialogProps {
  onAdd: (input: NewTaskInput) => void
}

export function AddTaskDialog({ onAdd }: AddTaskDialogProps): ReactElement {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [notes, setNotes] = useState("")
  const [priority, setPriority] = useState<Priority>("medium")

  const resetForm = (): void => {
    setTitle("")
    setNotes("")
    setPriority("medium")
  }

  const handleSubmit = (): void => {
    const trimmedTitle = title.trim()
    if (trimmedTitle === "") return
    onAdd({ title: trimmedTitle, notes: notes.trim(), priority })
    setOpen(false)
    resetForm()
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen)
        if (!nextOpen) resetForm()
      }}
    >
      <DialogTrigger render={<Button>
        <Plus />
        Add task
      </Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New task</DialogTitle>
          <DialogDescription>
            Add a task to the board. Fields marked with * are required.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="task-title">Title *</Label>
            <Input
              id="task-title"
              value={title}
              placeholder="What needs doing?"
              onChange={(event) => {
                setTitle(event.target.value)
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="task-notes">Notes</Label>
            <Textarea
              id="task-notes"
              value={notes}
              placeholder="Optional details…"
              rows={3}
              onChange={(event) => {
                setNotes(event.target.value)
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="task-priority">Priority</Label>
            <Select<Priority>
              id="task-priority"
              value={priority}
              onValueChange={(value) => {
                if (value !== null) setPriority(value)
              }}
            >
              <SelectTrigger id="task-priority" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {PRIORITIES.map((value) => (
                  <SelectItem key={value} value={value}>
                    {PRIORITY_LABELS[value]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => {
              setOpen(false)
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={(): void => {
              handleSubmit()
            }}
            disabled={title.trim() === ""}
          >
            Add task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

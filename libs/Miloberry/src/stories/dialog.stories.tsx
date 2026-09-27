import type { Meta, StoryObj } from "@storybook/react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Dialog",
  component: Dialog,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Dialog} {...args}>
      <DialogTrigger render={<Button variant="outline" />}>Open dialog</DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>Placeholder dialog description text.</DialogDescription>
        </DialogHeader>
        <p>Placeholder dialog body content.</p>
      </DialogContent>
    </BaseStory>
  ),
}

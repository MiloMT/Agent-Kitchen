import type { Meta, StoryObj } from "@storybook/react"
import { Dialog } from "@/components/ui/dialog"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Dialog",
  component: Dialog,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Dialog} {...args} />,
}

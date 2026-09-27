import type { Meta, StoryObj } from "@storybook/react"
import { AlertDialog } from "@/components/ui/alert-dialog"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={AlertDialog} {...args} />,
}

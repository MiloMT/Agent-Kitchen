import type { Meta, StoryObj } from "@storybook/react"
import { Progress } from "@/components/ui/progress"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Progress",
  component: Progress,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Progress} value={60} className="max-w-sm" {...args} />
  ),
}

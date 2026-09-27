import type { Meta, StoryObj } from "@storybook/react"
import { Command } from "@/components/ui/command"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Command",
  component: Command,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Command} {...args} />,
}

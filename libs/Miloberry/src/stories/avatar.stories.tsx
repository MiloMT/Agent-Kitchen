import type { Meta, StoryObj } from "@storybook/react"
import { Avatar } from "@/components/ui/avatar"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Avatar} {...args} />,
}

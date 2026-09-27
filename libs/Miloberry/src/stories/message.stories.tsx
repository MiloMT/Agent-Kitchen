import type { Meta, StoryObj } from "@storybook/react"
import { Message } from "@/components/ui/message"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Message",
  component: Message,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Message} {...args} />,
}

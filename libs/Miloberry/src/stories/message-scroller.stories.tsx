import type { Meta, StoryObj } from "@storybook/react"
import { MessageScroller } from "@/components/ui/message-scroller"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/MessageScroller",
  component: MessageScroller,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={MessageScroller} {...args} />,
}

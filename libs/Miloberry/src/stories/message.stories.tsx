import type { Meta, StoryObj } from "@storybook/react"
import { MessageGroup, Message, MessageAvatar, MessageContent, MessageFooter } from "@/components/ui/message"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/MessageGroup",
  component: MessageGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={MessageGroup} className="max-w-md" {...args}>
      <Message align="start">
        <MessageAvatar>AB</MessageAvatar>
        <MessageContent>Placeholder incoming message.</MessageContent>
        <MessageFooter>Just now</MessageFooter>
      </Message>
      <Message align="end">
        <MessageAvatar>MB</MessageAvatar>
        <MessageContent>Placeholder outgoing message.</MessageContent>
        <MessageFooter>Sent</MessageFooter>
      </Message>
    </BaseStory>
  ),
}

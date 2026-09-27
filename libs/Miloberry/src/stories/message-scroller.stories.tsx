import type { Meta, StoryObj } from "@storybook/react"
import { MessageScrollerProvider, MessageScroller, MessageScrollerViewport, MessageScrollerContent, MessageScrollerItem } from "@/components/ui/message-scroller"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/MessageScroller",
  component: MessageScroller,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={MessageScrollerProvider} {...args}>
      <MessageScroller className="h-64 max-w-md rounded-md border">
        <MessageScrollerViewport>
          <MessageScrollerContent className="p-4">
            <MessageScrollerItem><p className="text-sm">Placeholder message one.</p></MessageScrollerItem>
            <MessageScrollerItem><p className="text-sm">Placeholder message two.</p></MessageScrollerItem>
            <MessageScrollerItem><p className="text-sm">Placeholder message three.</p></MessageScrollerItem>
            <MessageScrollerItem><p className="text-sm">Placeholder message four.</p></MessageScrollerItem>
          </MessageScrollerContent>
        </MessageScrollerViewport>
      </MessageScroller>
    </BaseStory>
  ),
}

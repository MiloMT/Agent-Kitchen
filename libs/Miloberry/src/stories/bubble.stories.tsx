import type { Meta, StoryObj } from "@storybook/react"
import { BubbleGroup, Bubble, BubbleContent } from "@/components/ui/bubble"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/BubbleGroup",
  component: BubbleGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={BubbleGroup} className="max-w-md" {...args}>
      <Bubble align="start">
        <BubbleContent>Placeholder incoming message bubble.</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>Placeholder outgoing message bubble.</BubbleContent>
      </Bubble>
    </BaseStory>
  ),
}

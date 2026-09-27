import type { Meta, StoryObj } from "@storybook/react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={ScrollArea} {...args} />,
}

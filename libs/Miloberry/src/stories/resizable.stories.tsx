import type { Meta, StoryObj } from "@storybook/react"
import { ResizableHandle } from "@/components/ui/resizable"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/ResizableHandle",
  component: ResizableHandle,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={ResizableHandle} {...args} />,
}

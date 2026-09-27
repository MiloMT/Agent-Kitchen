import type { Meta, StoryObj } from "@storybook/react"
import { Empty } from "@/components/ui/empty"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Empty",
  component: Empty,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Empty} {...args} />,
}

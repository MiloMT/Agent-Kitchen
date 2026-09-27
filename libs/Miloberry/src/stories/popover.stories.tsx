import type { Meta, StoryObj } from "@storybook/react"
import { Popover } from "@/components/ui/popover"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Popover",
  component: Popover,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Popover} {...args} />,
}

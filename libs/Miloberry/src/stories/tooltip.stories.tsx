import type { Meta, StoryObj } from "@storybook/react"
import { Tooltip } from "@/components/ui/tooltip"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Tooltip} {...args} />,
}

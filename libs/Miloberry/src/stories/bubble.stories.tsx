import type { Meta, StoryObj } from "@storybook/react"
import { Bubble } from "@/components/ui/bubble"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Bubble",
  component: Bubble,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Bubble} {...args} />,
}

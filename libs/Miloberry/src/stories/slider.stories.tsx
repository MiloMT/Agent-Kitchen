import type { Meta, StoryObj } from "@storybook/react"
import { Slider } from "@/components/ui/slider"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Slider",
  component: Slider,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Slider} {...args} />,
}

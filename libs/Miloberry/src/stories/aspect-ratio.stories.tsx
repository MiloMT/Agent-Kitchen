import type { Meta, StoryObj } from "@storybook/react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={AspectRatio} {...args} />,
}

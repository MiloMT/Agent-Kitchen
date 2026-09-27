import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "@/components/ui/card"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Card} {...args} />,
}

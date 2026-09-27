import type { Meta, StoryObj } from "@storybook/react"
import { HoverCard } from "@/components/ui/hover-card"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={HoverCard} {...args} />,
}

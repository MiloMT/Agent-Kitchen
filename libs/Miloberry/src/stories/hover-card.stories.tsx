import type { Meta, StoryObj } from "@storybook/react"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={HoverCard} {...args}>
      <HoverCardTrigger render={<Button variant="outline" />}>Hover over me</HoverCardTrigger>
      <HoverCardContent className="w-64">Placeholder hover card content.</HoverCardContent>
    </BaseStory>
  ),
}

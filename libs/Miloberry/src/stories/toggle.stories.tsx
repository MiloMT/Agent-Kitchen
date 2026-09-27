import type { Meta, StoryObj } from "@storybook/react"
import { Toggle } from "@/components/ui/toggle"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Toggle} {...args}>Placeholder toggle</BaseStory>
  ),
}

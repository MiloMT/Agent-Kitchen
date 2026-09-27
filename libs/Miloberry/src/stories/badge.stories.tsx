import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "@/components/ui/badge"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Badge} {...args}>Placeholder badge</BaseStory>
  ),
}

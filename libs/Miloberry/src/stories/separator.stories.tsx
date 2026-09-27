import type { Meta, StoryObj } from "@storybook/react"
import { Separator } from "@/components/ui/separator"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Separator",
  component: Separator,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Separator} className="max-w-sm" {...args} />
  ),
}

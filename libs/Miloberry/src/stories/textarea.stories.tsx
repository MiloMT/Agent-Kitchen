import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "@/components/ui/textarea"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Textarea",
  component: Textarea,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Textarea} className="max-w-sm" placeholder="Placeholder text" {...args} />
  ),
}

import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "@/components/ui/label"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Label",
  component: Label,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Label} {...args} />,
}

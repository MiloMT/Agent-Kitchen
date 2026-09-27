import type { Meta, StoryObj } from "@storybook/react"
import { Sheet } from "@/components/ui/sheet"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Sheet",
  component: Sheet,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Sheet} {...args} />,
}

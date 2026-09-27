import type { Meta, StoryObj } from "@storybook/react"
import { Select } from "@/components/ui/select"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Select} {...args} />,
}

import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "@/components/ui/input"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Input} {...args} />,
}

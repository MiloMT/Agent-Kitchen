import type { Meta, StoryObj } from "@storybook/react"
import { Field } from "@/components/ui/field"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Field",
  component: Field,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Field} {...args} />,
}

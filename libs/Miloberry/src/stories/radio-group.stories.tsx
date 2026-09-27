import type { Meta, StoryObj } from "@storybook/react"
import { RadioGroup } from "@/components/ui/radio-group"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={RadioGroup} {...args} />,
}

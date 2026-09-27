import type { Meta, StoryObj } from "@storybook/react"
import { InputGroup } from "@/components/ui/input-group"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={InputGroup} {...args} />,
}

import type { Meta, StoryObj } from "@storybook/react"
import { ButtonGroup } from "@/components/ui/button-group"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={ButtonGroup} {...args} />,
}

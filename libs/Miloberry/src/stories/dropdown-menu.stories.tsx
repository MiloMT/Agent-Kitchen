import type { Meta, StoryObj } from "@storybook/react"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={DropdownMenu} {...args} />,
}

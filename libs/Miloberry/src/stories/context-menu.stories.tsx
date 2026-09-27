import type { Meta, StoryObj } from "@storybook/react"
import { ContextMenu } from "@/components/ui/context-menu"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={ContextMenu} {...args} />,
}

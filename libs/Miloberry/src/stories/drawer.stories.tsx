import type { Meta, StoryObj } from "@storybook/react"
import { Drawer } from "@/components/ui/drawer"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Drawer",
  component: Drawer,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Drawer} {...args} />,
}

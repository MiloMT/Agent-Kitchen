import type { Meta, StoryObj } from "@storybook/react"
import { Menubar } from "@/components/ui/menubar"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Menubar",
  component: Menubar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Menubar} {...args} />,
}

import type { Meta, StoryObj } from "@storybook/react"
import { Sidebar } from "@/components/ui/sidebar"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Sidebar} {...args} />,
}

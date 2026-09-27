import type { Meta, StoryObj } from "@storybook/react"
import { Tabs } from "@/components/ui/tabs"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Tabs} {...args} />,
}

import type { Meta, StoryObj } from "@storybook/react"
import { Switch } from "@/components/ui/switch"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Switch",
  component: Switch,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Switch} {...args} />,
}

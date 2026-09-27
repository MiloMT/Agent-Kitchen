import type { Meta, StoryObj } from "@storybook/react"
import { Toast } from "@/components/ui/toast"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Toast",
  component: Toast,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Toast} {...args} />,
}

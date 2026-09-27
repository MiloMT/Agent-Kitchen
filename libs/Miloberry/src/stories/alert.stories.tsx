import type { Meta, StoryObj } from "@storybook/react"
import { Alert } from "@/components/ui/alert"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Alert",
  component: Alert,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Alert} {...args} />,
}

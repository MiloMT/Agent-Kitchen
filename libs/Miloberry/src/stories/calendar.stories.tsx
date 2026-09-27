import type { Meta, StoryObj } from "@storybook/react"
import { Calendar } from "@/components/ui/calendar"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Calendar",
  component: Calendar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Calendar} {...args} />,
}

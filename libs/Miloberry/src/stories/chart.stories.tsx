import type { Meta, StoryObj } from "@storybook/react"
import { ChartContainer } from "@/components/ui/chart"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/ChartContainer",
  component: ChartContainer,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={ChartContainer} {...args} />,
}

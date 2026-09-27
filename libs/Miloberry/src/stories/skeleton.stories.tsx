import type { Meta, StoryObj } from "@storybook/react"
import { Skeleton } from "@/components/ui/skeleton"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Skeleton} {...args} />,
}

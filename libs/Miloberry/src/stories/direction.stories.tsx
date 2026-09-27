import type { Meta, StoryObj } from "@storybook/react"
import { DirectionProvider } from "@/components/ui/direction"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/DirectionProvider",
  component: DirectionProvider,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={DirectionProvider} {...args} />,
}

import type { Meta, StoryObj } from "@storybook/react"
import { Carousel } from "@/components/ui/carousel"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Carousel",
  component: Carousel,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Carousel} {...args} />,
}

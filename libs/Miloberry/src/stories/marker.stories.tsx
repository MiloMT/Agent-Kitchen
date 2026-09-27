import type { Meta, StoryObj } from "@storybook/react"
import { Marker } from "@/components/ui/marker"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Marker",
  component: Marker,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Marker} {...args} />,
}

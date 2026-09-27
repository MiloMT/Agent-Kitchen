import type { Meta, StoryObj } from "@storybook/react"
import { Accordion } from "@/components/ui/accordion"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Accordion",
  component: Accordion,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Accordion} {...args} />,
}

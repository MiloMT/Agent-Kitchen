import type { Meta, StoryObj } from "@storybook/react"
import { Collapsible } from "@/components/ui/collapsible"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Collapsible} {...args} />,
}

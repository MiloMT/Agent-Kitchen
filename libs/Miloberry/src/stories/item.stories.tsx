import type { Meta, StoryObj } from "@storybook/react"
import { Item } from "@/components/ui/item"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Item",
  component: Item,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Item} {...args} />,
}

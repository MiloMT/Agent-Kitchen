import type { Meta, StoryObj } from "@storybook/react"
import { Combobox } from "@/components/ui/combobox"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Combobox",
  component: Combobox,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Combobox} {...args} />,
}

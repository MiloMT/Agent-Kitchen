import type { Meta, StoryObj } from "@storybook/react"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Kbd",
  component: Kbd,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={KbdGroup} {...args}>
      <Kbd>Ctrl</Kbd>
      <Kbd>K</Kbd>
    </BaseStory>
  ),
}

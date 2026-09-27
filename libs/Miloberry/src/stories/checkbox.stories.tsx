import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "@/components/ui/checkbox"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Checkbox} defaultChecked aria-label="Placeholder checkbox" {...args} />
  ),
}

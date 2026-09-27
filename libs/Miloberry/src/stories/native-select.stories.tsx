import type { Meta, StoryObj } from "@storybook/react"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/NativeSelect",
  component: NativeSelect,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={NativeSelect} className="max-w-sm" defaultValue="" {...args}>
      <NativeSelectOption value="">Select an option...</NativeSelectOption>
      <NativeSelectOption value="one">Option one</NativeSelectOption>
      <NativeSelectOption value="two">Option two</NativeSelectOption>
    </BaseStory>
  ),
}

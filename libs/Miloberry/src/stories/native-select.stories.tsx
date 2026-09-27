import type { Meta, StoryObj } from "@storybook/react"
import { NativeSelect } from "@/components/ui/native-select"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/NativeSelect",
  component: NativeSelect,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={NativeSelect} {...args} />,
}

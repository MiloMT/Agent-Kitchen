import type { Meta, StoryObj } from "@storybook/react"
import { InputOTP } from "@/components/ui/input-otp"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/InputOTP",
  component: InputOTP,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={InputOTP} {...args} />,
}

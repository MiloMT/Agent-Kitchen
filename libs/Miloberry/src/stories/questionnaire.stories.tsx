import type { Meta, StoryObj } from "@storybook/react"
import { Questionnaire } from "@/components/ui/questionnaire"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Questionnaire",
  component: Questionnaire,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Questionnaire} {...args} />,
}

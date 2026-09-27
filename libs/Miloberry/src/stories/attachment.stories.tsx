import type { Meta, StoryObj } from "@storybook/react"
import { Attachment } from "@/components/ui/attachment"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Attachment",
  component: Attachment,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Attachment} {...args} />,
}

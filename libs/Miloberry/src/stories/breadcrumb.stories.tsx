import type { Meta, StoryObj } from "@storybook/react"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Breadcrumb} {...args} />,
}

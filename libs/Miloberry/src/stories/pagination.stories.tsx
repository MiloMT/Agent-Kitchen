import type { Meta, StoryObj } from "@storybook/react"
import { Pagination } from "@/components/ui/pagination"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Pagination",
  component: Pagination,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Pagination} {...args} />,
}

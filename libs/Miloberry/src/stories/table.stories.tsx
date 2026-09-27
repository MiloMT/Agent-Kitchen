import type { Meta, StoryObj } from "@storybook/react"
import { Table } from "@/components/ui/table"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Table",
  component: Table,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={Table} {...args} />,
}

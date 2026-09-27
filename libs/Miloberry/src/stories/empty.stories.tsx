import type { Meta, StoryObj } from "@storybook/react"
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/ui/empty"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Empty",
  component: Empty,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Empty} className="max-w-md border border-dashed rounded-lg" {...args}>
      <EmptyHeader>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>Placeholder empty state description text.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>Placeholder action</EmptyContent>
    </BaseStory>
  ),
}

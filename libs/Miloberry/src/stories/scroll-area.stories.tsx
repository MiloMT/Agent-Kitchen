import type { Meta, StoryObj } from "@storybook/react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={ScrollArea} className="h-40 max-w-sm rounded-md border p-4" {...args}>
      <p className="text-sm">Placeholder paragraph one.</p>
      <p className="mt-2 text-sm">Placeholder paragraph two.</p>
      <p className="mt-2 text-sm">Placeholder paragraph three.</p>
      <p className="mt-2 text-sm">Placeholder paragraph four.</p>
      <p className="mt-2 text-sm">Placeholder paragraph five.</p>
    </BaseStory>
  ),
}

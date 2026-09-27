import type { Meta, StoryObj } from "@storybook/react"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Collapsible} className="max-w-sm space-y-2" defaultOpen {...args}>
      <CollapsibleTrigger>Toggle section</CollapsibleTrigger>
      <CollapsibleContent>Placeholder collapsible content.</CollapsibleContent>
    </BaseStory>
  ),
}

import type { Meta, StoryObj } from "@storybook/react"
import { Popover, PopoverTrigger, PopoverContent, PopoverTitle, PopoverDescription } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Popover",
  component: Popover,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Popover} {...args}>
      <PopoverTrigger render={<Button variant="outline" />}>Open popover</PopoverTrigger>
      <PopoverContent className="w-64">
        <PopoverTitle>Popover title</PopoverTitle>
        <PopoverDescription>Placeholder popover description text.</PopoverDescription>
      </PopoverContent>
    </BaseStory>
  ),
}

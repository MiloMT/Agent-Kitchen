import type { Meta, StoryObj } from "@storybook/react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={ToggleGroup} type="multiple" {...args}>
      <ToggleGroupItem value="one" aria-label="Toggle one">One</ToggleGroupItem>
      <ToggleGroupItem value="two" aria-label="Toggle two">Two</ToggleGroupItem>
      <ToggleGroupItem value="three" aria-label="Toggle three">Three</ToggleGroupItem>
    </BaseStory>
  ),
}

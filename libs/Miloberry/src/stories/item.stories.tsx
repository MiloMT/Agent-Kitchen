import type { Meta, StoryObj } from "@storybook/react"
import { Item, ItemGroup, ItemContent, ItemTitle, ItemDescription, ItemActions } from "@/components/ui/item"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Item",
  component: Item,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={ItemGroup} className="max-w-md" {...args}>
      <Item>
        <ItemContent>
          <ItemTitle>Item title</ItemTitle>
          <ItemDescription>Placeholder item description text.</ItemDescription>
        </ItemContent>
        <ItemActions>Open</ItemActions>
      </Item>
      <Item>
        <ItemContent>
          <ItemTitle>Another item</ItemTitle>
          <ItemDescription>Placeholder item description text.</ItemDescription>
        </ItemContent>
        <ItemActions>Open</ItemActions>
      </Item>
    </BaseStory>
  ),
}

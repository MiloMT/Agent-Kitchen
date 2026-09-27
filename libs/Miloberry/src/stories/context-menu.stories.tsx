import type { Meta, StoryObj } from "@storybook/react"
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuSeparator } from "@/components/ui/context-menu"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={ContextMenu} {...args}>
      <ContextMenuTrigger className="flex h-40 max-w-md items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Item one</ContextMenuItem>
        <ContextMenuItem>Item two</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Item three</ContextMenuItem>
      </ContextMenuContent>
    </BaseStory>
  ),
}

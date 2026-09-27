import type { Meta, StoryObj } from "@storybook/react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={DropdownMenu} {...args}>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Open menu</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Placeholder label</DropdownMenuLabel>
        <DropdownMenuItem>Item one<DropdownMenuShortcut>⌘1</DropdownMenuShortcut></DropdownMenuItem>
        <DropdownMenuItem>Item two<DropdownMenuShortcut>⌘2</DropdownMenuShortcut></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Item three</DropdownMenuItem>
      </DropdownMenuContent>
    </BaseStory>
  ),
}

import type { Meta, StoryObj } from "@storybook/react"
import { Command, CommandInput, CommandList, CommandGroup, CommandItem } from "@/components/ui/command"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Command",
  component: Command,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Command} className="max-w-md rounded-md border" {...args}>
      <CommandInput placeholder="Type a command..." />
      <CommandList>
        <CommandGroup heading="Suggestions">
          <CommandItem>Item one</CommandItem>
          <CommandItem>Item two</CommandItem>
          <CommandItem>Item three</CommandItem>
        </CommandGroup>
      </CommandList>
    </BaseStory>
  ),
}

import type { Meta, StoryObj } from "@storybook/react"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Sheet",
  component: Sheet,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Sheet} {...args}>
      <SheetTrigger render={<Button variant="outline" />}>Open sheet</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet title</SheetTitle>
          <SheetDescription>Placeholder sheet description text.</SheetDescription>
        </SheetHeader>
        <p className="p-4">Placeholder sheet body content.</p>
      </SheetContent>
    </BaseStory>
  ),
}

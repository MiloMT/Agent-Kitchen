import type { Meta, StoryObj } from "@storybook/react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={RadioGroup} defaultValue="a" className="grid max-w-sm gap-3" {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="a" id="radio-a" />
        <Label htmlFor="radio-a">Option A</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="b" id="radio-b" />
        <Label htmlFor="radio-b">Option B</Label>
      </div>
    </BaseStory>
  ),
}

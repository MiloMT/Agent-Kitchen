import type { Meta, StoryObj } from "@storybook/react"
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Field",
  component: Field,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Field} className="max-w-sm" {...args}>
      <FieldLabel htmlFor="field-demo">Field label</FieldLabel>
      <Input id="field-demo" placeholder="Placeholder input" />
      <FieldDescription>Placeholder helper text for the field.</FieldDescription>
    </BaseStory>
  ),
}

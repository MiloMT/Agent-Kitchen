import type { Meta, StoryObj } from "@storybook/react"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from "@/components/ui/input-group"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={InputGroup} className="max-w-sm" {...args}>
      <InputGroupAddon><InputGroupText>https://</InputGroupText></InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
      <InputGroupAddon><InputGroupButton>Go</InputGroupButton></InputGroupAddon>
    </BaseStory>
  ),
}

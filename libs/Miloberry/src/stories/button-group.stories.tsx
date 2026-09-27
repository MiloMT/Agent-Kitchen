import type { Meta, StoryObj } from "@storybook/react"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={ButtonGroup} {...args}>
      <Button variant="outline">One</Button>
      <Button variant="outline">Two</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Three</Button>
    </BaseStory>
  ),
}

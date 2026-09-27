import type { Meta, StoryObj } from "@storybook/react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Alert",
  component: Alert,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Alert} className="max-w-md" {...args}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>Placeholder alert description text goes here.</AlertDescription>
    </BaseStory>
  ),
}

import type { Meta, StoryObj } from "@storybook/react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={AspectRatio} ratio={16 / 9} className="max-w-md overflow-hidden rounded-md bg-muted" {...args}>
      <div className="flex h-full items-center justify-center text-sm text-muted-foreground">16:9 placeholder</div>
    </BaseStory>
  ),
}

import type { Meta, StoryObj } from "@storybook/react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Card} className="w-full max-w-sm" {...args}>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Placeholder card description text.</CardDescription>
      </CardHeader>
      <CardContent>Placeholder card content goes here.</CardContent>
      <CardFooter>Card footer</CardFooter>
    </BaseStory>
  ),
}

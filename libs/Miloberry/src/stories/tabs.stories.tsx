import type { Meta, StoryObj } from "@storybook/react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Tabs} defaultValue="one" className="max-w-md" {...args}>
      <TabsList>
        <TabsTrigger value="one">Tab one</TabsTrigger>
        <TabsTrigger value="two">Tab two</TabsTrigger>
      </TabsList>
      <TabsContent value="one">Placeholder content for tab one.</TabsContent>
      <TabsContent value="two">Placeholder content for tab two.</TabsContent>
    </BaseStory>
  ),
}

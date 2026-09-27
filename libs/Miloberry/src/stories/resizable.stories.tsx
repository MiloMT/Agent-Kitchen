import type { Meta, StoryObj } from "@storybook/react"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/ResizablePanelGroup",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={ResizablePanelGroup} direction="horizontal" className="h-48 max-w-lg rounded-md border" {...args}>
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">Panel one</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">Panel two</div>
      </ResizablePanel>
    </BaseStory>
  ),
}

import type { Meta, StoryObj } from "@storybook/react"
import { ToastProvider, Toaster, toast } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Toast",
  component: ToastProvider,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={ToastProvider} {...args}>
      <Button
        variant="outline"
        onClick={() => toast.add({ title: "Toast title", description: "Placeholder toast description." })}
      >
        Show toast
      </Button>
      <Toaster />
    </BaseStory>
  ),
}

import type { Meta, StoryObj } from "@storybook/react"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerSwipeHandle } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Drawer",
  component: Drawer,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Drawer} {...args}>
      <DrawerTrigger render={<Button variant="outline" />}>Open drawer</DrawerTrigger>
      <DrawerContent>
        <DrawerSwipeHandle />
        <DrawerHeader>
          <DrawerTitle>Drawer title</DrawerTitle>
          <DrawerDescription>Placeholder drawer description text.</DrawerDescription>
        </DrawerHeader>
        <p className="p-4">Placeholder drawer body content.</p>
      </DrawerContent>
    </BaseStory>
  ),
}

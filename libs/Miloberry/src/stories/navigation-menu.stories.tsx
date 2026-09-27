import type { Meta, StoryObj } from "@storybook/react"
import { NavigationMenu } from "@/components/ui/navigation-menu"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => <BaseStory Component={NavigationMenu} {...args} />,
}

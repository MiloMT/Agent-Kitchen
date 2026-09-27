import type { Meta, StoryObj } from "@storybook/react"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, NavigationMenuPositioner, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={NavigationMenu} {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
          <NavigationMenuPositioner>
            <NavigationMenuContent className="flex w-64 flex-col gap-1 p-2">
              <NavigationMenuLink href="#">Placeholder link one</NavigationMenuLink>
              <NavigationMenuLink href="#">Placeholder link two</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuPositioner>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>Docs</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </BaseStory>
  ),
}

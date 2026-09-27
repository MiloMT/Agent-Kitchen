import type { Meta, StoryObj } from "@storybook/react"
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={SidebarProvider} className="min-h-80 rounded-md border" {...args}>
      <Sidebar>
        <SidebarHeader>Sidebar header</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Placeholder group</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem><SidebarMenuButton>Menu item one</SidebarMenuButton></SidebarMenuItem>
                <SidebarMenuItem><SidebarMenuButton>Menu item two</SidebarMenuButton></SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>Sidebar footer</SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <div className="flex flex-col gap-2 p-4">
          <SidebarTrigger />
          <p className="text-sm">Placeholder main content.</p>
        </div>
      </SidebarInset>
    </BaseStory>
  ),
}

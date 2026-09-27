import type { Meta, StoryObj } from "@storybook/react"
import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem } from "@/components/ui/combobox"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Combobox",
  component: Combobox,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Combobox} className="max-w-sm" {...args}>
      <ComboboxInput placeholder="Search items..." />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxItem value="apple">Apple</ComboboxItem>
          <ComboboxItem value="banana">Banana</ComboboxItem>
          <ComboboxItem value="cherry">Cherry</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </BaseStory>
  ),
}

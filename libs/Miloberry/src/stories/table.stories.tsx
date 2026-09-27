import type { Meta, StoryObj } from "@storybook/react"
import { Table, TableHeader, TableBody, TableCaption, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Table",
  component: Table,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Table} {...args}>
      <TableCaption>Placeholder table caption.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Placeholder A</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Placeholder B</TableCell>
          <TableCell>Inactive</TableCell>
        </TableRow>
      </TableBody>
    </BaseStory>
  ),
}

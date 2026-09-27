import type { Meta, StoryObj } from "@storybook/react"
import { ChartContainer } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/ChartContainer",
  component: ChartContainer,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory
      Component={ChartContainer}
      config={{ count: { label: "Count", color: "var(--primary)" } }}
      className="h-56 w-full max-w-md"
      {...args}
    >
      <BarChart
        data={[
          { month: "Jan", count: 12 },
          { month: "Feb", count: 19 },
          { month: "Mar", count: 7 },
          { month: "Apr", count: 15 },
        ]}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <Bar dataKey="count" fill="var(--color-count)" radius={4} />
      </BarChart>
    </BaseStory>
  ),
}

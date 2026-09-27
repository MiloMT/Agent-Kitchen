import type { Meta, StoryObj } from "@storybook/react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Carousel",
  component: Carousel,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Carousel} className="max-w-md" {...args}>
      <CarouselContent>
        <CarouselItem>
          <div className="flex h-32 items-center justify-center rounded-md border text-sm text-muted-foreground">Slide one</div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex h-32 items-center justify-center rounded-md border text-sm text-muted-foreground">Slide two</div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex h-32 items-center justify-center rounded-md border text-sm text-muted-foreground">Slide three</div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </BaseStory>
  ),
}

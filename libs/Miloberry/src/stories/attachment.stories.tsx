import type { Meta, StoryObj } from "@storybook/react"
import { Attachment, AttachmentContent, AttachmentTitle, AttachmentDescription, AttachmentActions, AttachmentAction, AttachmentMedia } from "@/components/ui/attachment"
import { FileIcon, DownloadIcon } from "lucide-react"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Attachment",
  component: Attachment,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Attachment} className="max-w-md" {...args}>
      <AttachmentMedia variant="icon">
        <FileIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>document.pdf</AttachmentTitle>
        <AttachmentDescription>2.4 MB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Download">
          <DownloadIcon />
        </AttachmentAction>
      </AttachmentActions>
    </BaseStory>
  ),
}

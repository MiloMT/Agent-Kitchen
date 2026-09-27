import type { Meta, StoryObj } from "@storybook/react"
import { Questionnaire, QuestionnaireItem, QuestionnaireTitle, QuestionnaireDescription, QuestionnaireChoices, QuestionnaireChoice } from "@/components/ui/questionnaire"
import { BaseStory } from "@/lib/create-story"

const meta: Meta<any> = {
  title: "UI/Questionnaire",
  component: Questionnaire,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <BaseStory Component={Questionnaire} className="max-w-md" {...args}>
      <QuestionnaireItem name="questionnaire-demo">
        <QuestionnaireTitle>Which option do you prefer?</QuestionnaireTitle>
        <QuestionnaireDescription>Placeholder questionnaire description.</QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="a">Option A</QuestionnaireChoice>
          <QuestionnaireChoice value="b">Option B</QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
    </BaseStory>
  ),
}

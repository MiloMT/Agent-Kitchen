import type { ComponentType, ReactNode } from "react"

/**
 * Generic base story renderer for Miloberry component stories.
 *
 * Every story renders through this wrapper so all stories share the same
 * shape. Customize individual stories later by passing args to it:
 *
 *   export const Default: Story = {
 *     render: (args) => <BaseStory Component={Button} {...args}>Click</BaseStory>,
 *   }
 */
export function BaseStory({
  Component,
  children,
  ...props
}: {
  Component: ComponentType<any>
  children?: ReactNode
} & Record<string, unknown>) {
  return <Component {...props}>{children}</Component>
}

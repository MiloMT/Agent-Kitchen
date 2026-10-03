import { Outlet } from "react-router"
import type { ReactElement } from "react"

/**
 * App chrome shared by every route. Pure layout — no data fetching, no state.
 */
export function RootLayout(): ReactElement {
  return (
    <main className="mx-auto flex min-h-dvh max-w-5xl flex-col gap-6 p-6">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Task Board</h1>
        <p className="text-sm text-muted-foreground">
          A sample app built exclusively from Miloberry components, wired up for
          strict linting experiments.
        </p>
      </header>
      <Outlet />
    </main>
  )
}

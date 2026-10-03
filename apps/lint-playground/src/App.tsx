import { RouterProvider } from "react-router"
import type { ReactElement } from "react"

import { router } from "@/routes"

export function App(): ReactElement {
  return <RouterProvider router={router} />
}

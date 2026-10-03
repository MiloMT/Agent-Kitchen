import { createBrowserRouter, Navigate } from "react-router"

import { TaskBoardPage } from "@/features/tasks"

import { RootLayout } from "./root-layout"

/**
 * Route table. Routes live here, not inside features: a feature never knows
 * its own URL. Page components come from feature public APIs (index.ts).
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <TaskBoardPage /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
])

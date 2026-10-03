import { createBrowserRouter, Navigate } from "react-router"

import { TaskBoardPage } from "@/features/tasks"

import { RootLayout } from "./RootLayout"

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

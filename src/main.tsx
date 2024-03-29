import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.tsx'
import Lesson from './pages/Lesson.tsx'
import LessonProvider from './context/LessonContext.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <Home />},
      {path: '/lesson/:lessonId', element: <Lesson />},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LessonProvider>
      <RouterProvider router={router} />
    </LessonProvider>
  </React.StrictMode>,
)

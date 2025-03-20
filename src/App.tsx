import { StrictMode } from 'react'

import './App.css'
import Root from './pages/Root'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  
  const mainRouter = createBrowserRouter([
    {path:"/", element: <Root/>},
    {path:"/test", element: <> a </>},
  ]);

  return (
    <StrictMode>
      <RouterProvider router={mainRouter}></RouterProvider>
    </StrictMode>
  )
}

export default App

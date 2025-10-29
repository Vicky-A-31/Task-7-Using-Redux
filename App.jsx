import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './CSS/App.css'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

function AppRoutes() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <NotFound />, 
    },
    {
      path: '/:name',
      element: <Home />
    }
  ])

  return <RouterProvider router={router} />
}

function App() {

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App

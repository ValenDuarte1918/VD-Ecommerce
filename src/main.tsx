import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutMain } from './components/Layouts/LayoutMain.tsx'
import './index.css'
import { Home } from './pages/Home/Home.tsx'
import { CartProvider } from './context/CartProvider.tsx'
import { Checkout } from './pages/CheckOut/Checkout.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      { index: true, element: <Home /> },
      {path: '/checkout', element: <Checkout />}
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
    <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>
)

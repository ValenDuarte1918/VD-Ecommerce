import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutMain } from './components/Layouts/LayoutMain.tsx'
import './index.css'
import { Cart } from './pages/Cart/Cart.tsx'
import { Home } from './pages/Home/Home.tsx'
import { CartProvider } from './context/CartProvider.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      { index: true, element: <Home /> },
      {path: 'cart', element: <Cart />}
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

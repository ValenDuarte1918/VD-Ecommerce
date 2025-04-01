import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LayoutMain } from './components/Layouts/LayoutMain.tsx';
import './index.css';
import Home from './pages/Home/Home.tsx';
import { CartProvider } from './context/CartProvider.tsx';
import { Checkout } from './pages/CheckOut/Checkout.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import Login from './pages/Login/Login.tsx';
import Dashboard from './pages/DashBoard/Dashboard.tsx';

/**
 * Cliente de React Query.
 * Se utiliza para manejar el estado de las consultas y mutaciones en la aplicación.
 * @type {QueryClient}
 */
const queryClient = new QueryClient();

/**
 * Configuración de las rutas de la aplicación.
 * Define las rutas principales y sus componentes asociados.
 * @type {Object[]}
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      { index: true, element: <Home /> }, // Ruta principal
      { path: '/checkout', element: <Checkout /> }, // Ruta de checkout
    ],
  },
  {
    path: '/login',
    element: <Login />, // Ruta de login
  },
  {
    path: '/dashboard',
    element: <Dashboard />, // Ruta del dashboard
  },
]);

/**
 * Renderiza la aplicación principal en el DOM.
 * Envuelve la aplicación con los proveedores necesarios, como React Query y el contexto del carrito.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </QueryClientProvider>
  </StrictMode>
);

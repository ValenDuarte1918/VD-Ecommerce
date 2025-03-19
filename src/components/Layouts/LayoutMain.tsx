import {Outlet} from 'react-router-dom';
import { Navbar } from '../Ui/NavBar/Navbar';
export const LayoutMain = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

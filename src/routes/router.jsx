import {createBrowserRouter} from 'react-router-dom'
import Home from '../view/Home'
import About from '../view/About'
import Work from '../view/Work'
import Nopage from '../view/Nopage'

const routes = createBrowserRouter([
  {
    path: "/",
    name: "Home",
    element: <Home/>,
    errorElement: <Nopage/>
  },
  {
    path: "/about",
    name: "About",
    element: <About/>,
    errorElement:<Nopage/>
  },
   {
    path: "/work",
    name: "Work",
    element: <Work/>,
    errorElement:<Nopage/>
  },

]);

export default routes;
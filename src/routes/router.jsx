import {createBrowserRouter} from 'react-router-dom'
import Home from '../view/Home'
import About from '../view/About'
import Nopage from '../view/Nopage'

const routes = createBrowserRouter([
  {
    path: "/",
    name: "Home",
    element: <Home/>,
  },
  {
    path: "/about",
    name: "About",
    element: <About/>,
  },
  {
    path: "/notfound",
    name: "Nopage",
    element: <Nopage/>,
  },
]);

export default routes;
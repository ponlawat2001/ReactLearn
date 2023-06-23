import Home from "../view/Home";
import About from "../view/About";
import Work from "../view/Work";

const pagesData = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "about",
    element: <About />,
    title: "about",
  },
  {
    path: "work",
    element: <Work />,
    title: "work",
  },
];

export default pagesData;

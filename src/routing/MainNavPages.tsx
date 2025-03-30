import Home from "../pages/Home/Home";

export const mainNavPages = [
    {
      path: "/",
      textKey: "nav.home",
      element: <Home></Home>
    },
    {
      path: "/about",
      textKey: "nav.about",
      element: <p>ABOUT</p>
    },
    {
      path: "/contact",
      textKey: "nav.contact",
      element: <p>CONTACT ME</p>
    }
  ];
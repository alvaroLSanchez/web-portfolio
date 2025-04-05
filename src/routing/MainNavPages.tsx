import Home from "../pages/Home/Home";

export const mainNavPages = [
    {
      path: "/",
      textKey: "nav.home",
      element: <Home />,
      isMain: true
    },
    {
      path: "/about",
      textKey: "nav.about",
      element: <p>Acerca de</p>
    },
    {
      path: "/contact",
      textKey: "nav.contact",
      element: <p> Contacto </p>
    }
];
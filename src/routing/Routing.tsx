
import { createHashRouter, RouterProvider } from 'react-router-dom'
import RouterLayout from './RouterLayout';
import { mainNavPages } from './MainNavPages';



const mainRouter = createHashRouter([
  {
    element: <RouterLayout />,
    children:
      mainNavPages.map(page=>{
        return ({
          path: page.path,
          element: page.element
        });
      })
  }

]);

function Routing() {
    return(
        <RouterProvider router={mainRouter} />
    );
}

export default Routing;
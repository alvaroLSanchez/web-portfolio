import { HashRouter, Route, Routes } from 'react-router-dom'
import { mainNavPages } from './MainNavPages';
import RouterLayout from './RouterLayout';

function Routing() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RouterLayout />}>
          {mainNavPages.map(page => {
            return <Route
              path={page.path}
              key={page.path}
              index={page.isMain}
              element={page.element}
            />
          })}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Routing;
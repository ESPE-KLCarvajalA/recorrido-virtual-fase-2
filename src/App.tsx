import './App.css'
import { Link, Outlet, RouteObject, useRoutes } from 'react-router-dom';

// ✅ Importación correcta - NavigationPanel ya no necesita props
import NavigationPanel from './components/ui/NavigationPanel';

import BaseSceneEntrada from './scenes/home/BaseSceneEntrada';
import BaseSceneLab1CC from './scenes/lab1/BaseSceneLab1CC';
import BaseSceneLab2CC from './scenes/lab2/BaseSceneLab2CC';
import BaseSceneLab3CC from './scenes/lab3/BaseSceneLab3CC';
import BaseSceneLab4CC from './scenes/lab4/BaseSceneLab4CC';
import BaseSceneLab5CC from './scenes/lab5/BaseSceneLab5CC';
import BaseSceneLab6CC from './scenes/lab6/BaseSceneLab6CC';

function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <BaseSceneEntrada /> },
        { path: "entrada", element: <BaseSceneEntrada /> },
        { path: "lab1", element: <BaseSceneLab1CC /> },
        { path: "lab2", element: <BaseSceneLab2CC /> },
        { path: "lab3", element: <BaseSceneLab3CC /> },
        { path: "lab4", element: <BaseSceneLab4CC /> },
        { path: "lab5", element: <BaseSceneLab5CC /> },
        { path: "lab6", element: <BaseSceneLab6CC /> },
        { path: "*", element: <NoMatch /> },
      ],
    },
  ];

  const element = useRoutes(routes);

  return (
    <>
      {element}
    </>
  );
}

function Layout() {

  return (
    <>
      <Outlet />
      <div className="dot" />

      {/* ✅ Panel de navegación sin props - completamente autónomo */}
      <NavigationPanel />
    </>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to={`${import.meta.env.BASE_URL}`}>Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
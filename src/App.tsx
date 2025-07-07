import './App.css'
import { Link, Outlet, RouteObject, useRoutes } from 'react-router-dom';

import BaseSceneEntrada from './scenes/home/BaseSceneEntrada';
import BaseSceneLab1 from './scenes/lab1/BaseSceneLab1';

function App() {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <BaseSceneEntrada /> },
        

        { path: "entrada", element: <BaseSceneEntrada /> },
        { path: "lab1", element: <BaseSceneLab1 /> },


        { path: "*", element: <NoMatch /> },
      ],
    },
  ];

  let element = useRoutes(routes);

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

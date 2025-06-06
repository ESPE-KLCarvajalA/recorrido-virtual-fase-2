import './App.css'
import { Link, Outlet, RouteObject, useRoutes } from 'react-router-dom';

// import BaseSceneCancha from './scenes/cancha/BaseSceneCancha';
import BaseSceneEntrada from './scenes/entrada/BaseSceneEntrada';

function App() {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <BaseSceneEntrada /> },
        

        { path: "entrada", element: <BaseSceneEntrada /> },

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

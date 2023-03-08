import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, ErrorPage, Genres, Platforms } from 'pages';
import { AppLayout } from 'layouts';
const routes = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/genres',
        element: <Genres />
      },
      {
        path: '/platforms',
        element: <Platforms />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
];
const router = createBrowserRouter(routes);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;

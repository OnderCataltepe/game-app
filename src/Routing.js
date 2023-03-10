import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, ErrorPage, Genres, Platforms, GenreList, PlatformList } from 'pages';
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
        path: '/genres/:genreId',
        element: <GenreList />,
        errorElement: <ErrorPage />
      },
      {
        path: '/platforms',
        element: <Platforms />
      },
      {
        path: '/platforms/:platformId',
        element: <PlatformList />
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

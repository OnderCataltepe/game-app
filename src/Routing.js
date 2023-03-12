import * as React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, ErrorPage, Genres, Platforms, SearchResults } from 'pages';
import { AppLayout } from 'layouts';
import { Loading } from 'components';
const GameDetails = React.lazy(() => import('./pages/game/GameDetails'));
const GenreList = React.lazy(() => import('./pages/genres/GenreList'));
const PlatformList = React.lazy(() => import('./pages/platform/PlatformList'));

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
        element: (
          <React.Suspense fallback={<Loading />}>
            <GenreList />
          </React.Suspense>
        )
      },
      {
        path: '/platforms',
        element: <Platforms />
      },
      {
        path: '/platforms/:platformId',
        element: (
          <React.Suspense fallback={<Loading />}>
            <PlatformList />
          </React.Suspense>
        )
      },
      {
        path: '/search',
        element: <SearchResults />
      },
      {
        path: '/games/:gameId',
        element: (
          <React.Suspense fallback={<Loading />}>
            <GameDetails />
          </React.Suspense>
        )
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

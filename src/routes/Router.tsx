import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';

/* import paths from 'routes/paths'; */
const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const FetchData = lazy(() => import('pages/FetchData'));
//const Email = lazy(() => import('pages/Email'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));

/* const routeChildren = [
  { path: paths.home, element: <Home /> },
  { path: paths.contacts, element: <Contacts /> },
  { path: paths.fetchData, element: <FetchData /> },
  { path: paths.email, element: <Email /> },
  { path: paths.error, element: <ErrorPage /> },
]; */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    // children: routeChildren,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/FetchData',
        element: <FetchData />,
      },
      {
        path: '/Contacts',
        element: <Contacts />,
      },
    ],
  },
]);

export default router;

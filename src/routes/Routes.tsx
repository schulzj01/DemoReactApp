import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import paths from 'routes/paths';
import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const FetchData = lazy(() => import('pages/FetchData'));
const Email = lazy(() => import('pages/Email'));
const Page404 = lazy(() => import('pages/Page404'));

const routeChildren = [
  { path: paths.home, element: <Home /> },
  { path: paths.contacts, element: <Contacts /> },
  { path: paths.fetchData, element: <FetchData /> },
  { path: paths.email, element: <Email /> },
  { path: paths.page404, element: <Page404 /> },
];
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Page404 />,
    children: routeChildren,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;

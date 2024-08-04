import ErrorPage from 'features/ErrorPage';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';

/* const routeChildren = [
  { path: paths.home, element: <Home /> },
  { path: paths.contacts, element: <Contacts /> },
  { path: paths.fetchData, element: <FetchData /> },
  { path: paths.email, element: <Email /> },
  { path: paths.error, element: <ErrorPage /> },
]; */

/**
 * React router is expecting a default component for lazy loads. This is just a shortcut to provide that
 * @param componentFile - The path to the component file to be imported
 * @returns - A lazy loaded promise that points to the default exported component
 */
function getDefaultComponent(componentFile: string) {
  return async () => {
    let component = await import(componentFile);
    return { Component: component.default };
  };
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    // children: routeChildren,
    children: [
      {
        path: '/',
        lazy: getDefaultComponent('features/Home'),
      },
      {
        path: '/FetchData',
        lazy: getDefaultComponent('features/FetchData'),
      },
      {
        path: '/Contacts',
        lazy: getDefaultComponent('features/Contacts'),
      },
      {
        path: '/Email',
        lazy: getDefaultComponent('features/Email'),
      },
    ],
  },
]);

export default router;

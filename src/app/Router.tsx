import ErrorPage from 'features/ErrorPage';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';

// @todo.  Want to come back to this to better map routes through the application.  This will ensure that any
// changes we make to certain endpoints are captured everywhere.
/* const routeChildren = [
  { path: paths.home, element: <Home /> },
  { path: paths.contacts, element: <Contacts /> },
  { path: paths.fetchData, element: <FetchData /> },
  { path: paths.email, element: <Email /> },
  { path: paths.error, element: <ErrorPage /> },
]; */

/**
 * React router is expecting a default component for lazy loads. This is just a shortcut to provide that
 * There are limitations here: https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
 * @param componentFile - The path to the component file to be imported. This has to include the extension. See limitations above for why
 * @returns - A lazy loaded promise that points to the default exported component
 */
function getDefaultComponent(componentFile: string) {
  return async () => {
    let component = await import(/* @vite-ignore */ `../${componentFile}`);
    return { Component: component.default };
  };
}

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    // children: routeChildren,
    children: [
      {
        path: '/',
        lazy: getDefaultComponent('features/Home.tsx'),
      },
      {
        path: '/Home',
        lazy: getDefaultComponent('features/Home.tsx'),
      },
      {
        path: '/FetchData',
        lazy: getDefaultComponent('features/FetchData.tsx'),
      },
      {
        path: '/Contacts',
        lazy: getDefaultComponent('features/Contacts/Contacts.tsx'),
      },
      {
        path: '/Email',
        lazy: getDefaultComponent('features/Email.tsx'),
      },
    ],
  },
]);

export default router;

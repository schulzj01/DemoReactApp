import { Suspense } from 'react';
import { RouterProvider } from 'react-aria-components';
import { Outlet, useNavigate } from 'react-router-dom';
import NavHeaderBar from 'components/NavHeaderBar/NavHeaderBar';

/* function useAbsoluteHref(path: string) {
  const relative = useHref(path);
  if (
    path.startsWith('https://')
    || path.startsWith('http://')
    || path.startsWith('mailto:')
  ) {
    return path;
  }
  return relative;
} */

export default function Root() {
  const navigate = useNavigate();
  return (
    <>
      <NavHeaderBar />
      <RouterProvider navigate={navigate}>
        <Suspense>
          <Outlet />
        </Suspense>
      </RouterProvider>
    </>
  );
}

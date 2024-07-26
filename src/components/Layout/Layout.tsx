import { Outlet } from 'react-router-dom';
import NavHeaderBar from 'components/NavHeaderBar/NavHeaderBar';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <>
      <NavHeaderBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet></Outlet>
        </Suspense>
      </main>
    </>
  );
}

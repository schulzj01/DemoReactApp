import { Outlet } from 'react-router-dom';
import NavHeaderBar from 'components/NavHeaderBar/NavHeaderBar';
import NavDrawer from '../NavDrawer/NavDrawer.tsx';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <>
      <NavHeaderBar />
      {/*<NavDrawer />*/}
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet></Outlet>
        </Suspense>
      </main>
      {/*<Footer />*/}
    </>
  );
}

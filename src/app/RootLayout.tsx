import { Suspense } from 'react';
import NavHeaderBar from 'components/NavHeaderBar/NavHeaderBar';

export function RootLayout() {
  return (
    <>
      <NavHeaderBar />
      <div>
        <main>
          <Suspense>
            {' '}
            {/* fallback={ <PageLoader /> */}
            {/* props.children */}
          </Suspense>
        </main>
      </div>
    </>
  );
}
export default RootLayout;
/*
export function Layout(props: { children: React.ReactNode }) {
  //const fullSize = useMatch("/:accountSlug/:projectName");
  return (
    <div className={clsx(fullSize && "h-screen", "flex min-h-full flex-col")}>
      <header className="shrink-0">
        <Navbar />
      </header>
      <Main>
        <Suspense fallback={<PageLoader />}>{props.children}</Suspense>
      </Main>
    </div>
  );
} */

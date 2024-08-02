/**
 *
 * The highest level entry point in the application and the single module loaded in by the
 * index page.
 *
 */
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
/**
 * If we're in development mode, enable the mocking server to host up data that can be used in development.
 * @async
 * @returns Promise
 */
async function enableMocking() {
  if (!import.meta.env.DEV) return;
  await import('mocks/browser');
}

const rootElement = document.getElementById('root')!;

enableMocking().then(() => {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <App />
      <></>
    </StrictMode>,
  );
});

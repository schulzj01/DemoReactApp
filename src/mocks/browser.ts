/**
 *
 * Create a browser based msw setup worker.  This setupWorker() function prepares the client-worker communication channel to enable API mocking in the browser.
 */

import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

const worker = setupWorker(...handlers);

const config = {
  onUnhandledRequest(request: { url: string }, print: { warning: () => void }) {
    // Ignore unhandled warnings/errors from non NWS Connect API requests.
    if (request.url.startsWith('/api/')) {
      print.warning();
    }
    // Otherwise, execute the default warning/error/ strategy.
    return;
  },
};

/**
 * `worker.start()` returns a Promise that resolves once the Service Worker is up and ready to intercept requests.
 */
let started = await worker.start(config);
export default started;

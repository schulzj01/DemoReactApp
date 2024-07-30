/**
 *
 * This is a scaffolding file for setup of application tests. It allows some global importing
 * of some test packages
 *
 */

import { cleanup } from '@testing-library/react';
import { /*expect*,*/ afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

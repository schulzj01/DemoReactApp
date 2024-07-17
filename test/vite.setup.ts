/**
 *
 * This is a scaffolding file for setup of application tests. It allows some global importing
 * of some test packages
 *
 */

import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

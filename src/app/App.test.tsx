// FILE bar.spec.ts
import { expect, test } from '@playwright/test';

test.describe('describe title', () => {
  test('test title', () => {
    expect(1 + 1).toEqual(2);
  });
});

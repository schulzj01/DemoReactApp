/**
 *
 * Utility classes for helping to mock up data.
 *
 */

/**
 * Faker doesn't provide the ability to generate random null results.  Wrapping a faker function call with this allows the function to
 * randomly seed with a null value
 *
 * @param value - The content returned from faker.
 * @param odds - The 1 out of "odds" that you want randomized. For example, "10" would be a 1 out of 10 chance of null values.
 * @returns
 */
export function addRandomNulls<T>(value: T, odds: number): T | null {
  if (Math.floor(Math.random() * odds) !== 0) return value;
  return null;
}

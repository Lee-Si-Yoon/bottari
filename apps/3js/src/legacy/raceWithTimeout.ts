import { delay } from './utils';

/**
 * Races list of promise and logs result.
 * Logs timeout if every promise took more to resolve than timeout.
 *
 * @example
 * await downloadFileWithTimeout([
 *   delay(200, '1.png'),
 *   delay(300, '2.jpg'),
 * ], 300);
 * // success
 *
 * await downloadFileWithTimeout([
 *   delay(100, '1.png'),
 *   delay(300, '2.jpg'),
 * ], 200);
 * // timeout
 */
export const raceWithTimeout = async <T>(
  fetchers: Iterable<T>,
  timeout: number,
) => {
  const result = await Promise.race([...fetchers, delay(timeout, 'timeout')]);

  if (result === 'timeout') {
    console.log('timeout');
  } else {
    console.log('success');
  }

  return result;
};

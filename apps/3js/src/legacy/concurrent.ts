import { chunk, map } from './iterTools';
import { fromAsync } from './utils';

/**
 * Splits array of promise into chunk and runs each chunk concurrently.
 *
 * @example
 * const pa = Array.from({ length: 3 }).map(
 *   (_, i) => () =>
 *     new Promise<number>((res) =>
 *       setTimeout(() => {
 *         console.log(i);
 *         res(i);
 *       }, 500),
 *     ),
 * );
 * await concurrent(1, pa);
 *
 * // after 500ms - 0
 * // after 500ms - 1
 * // after 500ms - 2
 */
const imperativeConcurrent = async <T>(
  limit: number,
  psFns: (() => Promise<T>)[],
) => {
  const result: T[][] = [];

  for (let i = 0; i < psFns.length / limit; i++) {
    const tmp: Promise<T>[] = [];
    for (let j = 0; j < limit; j++) {
      const fn = psFns[i * limit + j];
      if (typeof fn === 'function') {
        tmp.push(fn());
      }
    }
    result.push(await Promise.all(tmp));
  }

  return result.flat();
};

const dirtyConcurrent = async <T>(
  limit: number,
  psFns: (() => Promise<T>)[],
) => {
  const result = await fromAsync(
    map(
      (ps) => Promise.all(ps),
      map((fs) => fs.map((f) => f()), chunk(limit, psFns)),
    ),
  );

  return result.flat();
};

class FxIterator<T> {
  constructor(public iterable: Iterable<T>) {}

  chunk(size: number) {
    return new FxIterator(chunk(size, this.iterable));
  }

  map<U>(f: (a: T) => U): FxIterator<U> {
    return new FxIterator(map(f, this.iterable));
  }

  to<U>(f: (iterable: Iterable<T>) => U): U {
    return f(this.iterable);
  }
}

const concurrent = async <T>(limit: number, psFns: (() => Promise<T>)[]) => {
  return new FxIterator(psFns)
    .chunk(limit)
    .map((fs) => fs.map((f) => f()))
    .map((ps) => Promise.all(ps))
    .to(fromAsync)
    .then((arr) => arr.flat());
};

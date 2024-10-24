/**
 * Takes desired amount from a iterable
 *
 * @example
 * console.log([...take(3, [1, 2, 3, 4, 5])]); // [1, 2, 3]
 */
function* take<T>(length: number, iterable: Iterable<T>) {
  const iterator = iterable[Symbol.iterator]();

  while (length-- > 0) {
    const { value, done } = iterator.next();
    if (done) break;

    yield value;
  }
}

export function* chunk<T>(size: number, iterable: Iterable<T>) {
  const iterator = iterable[Symbol.iterator]();

  while (true) {
    /**
     * @url https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
     * iterable is an object with key of [Symbol.iterator]
     * with value of generator function or a function that returns iterator
     */
    const iterable = {
      [Symbol.iterator]: () => iterator,
    };

    const arr = [...take(size, iterable)];
    if (arr.length) yield arr;
    if (arr.length < size) break;
  }
}

/**
 * Array.map returns new array, this yields
 */
export function* map<A, B>(
  f: (a: A) => B,
  iterable: Iterable<A>,
): IterableIterator<B> {
  for (const a of iterable) {
    yield f(a);
  }
}

/**
 * Array.concat returns new array, this yields
 */
export function* concat<T>(...arrs: Iterable<T>[]) {
  for (const arr of arrs) {
    yield* arr;
    /** commented out is same as above */
    // for (const a of arr) {
    //   yield a;
    // }
  }
}

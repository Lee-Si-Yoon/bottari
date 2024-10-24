export const fromAsync = async <T>(iterable: Iterable<Promise<T>>) => {
  const arr: Awaited<T>[] = [];
  for await (const a of iterable) {
    arr.push(a);
  }

  return arr;
};

export const delay = <T>(time: number, value: T): Promise<T> =>
  new Promise((res) => setTimeout(() => res(value), time));

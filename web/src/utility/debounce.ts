export const debounce = function <T>(this: any, fn: any, d: number) {
  let timer: NodeJS.Timeout;
  const self = this;

  return (...args: any) => {
    clearTimeout(timer);

    return new Promise((resolve: (value: T) => void) => {
      timer = setTimeout(() => {
        resolve(fn.apply(self, args));
      }, d); // for d milliseconds
    });
  };
};

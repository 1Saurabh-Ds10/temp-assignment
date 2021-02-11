export const arrayToWord = <T>(args: T[]): T | null => {
  return args && (Array.isArray(args) ? args[args.length - 1] : null);
};

/*
Problem: Had to wrap all api calls with try catch
Solution: Created wrapper function that will handle try catch
*/

export default async function tryCatch(
  fn: Function,
  ...args: any
): Promise<any[]> {
  try {
    return [null, await fn(...args)];
  } catch (error) {
    return [error, null];
  }
}

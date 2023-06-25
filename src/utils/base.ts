export const countItemInArray = (findItem: number | string, array: []) =>
  array.filter((item: any) => item === findItem).length;

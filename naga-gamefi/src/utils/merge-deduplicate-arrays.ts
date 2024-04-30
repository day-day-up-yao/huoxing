export function mergeDeduplicateArrays<T extends Record<string, any>>(
  array1: T[],
  array2: T[],
  uniqueProp: keyof T
): T[] {
  const uniqueMap = new Map<any, T>();

  array1.forEach((obj) => {
    uniqueMap.set(obj[uniqueProp], obj);
  });

  array2.forEach((obj) => {
    uniqueMap.set(obj[uniqueProp], obj);
  });

  return Array.from(uniqueMap.values());
}

// 示例使用
// interface MyObject {
//   id: number;
//   name: string;
// }

// const array1: MyObject[] = [
//   { id: 1, name: 'Item 1' },
//   { id: 2, name: 'Item 2' },
// ];

// const array2: MyObject[] = [
//   { id: 2, name: 'Item 2' },
//   { id: 3, name: 'Item 3' },
// ];

// const mergedArray = mergeAndDeduplicateArrays(array1, array2, 'id');
// console.log(mergedArray);

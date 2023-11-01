export const removeDuplicates = (array: any[]) => {
  if (array.length === 0) return array;
  if (typeof array[0] === "object") {
    return array.filter(
      (obj, index, self) =>
        index === self.findIndex((t) => t.id === obj.id && t.name === obj.name)
    );
  }
  if (typeof array[0] === "function")
    return array.filter(
      (item, index) =>
        array.findIndex(
          (t) => t.name === item.name && t.length === item.length
        ) === index
    );
  return [...new Set(array)];
};

export const removeAtIndex = (array: any[], index: number) => {
  return [...array.slice(0, index), ...array.slice(index + 1)];
};

export const insertAtIndex = (array: any[], index: number, item: any) => {
  return [...array.slice(0, index), item, ...array.slice(index)];
};

export function hasCommonElement<T>(list1: T[], list2: T[]): boolean {
  return list1.some((element) => list2.includes(element));
}

export const removeObjectFromArray = (array: any[], object: any) => {
  return array.filter((item) => item !== object);
};

export const removeObjectsFromArrayById = (array: any[], object: any) => {
  return array.filter((item) => item.id !== object.id);
};

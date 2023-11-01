export function measurePerformance<T extends (...args: any[]) => void>(
  name: string,
  fn: T,
  ...args: Parameters<T>
): void {
  if (typeof fn !== "function") {
    console.error(`Provide a valid function, ${typeof fn} provided`);
    return;
  }
  console.time(name);
  // @ts-ignore
  fn.bind(this, ...args)();
  console.timeEnd(name);
}

export function validateUrl(url: string): boolean {
  // Regular expression for URL validation
  const urlRegex = new RegExp(
    /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
    "i"
  );
  return urlRegex.test(url);
}

export function validateEmail(email: string): boolean {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isEmptyObject(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// two objects, return the fields that cjanged
export function getChangedFields<T extends object>(
  oldObj: T,
  newObj: T
): Partial<T> {
  let changedFields: Partial<T> = {};
  for (let key in oldObj) {
    if (oldObj[key] !== newObj[key]) {
      changedFields[key] = newObj[key];
    }
  }
  return changedFields;
}

export function removeUndefinedFromObject(obj: any): any {
  Object.keys(obj).forEach((key) => {
    obj[key] === undefined && delete obj[key];
    obj[key] === "" && delete obj[key];
    obj[key] === null && delete obj[key];
  });
  return obj;
}

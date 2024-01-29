function cloneDeep<T>(source: T): T {
  if (typeof source !== "object" || source === null) {
    return source;
  }

  let clone: T | undefined;

  if (Array.isArray(source)) {
    clone = source.map((item: any) => cloneDeep(item)) as T;
  } else {
    clone = {} as T;

    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        clone[key] = cloneDeep(source[key]);
      }
    }
  }

  return clone;
}

export default cloneDeep;

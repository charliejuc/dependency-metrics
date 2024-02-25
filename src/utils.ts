type ExcludeKeys<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const keysExclude = <K extends PropertyKey>(keysToExclude: K[]) => {
  return <T extends Record<K, any>>(
    obj: T
  ): ExcludeKeys<T, (typeof keysToExclude)[number]> => {
    const result: Partial<T> = {};

    for (const key in obj) {
      if (!keysToExclude.includes(key as any)) {
        result[key] = obj[key];
      }
    }

    return result as ExcludeKeys<T, (typeof keysToExclude)[number]>;
  };
};

export const getPercentileIndex = (arr: any[], percentile: number) => {
  const index = Math.floor((arr.length - 1) * percentile);
  return index;
};

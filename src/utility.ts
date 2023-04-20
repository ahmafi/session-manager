export const mapMap = <K, V, R>(
  map: Map<K, V> | undefined,
  callback: (key: K, value: V) => R
): R[] => {
  const array: R[] = [];
  map?.forEach((v, k) => {
    console.log(v);
    array.push(callback(k, v));
  });
  return array;
};

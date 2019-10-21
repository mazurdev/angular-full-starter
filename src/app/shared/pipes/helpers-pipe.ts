export function extractDeepPropertyByMapKey(obj: any, map: string): any {
  const keys = map.split('.');
  const head = keys.shift();

  return keys.reduce((prop: any, key: string) => {
    return !isUndefined(prop) && !isUndefined(prop[key]) ? prop[key] : undefined;
  }, obj[head || '']);
}

export function isObject(value: any) {
  return value !== null && typeof value === 'object';
}

export function isUndefined(value: any) {
  return typeof value === 'undefined';
}

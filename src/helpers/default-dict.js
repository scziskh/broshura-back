export const defaultDict = callback => {
  return new Proxy(
    {},
    {
      get(target, property, receiver) {
        if (!(property in target)) {
          Reflect.set(target, property, callback(), receiver);
        }
        return Reflect.get(target, property, receiver);
      },
    },
  );
};

export const freezeDefaultDict = proxy => {
  Object.preventExtensions(proxy);
  for (const name in proxy) {
    const property = proxy[name];
    if (typeof property === 'object') {
      freezeDefaultDict(property);
    }
  }
};

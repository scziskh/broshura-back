const defaultDict = callback => {
  const target = {};

  const handler = {
    get(target, prop, self) {
      if (target[prop]) {
        return target[prop];
      }
      return this.set(target, prop, callback());
    },

    set(target, prop, value) {
      target[prop] = value;
      // crutch ???
      delete target.toJSON;
      delete target.then;

      return target[prop];
    },
  };

  return new Proxy(target, handler);
};

export const infiniteDict = () => defaultDict(infiniteDict);

export default defaultDict;

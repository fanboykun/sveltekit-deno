export const useCounter = (initialValue = 0) => {
  let count = $state(initialValue);
  return {
    get count() {
      return count;
    },
    set count(value) {
      count = value;
    },
  };
};

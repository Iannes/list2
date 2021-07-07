export const getElementsByAttribute = (event, arr) => {
  return arr.map((name) => event.target.getAttribute(name));
};

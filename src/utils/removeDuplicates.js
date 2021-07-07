export const removeDuplicates = (existingSelectedItems, newItemName) => {
  const uniqueSet = new Set([...existingSelectedItems, newItemName]);
  return [...uniqueSet];
};

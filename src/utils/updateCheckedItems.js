export const updateCheckedItems = (checkedState, position) => {
  return checkedState.map((item, index) => (index === position ? !item : item));
};

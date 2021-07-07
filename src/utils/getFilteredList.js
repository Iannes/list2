import { removeDuplicates } from "./removeDuplicates";
import { getElementsByAttribute } from "./getElementsByAttribute";

export const getFilteredList = (event, selectedItemNames) => {
  const [dataName, dataChecked] = getElementsByAttribute(event, [
    "data-name",
    "data-checked"
  ]);

  const uniqueList = removeDuplicates(selectedItemNames, dataName);
  const filtered =
    dataChecked === "true"
      ? uniqueList.filter((itemName) => itemName !== dataName)
      : uniqueList;

  return filtered;
};

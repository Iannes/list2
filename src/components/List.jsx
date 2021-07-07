import React from "react";
import { SelectedItemsList } from "./SelectedItemsList";
import { updateCheckedItems } from "../utils/updateCheckedItems";
import { getFilteredList } from "../utils/getFilteredList";

// Implement a feature to allow item selection with the following requirements:
// 1. [x] Clicking an item selects/unselects it.
// 2. [x] Multiple items can be selected at a time.
// 3. Make sure to AVOID UNNECESSARY RE-RENDERS (performance).
// 4. [x] Currently selected items should be visually highlighted.
// 5. [x] Currently selected items' names should be shown at the top of the page.

export const List = ({ items }) => {
  const [selectedItemNames, setSelectedItemNames] = React.useState([]);
  const [checkedState, setCheckedState] = React.useState(
    new Array(items.length).fill(false)
  );

  const handleChange = (event, position) => {
    const updatedCheckedState = updateCheckedItems(checkedState, position);
    const filtered = getFilteredList(event, selectedItemNames);

    setSelectedItemNames(filtered);
    setCheckedState(updatedCheckedState);
  };

  return (
    <>
      <SelectedItemsList selectedItems={selectedItemNames} />
      <section className="Container">
        <ul className="List">
          {items.map((item, i) => (
            <li
              key={item.name}
              className={`List__item List__item--${item.color}`}
              id={item.name}
              tabIndex={0}
            >
              <input
                onChange={(e) => handleChange(e, i)}
                type="checkbox"
                checked={checkedState[i]}
                id={item.name}
                name={item.name}
              />
              <label
                data-item={i}
                data-checked={checkedState[i]}
                data-name={item.name}
                onClick={(e) => handleChange(e, i)}
                htmlFor={item.name}
                tabIndex={0}
              >
                {checkedState[i] ? "" : item.name}
              </label>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

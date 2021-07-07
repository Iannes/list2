import { Title } from "./Title";

export const SelectedItemsList = ({ selectedItems }) => {
  return (
    <>
      <Title text="Please select" />
      <div className="Selected__Items">
        {[...selectedItems].map((item) => item)}
      </div>
    </>
  );
};

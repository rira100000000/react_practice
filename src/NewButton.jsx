import useSaveButton from "./useSaveButton";
const NewButton = (props) => {
  const calcNewId = () => {
    return props.ids.length === 0 ? 0 : Math.max(...props.ids) + 1;
  };

  const saveData = useSaveButton(
    props,
    calcNewId(),
    "新規メモ",
    props.contents
  );

  return (
    <button className="NewButton" onClick={saveData}>
      +
    </button>
  );
};

export default NewButton;

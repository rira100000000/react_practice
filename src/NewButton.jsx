import useSaveButton from "./useSaveButton";

const NewButton = (props) => {
  const saveData = useSaveButton(
    props,
    props.newId,
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

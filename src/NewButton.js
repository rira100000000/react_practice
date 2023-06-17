const NewButton = (props) => {
  return (
    <button
      className="NewButton"
      onClick={() => {
        localStorage.setItem(props.newId, "新規メモ");
        props.setContents({ ...props.contents, [props.newId]: "新規メモ" });
        props.setEditingId(props.newId);
        props.setShowEditForm(true);
        props.setContent("新規メモ");
      }}
    >
      +
    </button>
  );
};

export default NewButton;

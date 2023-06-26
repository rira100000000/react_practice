const DeleteButton = (props) => {
  return (
    <div>
      <button
        className="delete"
        id={"delete" + props.editingId}
        onClick={(event) => {
          event.preventDefault();
          let updatedContents = { ...props.contents };
          delete updatedContents[props.editingId];

          localStorage.setItem("todos", JSON.stringify(updatedContents));
          props.setContents(updatedContents);
          props.setShowEditForm(false);
          props.setEditingId("");
        }}
      >
        削除
      </button>
    </div>
  );
};

export default DeleteButton;

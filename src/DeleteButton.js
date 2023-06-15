const DeleteButton = (props) => {
  return (
    <div>
      <button
        className="delete"
        id={"delete" + props.editingId}
        onClick={() => {
          localStorage.removeItem(props.editingId);

          let updatedContents = { ...props.contents };
          delete updatedContents[props.editingId];

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

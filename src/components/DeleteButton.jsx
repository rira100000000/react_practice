const DeleteButton = (props) => {
  return (
    <div>
      <button
        className="delete"
        id={`delete_${props.editingId}`}
        onClick={(event) => {
          event.preventDefault();
          props.handleClickDeleteButton(props.editingId);
        }}
      >
        削除
      </button>
    </div>
  );
};

export default DeleteButton;

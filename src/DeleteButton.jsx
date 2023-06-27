import useLocalStorage from "./useLocalStorage";

const DeleteButton = (props) => {
  const [syncContentsToLocalStorage] = useLocalStorage(
    props.contents,
    props.setContents
  );
  return (
    <div>
      <button
        className="delete"
        id={"delete" + props.editingId}
        onClick={(event) => {
          event.preventDefault();
          let updatedContents = { ...props.contents };
          delete updatedContents[props.editingId];
          props.setContents(updatedContents);
          syncContentsToLocalStorage(updatedContents);
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

import React from "react";
import DeleteButton from "./DeleteButton";
import useSaveButton from "./useSaveButton";

const EditForm = (props) => {
  const handleChange = (event) => {
    event.preventDefault();

    props.setContent(event.target.value);
  };
  const saveData = useSaveButton(
    props,
    props.editingId,
    props.content,
    props.contents
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    saveData();
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event, props.editingId)}>
        <textarea type="text" value={props.content} onChange={handleChange} />
        <div className="buttons">
          <input type="submit" value="編集" className="submit" />
          {
            <DeleteButton
              editingId={props.editingId}
              contents={props.contents}
              setContents={props.setContents}
              setShowEditForm={props.setShowEditForm}
              setEditingId={props.setEditingId}
            />
          }
        </div>
      </form>
    </div>
  );
};

export default EditForm;

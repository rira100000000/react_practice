import React from "react";
import DeleteButton from "./DeleteButton";
const EditForm = (props) => {
  const handleChange = (event) => {
    props.setContent(event.target.value);
  };

  const handleSubmit = (event, id) => {
    event.preventDefault();
    localStorage.setItem(id, props.content);
    props.setContents({ ...props.contents, [id]: props.content });
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

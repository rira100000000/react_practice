import React from "react";
import DeleteButton from "./DeleteButton";

const EditForm = (props) => {
  const handleChange = (event) => {
    event.preventDefault();

    props.setContent(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateTodo();
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event, props.editingId)}>
        <textarea type="text" value={props.content} onChange={handleChange} />
        <div className="buttons">
          <input type="submit" value="編集" className="submit" />
          {
            <DeleteButton
              deleteTodo={props.deleteTodo}
              editingId={props.editingId}
            />
          }
        </div>
      </form>
    </div>
  );
};

export default EditForm;

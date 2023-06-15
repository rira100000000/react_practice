import React from "react";
import NewButton from "./NewButton";
import ShowButton from "./ShowButton";
import EditForm from "./EditForm";

const Todo = () => {
  const [contents, setContents] = React.useState(() => {
    let result = {};
    const ids = Object.keys(localStorage)
      .filter((id) => id !== "id")
      .map((id) => {
        return parseInt(id);
      })
      .sort((a, b) => a - b);

    ids.forEach((id) => {
      result[id] = localStorage.getItem(id);
    });

    return result;
  });

  const ids = Object.keys(contents);

  const calcNewId = () => {
    if (ids.length === 0) {
      return 0;
    } else {
      const parsedIds = ids.map((id) => parseInt(id));
      return Math.max(...parsedIds) + 1;
    }
  };

  const [newId, setNewId] = React.useState(calcNewId());
  const [showEditForm, setShowEditForm] = React.useState(false);
  const [editingId, setEditingId] = React.useState("");
  const [content, setContent] = React.useState(contents[editingId]);

  return (
    <div className="outerLine">
      <h3>{showEditForm ? "編集" : "一覧"}</h3>
      <div className="innerLine">
        <div className="titleArea">
          {ids.map((id) => {
            return (
              <div key={"ShowButton_" + id}>
                <ShowButton
                  id={id}
                  contents={contents}
                  setContents={setContents}
                  setShowEditForm={setShowEditForm}
                  editingId={editingId}
                  setEditingId={setEditingId}
                  setContent={setContent}
                />
              </div>
            );
          })}
          <NewButton
            newId={newId}
            setNewId={setNewId}
            contents={contents}
            setContents={setContents}
            setContent={setContent}
            setShowEditForm={setShowEditForm}
            editingId={editingId}
            setEditingId={setEditingId}
          />
        </div>

        <div className="contentArea">
          {showEditForm && (
            <EditForm
              editingId={editingId}
              setEditingId={setEditingId}
              contents={contents}
              setContents={setContents}
              content={content}
              setContent={setContent}
              setShowEditForm={setShowEditForm}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;

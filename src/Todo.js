import React, { useState, useEffect } from "react";
import NewButton from "./NewButton";
import ShowButton from "./ShowButton";
import EditForm from "./EditForm";

localStorage.clear();
const Todo = () => {
  const ids = Object.keys(localStorage)
    .filter((id) => id !== "id")
    .map((id) => {
      return parseInt(id);
    })
    .sort((a, b) => a - b);

  const [contents, setContents] = useState(() => {
    let result = {};

    ids.forEach((id) => {
      result[id] = localStorage.getItem(id);
    });

    return result;
  });

  const [newId, setNewId] = useState("");
  useEffect(() => {
    const calcNewId = () => {
      if (ids.length === 0) {
        return 0;
      } else {
        return Math.max(...ids) + 1;
      }
    };
    setNewId(calcNewId());
  }, [ids]);

  const [showEditForm, setShowEditForm] = useState(false);
  const [editingId, setEditingId] = useState("");
  const [content, setContent] = useState(contents[editingId]);

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
            contents={contents}
            setContents={setContents}
            setContent={setContent}
            setShowEditForm={setShowEditForm}
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

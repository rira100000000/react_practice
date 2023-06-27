import React, { useState, useEffect } from "react";
import NewButton from "./NewButton";
import ShowButton from "./ShowButton";
import EditForm from "./EditForm";

const Todo = () => {
  const [contents, setContents] = useState({});

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || {};
    setContents(todos);
  }, []);

  const ids = Object.keys(contents).map((id) => {
    return parseInt(id);
  });

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
            ids={ids}
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

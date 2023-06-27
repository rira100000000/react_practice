import React, { useState, useEffect } from "react";
import NewButton, { calcNewId } from "./NewButton";
import ShowButton from "./ShowButton";
import EditForm from "./EditForm";
import useLocalStorage from "./useLocalStorage";
import useSaveButton from "./useSaveButton";

const Todo = () => {
  const [contents, setContents] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingId, setEditingId] = useState("");
  const [content, setContent] = useState("");
  const [syncContentsToLocalStorage] = useLocalStorage(contents, setContents);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || {};
    setContents(todos);
  }, []);

  const handleClickShowButton = (id) => {
    setShowEditForm(true);
    setEditingId(id);
    setContent(contents[id]);
  };

  const ids = Object.keys(contents).map((id) => {
    return parseInt(id);
  });

  const saveNewTodo = useSaveButton(
    { setContent, setContents, setEditingId, setShowEditForm },
    calcNewId(ids),
    "新規メモ",
    contents
  );

  const updateTodo = useSaveButton(
    { setContent, setContents, setEditingId, setShowEditForm },
    editingId,
    content,
    contents
  );

  const deleteTodo = (id) => {
    let updatedContents = { ...contents };
    delete updatedContents[id];
    setContents(updatedContents);
    syncContentsToLocalStorage(updatedContents);
    setShowEditForm(false);
    setEditingId("");
  };

  return (
    <div className="outerLine">
      <h3>{showEditForm ? "編集" : "一覧"}</h3>
      <div className="innerLine">
        <div className="titleArea">
          {ids.map((id) => {
            return (
              <div key={`ShowButton_${id}`}>
                <ShowButton
                  handleClickShowButton={handleClickShowButton}
                  id={id}
                  contents={contents}
                  editingId={editingId}
                />
              </div>
            );
          })}
          <NewButton saveNewTodo={saveNewTodo} />
        </div>

        <div className="contentArea">
          {showEditForm && (
            <EditForm
              editingId={editingId}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
              setEditingId={setEditingId}
              content={content}
              setContent={setContent}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;

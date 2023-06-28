import { useState, useEffect } from "react";
import NewButton, { calcNewId } from "./NewButton";
import ShowButton from "./ShowButton";
import EditForm from "./EditForm";
import useLocalStorage from "../hooks/useLocalStorage";
import useSaveButton from "../hooks/useSaveButton";

//localStorage.clear();

const Todo = () => {
  const [contents, setContents] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingId, setEditingId] = useState("");
  const [text, setText] = useState("");
  const [syncContentsToLocalStorage] = useLocalStorage(contents, setContents);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    setContents(todos);
  }, []);

  const handleClickShowButton = (content) => {
    setShowEditForm(true);
    setEditingId(content["id"]);
    setText(content["text"]);
  };

  const saveNewTodo = useSaveButton(
    { setText, setContents, setEditingId, setShowEditForm },
    calcNewId(contents),
    "新規メモ",
    contents
  );

  const updateTodo = useSaveButton(
    { setText, setContents, setEditingId, setShowEditForm },
    editingId,
    text,
    contents
  );

  const deleteTodo = (id) => {
    const updatedContents = contents.filter((content) => {
      return content["id"] !== id;
    });

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
          {contents.map((content) => {
            return (
              <div key={`ShowButton_${content["id"]}`}>
                <ShowButton
                  handleClickShowButton={handleClickShowButton}
                  content={content}
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
              content={text}
              setText={setText}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;

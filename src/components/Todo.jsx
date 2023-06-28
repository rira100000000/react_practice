import { useState } from "react";
import NewButton, { calcNewId } from "./NewButton";
import ShowButton from "./ShowButton";
import EditForm from "./EditForm";
import useContents from "../hooks/useContents";

const Todo = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingId, setEditingId] = useState("");
  const [text, setText] = useState("");
  const { contents, addContent, updateContent, deleteContent } = useContents();

  const handleClickShowButton = (content) => {
    setShowEditForm(true);
    setEditingId(content["id"]);
    setText(content["text"]);
  };

  const handleClickNewButton = () => {
    const newId = calcNewId(contents);
    setShowEditForm(true);
    setEditingId(newId);
    setText("新規メモ");
    addContent(newId, text);
  };

  const handleClickUpdateButton = () => {
    updateContent(editingId, text);
  };

  const handleClickDeleteButton = () => {
    deleteContent(editingId);
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
          <NewButton handleClickNewButton={handleClickNewButton} />
        </div>

        <div className="contentArea">
          {showEditForm && (
            <EditForm
              editingId={editingId}
              handleClickDeleteButton={handleClickDeleteButton}
              handleClickUpdateButton={handleClickUpdateButton}
              text={text}
              setText={setText}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;

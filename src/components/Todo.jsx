import { useState } from "react";
import NewButton, { calcNewId } from "./NewButton";
import ShowButton from "./ShowButton";
import EditForm from "./EditForm";
import useContents from "../hooks/useContents";
import LoginButton from "./LoginButton";
import { useLogin } from "../hooks/useLogin";

const Todo = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingId, setEditingId] = useState("");
  const [text, setText] = useState("");
  const { contents, addContent, updateContent, deleteContent } = useContents();
  const { isLogin, changeLoginStatus } = useLogin();

  const handleClickLoginButton = () => {
    changeLoginStatus();
  };

  const handleClickShowButton = (content) => {
    setShowEditForm(true);
    setEditingId(content["id"]);
    setText(content["text"]);
  };

  const handleClickNewButton = () => {
    const newId = calcNewId(contents);
    setShowEditForm(true);
    setEditingId(newId);
    const initialTitle = "新規メモ";
    setText(initialTitle);
    addContent(newId, initialTitle);
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
      <LoginButton
        isLogin={isLogin}
        handleClickLoginButton={handleClickLoginButton}
      ></LoginButton>
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
          {isLogin && <NewButton handleClickNewButton={handleClickNewButton} />}
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

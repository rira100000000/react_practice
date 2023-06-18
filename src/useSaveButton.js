import React from "react";

const useSaveButton = (props, id, content) => {
  const { setContent, setContents, setEditingId, setShowEditForm } = props;

  const saveData = React.useCallback(() => {
    setContent(content);
    localStorage.setItem(id, content);
    setContents((prevContents) => ({ ...prevContents, [id]: content }));
    setEditingId(id);
    setShowEditForm(true);
  }, [setContent, setContents, setEditingId, setShowEditForm, id, content]);

  return saveData;
};

export default useSaveButton;

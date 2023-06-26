import React from "react";

const useSaveButton = (props, id, content, contents) => {
  const { setContent, setContents, setEditingId, setShowEditForm } = props;

  const saveData = React.useCallback(() => {
    setContent(content);
    localStorage.setItem(
      "todos",
      JSON.stringify({ ...contents, [id]: content })
    );
    setContents((prevContents) => ({ ...prevContents, [id]: content }));
    setEditingId(id);
    setShowEditForm(true);
  }, [
    setContent,
    setContents,
    setEditingId,
    setShowEditForm,
    id,
    content,
    contents,
  ]);

  return saveData;
};

export default useSaveButton;

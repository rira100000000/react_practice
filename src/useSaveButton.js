import { useCallback } from "react";
import useLocalStorage from "./useLocalStorage";

const useSaveButton = (props, id, content, contents) => {
  const { setContent, setContents, setEditingId, setShowEditForm } = props;

  const [syncContentsToLocalStorage] = useLocalStorage(contents, setContents);

  const saveData = useCallback(() => {
    setContent(content);
    const updatedContents = { ...contents, [id]: content };
    setContents(updatedContents);
    setEditingId(id);
    setShowEditForm(true);
    syncContentsToLocalStorage(updatedContents);
  }, [
    setContent,
    setContents,
    setEditingId,
    setShowEditForm,
    id,
    content,
    contents,
    syncContentsToLocalStorage,
  ]);

  return saveData;
};

export default useSaveButton;

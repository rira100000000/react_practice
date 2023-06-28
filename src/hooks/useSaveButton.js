import { useCallback } from "react";
import useLocalStorage from "./useLocalStorage";

const useSaveButton = (props, id, text, contents) => {
  const { setText, setContents, setEditingId, setShowEditForm } = props;

  const { syncContentsToLocalStorage } = useLocalStorage(contents, setContents);

  const saveData = useCallback(() => {
    setText(text);
    let isUpdated = false;
    let updatedContents = contents.map((content) => {
      if (content["id"] === id) {
        content["text"] = text;
        isUpdated = true;
      }
      return content;
    });

    if (!isUpdated) {
      updatedContents = [...contents, { id, text }];
      console.log(`same`);
    }

    setContents(updatedContents);
    console.log(`updatedcontents: ${updatedContents}`);
    console.log(`contents: ${contents}`);
    setEditingId(id);
    setShowEditForm(true);
    syncContentsToLocalStorage(updatedContents);
  }, [
    setText,
    setContents,
    setEditingId,
    setShowEditForm,
    id,
    text,
    contents,
    syncContentsToLocalStorage,
  ]);

  return saveData;
};

export default useSaveButton;

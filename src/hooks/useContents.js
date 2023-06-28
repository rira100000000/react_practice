import { useState, useEffect, useMemo } from "react";
import useLocalStorage from "./useLocalStorage";

const useContents = () => {
  const [contents, setContents] = useState([]);
  const { syncContentsToLocalStorage, getLocalStorageContents } =
    useLocalStorage(contents, setContents);

  useEffect(() => {
    const todos = getLocalStorageContents();
    setContents(todos);
  }, [getLocalStorageContents]);

  const addContent = (newId, initialText) => {
    const updatedContents = [...contents, { id: newId, text: initialText }];
    setContents(updatedContents);
    syncContentsToLocalStorage(updatedContents);
  };

  const updateContent = (editingId, text) => {
    const updatedContents = contents.map((content) => {
      return content.id === editingId ? { id: content.id, text } : content;
    });
    setContents(updatedContents);
    syncContentsToLocalStorage(updatedContents);
  };

  const deleteContent = (editingId) => {
    const updatedContents = contents.filter((content) => {
      return content["id"] !== editingId;
    });

    setContents(updatedContents);
    syncContentsToLocalStorage(updatedContents);
  };

  const contentMemoized = useMemo(() => {
    return contents;
  }, [contents]);

  return {
    contents: contentMemoized,
    setContents: setContents,
    addContent,
    updateContent,
    deleteContent,
  };
};

export default useContents;

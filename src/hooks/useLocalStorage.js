import { useCallback } from "react";

const useLocalStorage = (contents, setContents) => {
  const getLocalStorageContents = useCallback(() => {
    const storedContents = localStorage.getItem("todos");
    if (storedContents) {
      setContents(JSON.parse(storedContents));
      return contents;
    } else {
      return {};
    }
  }, [contents, setContents]);

  const syncContentsToLocalStorage = (newContents) => {
    localStorage.setItem("todos", JSON.stringify(newContents));
    setContents(newContents);
  };

  return [syncContentsToLocalStorage, getLocalStorageContents];
};

export default useLocalStorage;

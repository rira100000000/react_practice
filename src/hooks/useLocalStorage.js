import { useCallback } from "react";

const useLocalStorage = () => {
  const getLocalStorageContents = useCallback(() => {
    const storedContents = localStorage.getItem("todos");
    if (storedContents) {
      return JSON.parse(storedContents);
    } else {
      return [];
    }
  }, []);

  const syncContentsToLocalStorage = (newContents) => {
    localStorage.setItem("todos", JSON.stringify(newContents));
  };

  return { syncContentsToLocalStorage, getLocalStorageContents };
};

export default useLocalStorage;

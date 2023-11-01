import { useState, useEffect } from "react";

type LocalStorageDataType = {
  key: string;
  value: any;
};

const useLocalStorage = <T extends LocalStorageDataType>(
  key: string,
  initialValue: T
) => {

    const [data, setData] = useState<T>(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData] as const;
};

export default useLocalStorage;

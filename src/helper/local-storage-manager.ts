import { APP_MAIN_KEY } from "constants/index";

export const LocalStorageManager = () => {
  const save = <T>(key: string, data: T) => {
    if (typeof data === "function") {
      throw new Error("Functions not supportable");
    }

    localStorage.setItem(`${APP_MAIN_KEY + key}`, JSON.stringify(data));
  };

  const clearStorage = () => localStorage.clear();

  const getData = (key: string) => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem(`${APP_MAIN_KEY + key}`);

      return !!data ? JSON.parse(data) : null;
    }
  };

  return { save, getData, clearStorage };
};

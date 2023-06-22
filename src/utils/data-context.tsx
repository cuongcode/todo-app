import { ReactNode, createContext, useState } from "react";
import { STATIC_DATA } from "./static-data";

export const DataContext = createContext<any>([]);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [data] = useState(STATIC_DATA);

  const todoData = data.filter((item) => item.status === "to-do");
  const inProgressData = data.filter((item) => item.status === "in-progress");
  const completedData = data.filter((item) => item.status === "completed");

  const context = {
    todoData,
    inProgressData,
    completedData,
  };

  return (
    <DataContext.Provider value={context}>{children}</DataContext.Provider>
  );
};

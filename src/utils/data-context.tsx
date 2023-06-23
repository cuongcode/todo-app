import { ReactNode, createContext, useState } from "react";
import { STATIC_DATA } from "./static-data";

export const DataContext = createContext<any>([]);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState(STATIC_DATA);

  const todoData = data.filter((item) => item.status === "to-do");
  const inProgressData = data.filter((item) => item.status === "in-progress");
  const completedData = data.filter((item) => item.status === "completed");

  const onAddTask = (task: any) => {
    setData((prev: any) => [task,...prev]);
  };
  
  const onChangeStatus = (task:any, newStatus:any) => {
    const newTask = {...task, status: newStatus, priority: 0}
    setData((prev: any) => prev.map((item:any)=>{
      if (item.id === newTask.id) {
        return newTask
      }
      return item
    }));
  };

  const context = {
    todoData,
    inProgressData,
    completedData,
    onAddTask,
    onChangeStatus,
  };

  return (
    <DataContext.Provider value={context}>{children}</DataContext.Provider>
  );
};

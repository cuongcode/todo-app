import { ReactNode, createContext, useState } from "react";
import { STATIC_DATA } from "./static-data";

export const DataContext = createContext<any>([]);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState(STATIC_DATA);

  const todoData = data.filter((item) => item.status === "to-do");
  const inProgressData = data.filter((item) => item.status === "in-progress");
  const completedData = data.filter((item) => item.status === "completed");

  const onAddTask = (newTask: any) => {
    setData((prev: any) => [newTask, ...prev]);
  };

  const onChangeStatus = (task: any, newStatus: any) => {
    const updatedTask = { ...task, status: newStatus };
    setData((prev: any) =>
      prev.map((item: any) => {
        if (item.id === updatedTask.id) {
          return updatedTask;
        }
        return item;
      })
    );
  };

  const onEditTask = (task:any, newTitle:any, newDescription:any) => {
    const updatedTask = {
      ...task,
      title: newTitle,
      description: newDescription,
    };
    setData((prev: any) =>
      prev.map((item: any) => {
        if (item.id === updatedTask.id) {
          return updatedTask;
        }
        return item;
      })
    );
  };

  const onPinUnpin = (task: any) => {
    const updatedTask = { ...task, isPinned: !task.isPinned};
    const taskIndex = data.findIndex((item:any) => item.id === updatedTask.id)
    const newData = [...data]
    newData.splice(taskIndex,1)
    newData.splice(0,0,updatedTask)
    setData(newData)
  };
  
  const onSwitchTaskPosition = (task1:any, task2:any) => {
    setData((prev:any)=>data.map((item:any) => {
      if (item.id === task1.id) {
        return task2
      }
      if (item.id === task2.id) {
        return task1
      }
      return item
    }))
  };

  const context = {
    todoData,
    inProgressData,
    completedData,
    onAddTask,
    onChangeStatus,
    onEditTask,
    onPinUnpin,
    onSwitchTaskPosition,
  };

  return (
    <DataContext.Provider value={context}>{children}</DataContext.Provider>
  );
};

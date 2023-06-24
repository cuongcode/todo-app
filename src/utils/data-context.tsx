import { ReactNode, createContext, useState } from "react";
import { STATIC_DATA } from "./static-data";

export const DataContext = createContext<any>([]);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [allTask, setAllTask] = useState(STATIC_DATA);

  const todoTask = allTask.filter((item) => item.status === "to-do");
  const inProgressTask = allTask.filter((item) => item.status === "in-progress");
  const completedTask = allTask.filter((item) => item.status === "completed");

  const onAddTask = (newTask: any) => {
    setAllTask((prev: any) => [newTask, ...prev]);
  };

  const onChangeStatus = (task: any, newStatus: any) => {
    const updatedTask = { ...task, status: newStatus };
    setAllTask((prev: any) =>
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
    setAllTask((prev: any) =>
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
    const taskIndex = allTask.findIndex((item:any) => item.id === updatedTask.id)
    const newData = [...allTask]
    newData.splice(taskIndex,1)
    newData.splice(0,0,updatedTask)
    setAllTask(newData)
  };
  
  const onSwitchTaskPosition = (task1:any, task2:any) => {
    setAllTask((prev:any)=>allTask.map((item:any) => {
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
    todoTask: todoTask,
    inProgressTask: inProgressTask,
    completedTask: completedTask,
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

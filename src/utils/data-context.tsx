import { ReactNode, createContext, useState } from "react";
import { STATIC_TASK_DATA, STATIC_TAG_DATA } from "./index";

export const DataContext = createContext<any>([]);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [allTask, setAllTask] = useState<any>(STATIC_TASK_DATA);
  const [allTag, setAllTag] = useState<any>([]);

  const todoTask = allTask.filter((item: any) => item.status === "to-do");
  const inProgressTask = allTask.filter(
    (item: any) => item.status === "in-progress"
  );
  const completedTask = allTask.filter(
    (item: any) => item.status === "completed"
  );
  const usedTags = allTask.map((item: any) => [...item.tags]).flat();

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

  const onEditTask = (task: any, newTitle: any, newDescription: any) => {
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
    const updatedTask = { ...task, isPinned: !task.isPinned };
    const taskIndex = allTask.findIndex(
      (item: any) => item.id === updatedTask.id
    );
    const newData = [...allTask];
    newData.splice(taskIndex, 1);
    newData.splice(0, 0, updatedTask);
    setAllTask(newData);
  };

  const onSwitchTaskPosition = (task1: any, task2: any) => {
    setAllTask((prev: any) =>
      allTask.map((item: any) => {
        if (item.id === task1.id) {
          return task2;
        }
        if (item.id === task2.id) {
          return task1;
        }
        return item;
      })
    );
  };

  const onDeleteTask = (task: any) => {
    const taskIndex = allTask.findIndex((item: any) => item.id === task.id);
    const updatedAllTask = [...allTask];
    updatedAllTask.splice(taskIndex, 1);
    setAllTask(updatedAllTask);
  };

  const onAddTag = (newTag: any) => {
    setAllTag((prev: any) => [...prev, newTag]);
  };

  const onDeleteTag = (deletedTag: any) => {
    const deletedTagIndex = allTag.findIndex(
      (item: any) => item.id === deletedTag.id
    );
    const updatedAllTag = [...allTag];
    updatedAllTag.splice(deletedTagIndex, 1);
    setAllTag(updatedAllTag);
  };

  const onTag = (task: any, tag: any) => {
    const updatedTags = [...task.tags, tag];
    const updatedTask = { ...task, tags: updatedTags };
    setAllTask((prev: any) =>
      prev.map((item: any) => {
        if (item.id === updatedTask.id) {
          return updatedTask;
        }
        return item;
      })
    );
  };

  const onUntag = (task: any, tag: any) => {
    const tagIndex = task.tags.findIndex((item: any) => item.id === tag.id);
    const updatedTags = [...task.tags];
    updatedTags.splice(tagIndex, 1);
    const updatedTask = { ...task, tags: updatedTags };
    setAllTask((prev: any) =>
      prev.map((item: any) => {
        if (item.id === updatedTask.id) {
          return updatedTask;
        }
        return item;
      })
    );
  };

  const context = {
    todoTask,
    inProgressTask,
    completedTask,
    allTag,
    usedTags,
    onAddTask,
    onChangeStatus,
    onEditTask,
    onPinUnpin,
    onSwitchTaskPosition,
    onDeleteTask,
    onAddTag,
    onDeleteTag,
    onTag,
    onUntag,
  };

  return (
    <DataContext.Provider value={context}>{children}</DataContext.Provider>
  );
};

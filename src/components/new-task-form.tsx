import { useContext, useState } from "react";

import { TagDropdown, TagSection } from "./index";
import { DataContext } from "../utils/data-context";

export const NewTaskForm = ({
  status,
  onCancel,
}: {
  status: any;
  onCancel: any;
}) => {
  const { onAddTask } = useContext(DataContext);
  const [title, setTitle] = useState<any>("");
  const [description, setDescription] = useState<any>("");
  const [errors, setErrors] = useState<any>({});
  const { v4: uuidv4 } = require('uuid')

  const body = {
    id: uuidv4(),
    title: title,
    description: description,
    tags: [],
    status: status,
    isPinned: true,
  };

  const _validate = () => {
    const newErrors: any = {};
    if (!title) {
      newErrors.title = "Please input something";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return false;
    }
    return true;
  };

  const _onSave = () => {
    if (!_validate()) {
      return;
    }
    
    onAddTask(body);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <div className="flex flex-col py-2 px-3 bg-white space-y-4 rounded-lg text-sm text-gray-400">
        <input
          type="text"
          name="title"
          id="title"
          className="bg-gray-100 w-full text-sm text-gray-500 rounded-md p-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {Object.keys(errors).length > 0 && (
          <div className="text-red-400 text-xs w-fit">{errors.title}</div>
        )}

        <div className="flex items-center space-x-2">
          <input
            type="text"
            name="description"
            id="description"
            className="bg-gray-100 w-full text-xs text-gray-400 rounded-md p-1"
            placeholder="(optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex space-x-2">
          <button
            onClick={onCancel}
            type="button"
            className="w-1/2 bg-[#e9f2f1] text-[#309a87] py-1 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={_onSave}
            type="submit"
            className="w-1/2 bg-[#e9f2f1] text-[#309a87] py-1 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

import { PlusIcon } from "@heroicons/react/24/outline";

export const NewTagForm = () => {
    return (
        <div className="flex space-x-2">
            <input className="w-4/6 rounded-lg" type="text"></input>
            <div className="flex w-2/6">
              <button className="w-1/2 bg-red-300 rounded-lg"></button>
              <button type="button" className="w-1/2"><PlusIcon className="m-auto w-4 text-[#309a87]"/></button>
            </div>
        </div>
    );
};
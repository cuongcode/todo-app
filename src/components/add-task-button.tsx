import  { PlusIcon } from '@heroicons/react/24/solid'

export const AddTaskButton = () => {
    return (
      <>
        <button className='flex bg-[#e9f2f1] rounded-lg text-[#309a87] p-3 justify-center' ><PlusIcon className='w-4' /></button>
      </>
    );
  };
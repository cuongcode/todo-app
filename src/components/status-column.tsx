import {PencilEditButton, AddTaskButton, TaskCard } from './index'

export const StatusColumn = ({status}:{status:any}) => {
    return (
      <div className='flex flex-col w-full md:w-1/3 bg-[#f5f9f9] rounded-xl p-3 space-y-3'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <div>{status}</div>
            <div className='bg-[#e9f2f1] py-1 px-2 rounded-md text-[#309a87] text-xs'>2</div>
          </div>
          <PencilEditButton />
        </div>
  
        <AddTaskButton />
  
        <div className='flex flex-col space-y-3'>
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    );
  };
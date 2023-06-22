import {SelectButton, OutlineStarButton, SolidStarButton, PencilEditButton, ChevronUpButton, ChevronDownButton, TagButton} from './index'

export const TaskCard = () => {
    return (
      <>
        <div className='flex flex-col py-2 px-3 bg-white space-y-4 rounded-lg'>
          <div className='flex justify-between items-center text-base'>
            <div className='flex items-center space-x-1'>
              <SelectButton/>
              <OutlineStarButton/>
              <SolidStarButton/>
              <div>Upper body</div>
              <PencilEditButton/>
            </div>
            <div className='flex flex-col'>
              <ChevronUpButton />
              <ChevronDownButton />
            </div>
          </div>
          <div className='text-xs text-gray-400'>20 reps push up, 10 reps pull up</div>
          <div className='flex space-x-1'>
            <TagButton />
            <div className='bg-red-300 w-fit text-xs py-1 px-2 rounded-md'>#workout</div>
          </div>
        </div>
      </>
    );
  };
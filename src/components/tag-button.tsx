import  {TagIcon} from '@heroicons/react/24/outline'

export const TagButton = () => {
    return (
      <>
        <button className='flex text-xs text-gray-400 items-center'><span><TagIcon className='w-4 mr-1'/></span>tags:</button>
      </>
    );
  };
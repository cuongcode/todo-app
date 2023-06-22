import './App.css';
import  { ChevronDownIcon, ChevronUpIcon , PlusIcon } from '@heroicons/react/24/solid'
import  { PencilIcon, TagIcon} from '@heroicons/react/24/outline'

function App() {
  return (
    <div className="flex w-screen h-screen p-20 bg-gradient-to-br from-[#f5f9f9] to-[#309a87] ...">
      <div className='flex flex-col m-auto w-full h-fit bg-white rounded-3xl py-5 px-10 space-y-3'>

        <div className='flex py-5 justify-between'>
          <div className='text-xl'>To Do App</div>
        </div>

        <div className='flex flex-col h-full space-y-5 md:flex-row md:space-x-5 md:space-y-0'>
          <StatusColumn status='To do'></StatusColumn>
          <StatusColumn status='In progress'></StatusColumn>
          <StatusColumn status='Completed'></StatusColumn>
        </div>

      </div>
    </div>
  );
}

export default App;

const StatusColumn = ({status}:{status:any}) => {
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

const SelectButton = () => {
  return (
    <>
      <button>
        <div className='flex border-2 rounded-md border-[#309a87] w-4 h-4 justify-center items-center'>
          <div className='bg-[#309a87] rounded-md w-2 h-2'></div>
        </div>
      </button>
    </>
  );
};


const TaskCard = () => {
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

const OutlineStarButton = () => {
  return (
    <>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 text-yellow-400">
           <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      </button>
    </>
  );
};


const SolidStarButton = () => {
  return (
    <>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 text-yellow-400">
           <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
        </svg>
      </button>
    </>
  );
};


const PencilEditButton = () => {
  return (
    <>
      <button><PencilIcon className='w-3 text-[#309a87]'/></button>
    </>
  );
};

const ChevronUpButton = () => {
  return (
    <>
      <button><ChevronUpIcon className='w-3 text-[#309a87]'/></button> 
    </>
  );
};


const ChevronDownButton = () => {
  return (
    <>
      <button><ChevronDownIcon className='w-3 text-[#309a87]'/></button> 
    </>
  );
};

const TagButton = () => {
  return (
    <>
      <button className='flex text-xs text-gray-400 items-center'><span><TagIcon className='w-4 mr-1'/></span>tags:</button>
    </>
  );
};


const AddTaskButton = () => {
  return (
    <>
      <button className='flex bg-[#e9f2f1] rounded-lg text-[#309a87] p-3 justify-center' ><PlusIcon className='w-4' /></button>
    </>
  );
};
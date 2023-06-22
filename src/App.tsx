import "./App.css";

import { StatusColumn } from "./components/index";

function App() {
  return (
    <div className="flex min-h-screen p-20 bg-gradient-to-br from-[#f5f9f9] to-[#309a87] ...">
      <div className="flex flex-col m-auto w-full h-fit bg-white rounded-3xl py-5 px-10 space-y-3">
        <div className="flex py-5 justify-between">
          <div className="text-xl">To Do App</div>
        </div>

        <div className="flex flex-col h-full space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          <StatusColumn status="To do"></StatusColumn>
          <StatusColumn status="In progress"></StatusColumn>
          <StatusColumn status="Completed"></StatusColumn>
        </div>
      </div>
    </div>
  );
}

export default App;

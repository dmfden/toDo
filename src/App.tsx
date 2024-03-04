
import { ITask } from "./components/@types/todo";
import TaskList from "./components/TaskList";
import { useSelector } from "react-redux";
import { RootState } from "./redux/todoStore";
import TodoControlPanel from "./components/TodoControlPanel";
import FilterTasks from "./components/FilterTasks";
import { EFilter } from "./constants/projectConstants";
import TotalCountBlock from "./components/TotalCountBlock";


function App() {

const tasks = useSelector<RootState, ITask[]>((state)=> state.tasks);
const filters = useSelector<RootState, EFilter>((state)=> state.filter);

const filterBlock = tasks.length > 0 && <FilterTasks /> ;

  return (
    <div className="container flex flex-col min-h-screen px-4 m-auto md:px-6 lg:px-0 xl:max-w-3xl">
        <header className="my-4 text-6xl text-center text-cyan-500">
          <h1>ToDo list</h1>
        </header>
        
        {filterBlock && <section>{filterBlock}</section>}

        <section>
        <TaskList tasks={tasks} filter={filters} />
        <TotalCountBlock />
        </section>
        <section>
          <TodoControlPanel maxLength={10}/>
        </section>
        <footer className="mt-auto">Footer</footer> 
    </div>

  )
}

export default App

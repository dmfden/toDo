import { useState } from "react";
import { useAppDispatch } from "../hooks";
import { ACTION_TYPES } from "../redux/actionTypes";
import { ITask } from "./@types/todo";


interface ITodoInputAddProps {
    maxLength: number
}

function TodoControlPanel(props:ITodoInputAddProps):JSX.Element {
    const [inputAdd, setInputAdd] = useState("");
    const dispatch = useAppDispatch();
    
    const addTask = (task: ITask)=> {
        dispatch({type: ACTION_TYPES.ADD_TASK, payload: {...task}})
    }

    const handleInputAddTask = (event: React.FormEvent<HTMLInputElement>)=> {
        setInputAdd(event.currentTarget.value);
    }

    const handleAddButton = ()=> {
        const taskName = inputAdd.trim();
        const generatedId = Math.random() * 100000 + '_' + taskName;
        taskName && addTask({id: generatedId, name: taskName, isDone: false});
    }

    const inputAddClassNames = "w-7/12 px-4 py-3 border rounded-md md:w-9/12 border-cyan-500 border-1 hover:bg-gray-200 focus:bg-gray-200";

    return (
    <div className="flex items-center justify-between gap-6 my-6">
        <input className={inputAddClassNames} type="text" placeholder="Name for new Task" maxLength={props.maxLength} onChange={handleInputAddTask} value={inputAdd}/>
        <button className="px-4 py-3 border border-cyan-500 hover:bg-gray-300 focus:bg-gray-300" onClick={handleAddButton}>ADD TASK</button>
    </div>
    );
}
 

export default TodoControlPanel;

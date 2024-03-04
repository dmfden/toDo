
import { EFilter } from "../constants/projectConstants";
import { ITasks } from "./@types/todo";
import TaskTodo from "./TaskTodo";

function TaskList(props: ITasks): JSX.Element {
    const filter = props.filter;
    let filteredTasks = [...props.tasks];


    if(filter !== EFilter.all) {
        if(filter === EFilter.completed) {
            filteredTasks = filteredTasks.filter(task=>task.isDone);
        }else {
            filteredTasks = filteredTasks.filter(task=>!task.isDone);
        }
        
    }

    return (
        <ul>
            {
                filteredTasks.length > 0 && filteredTasks.map((task) => {
                    return <li className="mb-3" key={task.id + task.name}>
                        <TaskTodo {...task} />
                    </li>
                })
            }
        </ul>
    );
}

export default TaskList;
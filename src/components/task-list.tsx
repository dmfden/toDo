import { EFilter } from '../constants/project-constants'
import { ITasks } from './@types/todo'
import TaskTodo from './task-todo'

function TaskList(props: ITasks): JSX.Element {
  const filter = props.filter
  let filteredTasks = [...props.tasks]

  if (filter !== EFilter.all) {
    filteredTasks = filter === EFilter.completed ? filteredTasks.filter((
      task,
    ) => task.isDone) : filteredTasks.filter((task) => !task
      .isDone)
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
  )
}

export default TaskList

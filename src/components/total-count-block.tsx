import { useSelector } from 'react-redux'
import { RootState } from '../redux/todo-store'
import { ITask } from './@types/todo'

function TotalCountBlock(): JSX.Element {
  const tasks = useSelector<RootState, ITask[]>((state) => state.tasks)
  const completedTasks = tasks.filter((task) => task.isDone).length
  const uncompletedTasks = tasks.filter((task) => !task.isDone).length
  return (
    <div className="flex justify-center w-full gap-4">
      {completedTasks > 0 && <h4>Completed tasks: {completedTasks}</h4>}
      {uncompletedTasks > 0 && <h4>Uncompleted tasks: {uncompletedTasks}</h4>}
    </div>
  )
}

export default TotalCountBlock

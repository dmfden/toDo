import { useAppDispatch } from '../hooks'
import { ActionTypes } from '../redux/action-types'
import { ITask } from './@types/todo'

function TaskTodo(props: ITask): JSX.Element {
  const dispatch = useAppDispatch()

  const removeTask = (): void => {
    dispatch({ 'type': ActionTypes.REMOVE_TASK, 'payload': props.id })
  }

  const changeStatusTask = (): void => {
    dispatch({ 'type': ActionTypes.CHANGE_TASK_STATUS, 'payload': props.id })
  }

  const handleCloseButton = (): void => {
    removeTask()
  }

  const checkedItem = props.isDone ? <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="bi bi-file-earmark-check"
    viewBox="0 0 16 16"
  >
    <path
      d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5
       0 1 0-.708.708l1.5 1.5a.5.5
    0 0 0 .708 0z"
    />
    <path
      d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0
       0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2
    V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"
    />
  </svg> : <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="bi bi-file-earmark"
    viewBox="0 0
   16 16"
  >
    <path
      d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2
       2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v1
    2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"
    />
  </svg>

  const inputWrapperClasses =
    '-flex items-center w-full gap-4 px-4 py-2 border border-gray-400' +
    'rounded-md border-1 hover:bg-gray-200 focus:bg-gray-200'

  return (
    <div className="flex gap-3">
      <button className={inputWrapperClasses} onClick={changeStatusTask}>
        <div className="w-8 h-8">
          {checkedItem}
        </div>
        <p>{props.name}</p>
      </button>
      <button className="p-6 bg-red-100 hover:bg-gray-300 focus:bg-gray-300"
        data-task-id={props.id} onClick={handleCloseButton}>X</button>
    </div>
  )
}
export default TaskTodo

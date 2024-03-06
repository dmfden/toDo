import { ITask } from '../components/@types/todo'
import { EFilter } from '../constants/project-constants'

enum ActionTypes {
  'ADD_TASK' = 'ADD_TASK',
  'REMOVE_TASK' = 'REMOVE_TASK',
  'CHANGE_TASK_STATUS' = 'CHANGE_TASK_STATUS',
  'FILTER_TASKS' = 'FILTER_TASKS',
}

interface ActionAdd {
  type: ActionTypes.ADD_TASK
  payload: ITask
}

interface ActionRemove {
  type: ActionTypes.REMOVE_TASK
  payload: string
}

interface ActionFilter {
  type: ActionTypes.FILTER_TASKS
  payload: EFilter
}

interface ChangeTaskStatus {
  type: ActionTypes.CHANGE_TASK_STATUS
  payload: string
}

export type Action = ActionAdd | ActionRemove | ChangeTaskStatus | ActionFilter
export { ActionTypes }

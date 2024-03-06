import { ITasks } from '../components/@types/todo'
import { Action, ActionTypes } from './action-types'
import { EFilter } from '../constants/project-constants'

const initialState = {
  'tasks': [],
  'filter': EFilter.all,
}

const tasksReducer = (state:ITasks = initialState, action: Action):ITasks => {
  switch (action.type) {
    case ActionTypes.ADD_TASK: {
      return { ...state, 'tasks': [...state.tasks, action.payload] }
    }
    case ActionTypes.REMOVE_TASK: {
      const newArr = state.tasks.filter((task) => task.id !== action.payload)
      return { ...state, 'tasks': [...newArr] }
    }
    case ActionTypes.CHANGE_TASK_STATUS: {
      const updatedArr = state.tasks.map((task) => {
        if (task.id === action.payload) {
          task.isDone = !task.isDone
        }
        return task
      })

      return { ...state, 'tasks': [...updatedArr] }
    }
    case ActionTypes.FILTER_TASKS: {
      const newFilter = action.payload
      return { ...state, 'filter': newFilter }
    }

    default: {
      return state
    }
  }
}
export { tasksReducer }

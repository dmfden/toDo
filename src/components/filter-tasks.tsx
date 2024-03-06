import { useSelector } from 'react-redux'
import { EFilter } from '../constants/project-constants'
import { useAppDispatch } from '../hooks'
import { ActionTypes } from '../redux/action-types'
import { RootState } from '../redux/todo-store'

function FilterTasks(): JSX.Element {
  const dispatch = useAppDispatch()
  const filters = useSelector<RootState, EFilter>((state) => state.filter)

  const filterTask = (filter: string):void => {
    if (filter === EFilter.all) {
      dispatch({ 'type': ActionTypes.FILTER_TASKS, 'payload': EFilter.all })
      return
    }
    if (filter === EFilter.completed) {
      dispatch({
        'type': ActionTypes.FILTER_TASKS,
        'payload': EFilter.completed,
      })
      return
    }

    dispatch({ 'type': ActionTypes.FILTER_TASKS, 'payload': EFilter.current })
  }

  const mappedFilters = (Object.keys(EFilter) as (keyof typeof EFilter)[]).map(
    (filter) => <button
      className={`p-2 rounded ${
        filters === filter && 'bg-cyan-500 text-white'
      }`}
      onClick={() => filterTask(filter)}
      key={filter}
    >
      {filter}
    </button>,

  )

  return (
    <div className="flex items-center gap-3 py-4">Filter: {mappedFilters}</div>
  )
}

export default FilterTasks

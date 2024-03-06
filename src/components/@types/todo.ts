import { EFilter } from '../../constants/project-constants'

export interface ITask {
  id: string
  name: string
  isDone: boolean
}

export interface ITasks {
  tasks: ITask[]
  filter: EFilter
}

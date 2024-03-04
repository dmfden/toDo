import { ITask } from "../components/@types/todo";
import { EFilter } from "../constants/projectConstants";

export enum ACTION_TYPES {
    "ADD_TASK" = "ADD_TASK",
    "REMOVE_TASK" = "REMOVE_TASK",
    "CHANGE_TASK_STATUS" = "CHANGE_TASK_STATUS",
    "FILTER_TASKS" = "FILTER_TASKS",
}

interface actionAdd {
    type: ACTION_TYPES.ADD_TASK,
    payload: ITask,
}

interface actionRemove {
    type: ACTION_TYPES.REMOVE_TASK,
    payload: string,
}

interface actionFilter {
    type: ACTION_TYPES.FILTER_TASKS,
    payload: EFilter,
}

interface changeTaskStatus {
    type: ACTION_TYPES.CHANGE_TASK_STATUS,
    payload: string,
}

export type Action = actionAdd | actionRemove | changeTaskStatus | actionFilter;
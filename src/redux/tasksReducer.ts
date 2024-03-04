import { ITasks } from "../components/@types/todo"
import { Action, ACTION_TYPES } from "./actionTypes";
import { EFilter } from '../constants/projectConstants';



const initialState = {
    tasks: [],
    filter: EFilter.all
}


export const tasksReducer = (state:ITasks = initialState, action: Action):ITasks => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TASK: {
            return {...state, tasks: [...state.tasks, action.payload]}
        }
        case ACTION_TYPES.REMOVE_TASK: {
            const newArr = state.tasks.filter(task=> task.id !== action.payload);
            return {...state, tasks: [...newArr]}
        }
        case ACTION_TYPES.CHANGE_TASK_STATUS: {
            const updatedArr = state.tasks.map(items=> {
                if(items.id === action.payload){
                    items.isDone = !items.isDone;
                }
                return items;
            });

            return {...state, tasks: [...updatedArr]}
        }
        case ACTION_TYPES.FILTER_TASKS: {
            const newFilter = action.payload;
            return {...state, filter: newFilter}
        }

        default: 
            return state;
    }
}
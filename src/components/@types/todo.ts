import { EFilter } from "../../constants/projectConstants";

export interface ITask {
    id: string,
    name: string,
    isDone: boolean,
}

export interface ITasks {
    tasks: ITask[],
    filter: EFilter;
}
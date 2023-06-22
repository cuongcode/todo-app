import {Tag} from './index'

export interface Task {
    title: string,
    description: string,
    tags: Tag[],
    status: string,
}
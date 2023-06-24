import {Tag} from './index'

export interface Task {
    id: any,
    title: string,
    description: string,
    tags: Tag[],
    status: string,
    isPinned: boolean,
}
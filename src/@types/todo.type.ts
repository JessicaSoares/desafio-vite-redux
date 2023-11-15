import { StatusEnum } from '@/enums/todo.enum'
import { todoReducer } from './../redux/reduces/todo.reduce';

export type UpdateTodoType = {
    id:number;
    title:string;
    description:string;
    status: StatusEnum;
    date:string;
}
export type GlobalStateType ={
    selectedTodo: TodoType | null;
    todos: TodoType[]
    fetching:boolean
}

export type TodoType = UpdateTodoType

export type ReduceType = {
    todoReducer: GlobalStateType
}
export type NewTodoType = Omit<UpdateTodoType,'id'>;

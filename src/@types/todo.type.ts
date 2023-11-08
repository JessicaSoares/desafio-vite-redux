
export type UpdateTodoType = {
    id:number;
    title:string;
    description:string;
    status:boolean;
    date:string;
}

export type TodoType = UpdateTodoType

export type NewTodoType = Omit<UpdateTodoType,'id'>;

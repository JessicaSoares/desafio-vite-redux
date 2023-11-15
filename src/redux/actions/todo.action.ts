import { ActionTypesEnum } from '@/enums/todo.enum'

import { createNewTodo, getTodosStorage } from '@/requests/index'
import { Dispatch } from '@/types/dispatch'
import { NewTodoType } from '@/types/todo.type'

const addTodo = (todo:NewTodoType) => ({
    type:ActionTypesEnum.ADD_TODO,
    payload: todo
})

const setLoading = () => ({
    type:ActionTypesEnum.SET_LOADING
})

const getAllTodos = (todos:TodoType[]) => ({
    type:ActionTypesEnum.GET_ALL_TODOS,
    payload:todos,
})


export const addNewTodo = (todo: NewTodoType) => {
    return async (dispatch: Dispatch) => {
    dispatch(setLoading())
    const response = await createNewTodo(todo)
    dispatch(addTodo(response))
}
}

export const getTodos = () => {
    return async (dispatch: Dispatch) => {
    dispatch(setLoading())
    const response = await getTodosStorage()
    dispatch(getAllTodos(response))
}
}
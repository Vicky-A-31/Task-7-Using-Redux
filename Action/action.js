import { ADD_NEW_USER, CHANGE_TO_ADD_MODE, CHANGE_TO_EDIT_MODE, DELETE_USER, EDIT_USER, SEARCHING } from "../Constant/constant"

export const addUser = input => {
   return { type: ADD_NEW_USER, payload: input }
}

export const saveUser = (id, input) => {
    return { type: EDIT_USER, payload: [id, input] }
}

export const changeToAddMode = () => {
    return { type: CHANGE_TO_ADD_MODE }
}

export const deleteUser = id => ({type: DELETE_USER, payload: id})

export const changeToEditMode = id => ({type: CHANGE_TO_EDIT_MODE , payload: id})

export const searching = input => ({ type: SEARCHING, payload: input })

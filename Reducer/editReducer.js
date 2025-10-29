import { CHANGE_TO_ADD_MODE, CHANGE_TO_EDIT_MODE, SEARCHING } from "../Constant/constant"

const initial_state = {
    isEditingMode: false,
    editId: null,
    saveBtn: 'Save',
    addBtn: 'Add',
    editTitle: 'Edit User Details',
    addTitle: 'Add New User',
    searchText: ''
}

const editReducer = (state = initial_state, action) => {
    switch(action.type) {
        case CHANGE_TO_EDIT_MODE : {
            return {
                ...state, isEditingMode: true, editId: action.payload
            }
        }
        case CHANGE_TO_ADD_MODE : {
            return {
                ...state, isEditingMode: false, editId: null
            }
        }
        case SEARCHING : {
            return {
                ...state,  searchText: action.payload
            }
        }
        default: return state;
    }
}

export default editReducer;
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
        case 'change_to_edit_mode': {
            return {
                ...state, isEditingMode: true, editId: action.payload
            }
        }
        case 'change_to_add_mode': {
            return {
                ...state, isEditingMode: false, editId: null
            }
        }
        case 'searching' : {
            return {
                ...state,  searchText: action.payload
            }
        }
        default: return state;
    }
}

export default editReducer;

const userReducer = (state = [], action) => {
    switch(action.type) {
        case 'add_new_user' : {
            let length = state.length;
            return [
                ...state,
                {
                id: length,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                }
            ]
        }
        case 'delete_user' : {
            let users = state.filter(user => action.payload != user.id)
            users = users.map((user, index) => ({...user, id: index}))
            return users;
        }
        case 'edit_user' : {
            let input = action.payload[1];
            let users = state.map(user => 
                action.payload[0] === user.id ? { ...user, name: input.name, email: input.email, password: input.password } : user
            )

            return users;
        }
        default: return state;
    }
}

export default userReducer;
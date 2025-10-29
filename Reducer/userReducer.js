import { ADD_NEW_USER, EDIT_USER, DELETE_USER } from "../Constant/constant";


const userReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_NEW_USER : {
            let myUUID = crypto.randomUUID();
            return [
                ...state,
                {
                id: myUUID,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                }
            ]
        }
        case DELETE_USER : {
            let users = state.filter(user => action.payload != user.id)
            //users = users.map((user, index) => ({...user, id: index}))
            return users;
        }
        case EDIT_USER : {
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
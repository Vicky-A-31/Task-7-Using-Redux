import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { reducer as formReducer } from "redux-form";
import editReducer from "./editReducer";

const rootReducer = combineReducers({
    users: userReducer,
    edit: editReducer,
    form: formReducer,
})


export default rootReducer
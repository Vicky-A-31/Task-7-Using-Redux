import { legacy_createStore as createStore } from "redux"
import rootReducer from "../Reducer/rootReducer"
import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage';
import persistStore from "redux-persist/es/persistStore"

const persistConfig = {
    key: 'root',
    storage, 
    whitelist: ['users', 'form']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;
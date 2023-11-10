import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from '../redux/slice/authSlice'
const rootReducer = combineReducers({
    auth : authReducer
})

export const store = configureStore({
    reducer : rootReducer,
})
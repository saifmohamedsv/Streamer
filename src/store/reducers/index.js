import {combineReducers} from "redux";
import authReducer from "./authReducer";
import {reducer as FormReducer} from "redux-form";
import streamReducer from "./streamReducer";

export default combineReducers({
    auth: authReducer,
    form: FormReducer,
    streams: streamReducer
})





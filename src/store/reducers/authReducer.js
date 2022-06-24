import {SIGN_IN, SIGN_OUT} from "../types";


const initState = {
    isSignedIn: null,
    uid: null,
}


export default (state = initState, action) => {
    switch (action.type) {
        case SIGN_IN :
            return {...state, isSignedIn: true, uid: action.payload}
        case SIGN_OUT:
            return {...state, isSignedIn: false, uid: null}
        default:
            return state
    }
}
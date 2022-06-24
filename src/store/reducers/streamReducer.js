import * as t from "../types";
import _ from 'lodash'

const streamReducer = (state = {}, action) => {
    switch (action.type) {

        case t.FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')}

        case t.FETCH_STREAM:
            return {[action.payload.id]: action.payload}

        case t.CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload}

        case t.EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload}

        case t.DELETE_STREAM:
            return _.omit(state, action.payload)

        default:
            return state
    }
}


export default streamReducer
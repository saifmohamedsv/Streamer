import * as t from "../types";
import streams from "../../API/streams";
import history from "../../history";


export const signIn = (id) => {
    return {
        type: t.SIGN_IN,
        payload: id
    }
}


export const signOut = () => {
    return {
        type: t.SIGN_OUT
    }
}


export const createStream = (formValues) => async (dispatch, getState) => {
    const {uid} = getState().auth
    const response = await streams.post('/streams', {...formValues, user_id: uid})
    dispatch({
        type: t.CREATE_STREAM,
        payload: response.data
    })
    history.push('/')
}

export const fetchStreams = () => async (dispatch, getState) => {
    const response = await streams.get('/streams')
    dispatch({
        type: t.FETCH_STREAMS,
        payload: response.data
    })
}

export const fetchStream = (id) => async (dispatch, getState) => {
    const response = await streams.get(`/streams/${id}`)
    dispatch({
        type: t.FETCH_STREAM,
        payload: response.data
    })
}

export const editStream = (id, values) => async (dispatch, getState) => {
    const response = await streams.patch(`/streams/${id}`, {...values})
    dispatch({
        type: t.EDIT_STREAM,
        payload: response.data
    })
    history.push('/')
}

export const deleteStream = (id) => async (dispatch, getState) => {
    await streams.delete(`/streams/${id}`)
    dispatch({
        type: t.DELETE_STREAM,
        payload: id
    })
    history.push('/')
}
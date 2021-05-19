import axios from 'axios'

const URL = 'https://assis-todolist.herokuapp.com/api/todo'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGE',
    payload: event.target.value
})

export const search = (clicked) => {

    return async (dispatch, getState) => {
        const description = getState().todo.description
        const searched = getState().todo.searched
    
        const search = (description && searched) ? `&description__regex=/${description}/i` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => {
                dispatch({ type: 'TODO_SEARCH', payload: resp.data })
                if(clicked){
                    dispatch({ type: 'TODO_SEARCHED' })
                }
                if (resp.data.length === 0 && description){
                    dispatch({ type: 'TODO_NO_RESULT_TRUE' })
                } else {
                    dispatch({ type: 'TODO_NO_RESULT_FALSE' })
                }
            })
    }
}

export const add = (description) => {
    var currentDate = new Date()
    var date = currentDate.toISOString().slice(0, 10)
    date = date + 'T12:00:00'

    return async dispatch => {
        axios.post(URL, {description, deadLine: date})
            .then(resp => dispatch({ type: 'TODO_CLEAN' }))
            .then(resp => dispatch(search()))
    }
} 

export const markAsDone = (id, done) => {

    return dispatch => {
        axios.put(`${URL}/${id}`, { done: !done })
            .then(resp => dispatch(search()))
    }
} 

export const changeDeadLine = (id, date) => {
    date = date + 'T12:00:00'
    return dispatch => {
        axios.put(`${URL}/${id}`, { deadLine: date })
            .then(resp => dispatch(search()))
    }
} 

export const remove = (id) => {

    return dispatch => {
        axios.delete(`${URL}/${id}`)
            .then(resp => dispatch(search()))
    }
}
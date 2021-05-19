const INITIAL_STATE = {
    description: '',
    list: [0,],
    noResult: false,
    searched: false
}

const todoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGE': 
            return { ...state, description: action.payload, searched: false }
        case 'TODO_SEARCH':
            return { ...state, list: action.payload}
        case 'TODO_SEARCHED':
            return { ...state, searched: true}
        case 'TODO_CLEAN':
            return {...state, description: ''}
        case 'TODO_NO_RESULT_TRUE':
            return {...state, noResult: true }
        case 'TODO_NO_RESULT_FALSE':
            return {...state, noResult: false }

        default:
            return {...state, searched: false}
    }
}

export default todoReducer
import { LOAD_STEPS } from '../actions/actionTypes'

const initialState = {
    steps: 0,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STEPS :
            return {
                ...state,
                steps: action.payload,
            }
        break
        default:
            return state
        break
    }
}

export default rootReducer
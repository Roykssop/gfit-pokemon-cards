import { LOAD_STEPS, REVEAL_CARDS } from '../actions/actionTypes'

const initialState = {
    steps: 0,
    monsterCards: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STEPS :
            return {
                ...state,
                steps: action.payload,
            }
        break
        case REVEAL_CARDS:
            return {
                ...state,
                monsterCards: action.payload,
            }
        break
        default:
            return state
        break
    }
}

export default rootReducer
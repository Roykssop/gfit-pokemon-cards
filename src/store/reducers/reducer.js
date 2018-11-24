import { LOAD_STEPS, REVEAL_CARDS, AUTH_SUCCEED, AUTH_FAILED } from '../actions/actionTypes'

const initialState = {
    auth: false,
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
        case AUTH_SUCCEED:
            return {
                ...state,
                auth: true,
            }
        case AUTH_FAILED:
            return {
								...state,
								auth: false,
						}
        default:
            return state
        break
    }
}

export default rootReducer
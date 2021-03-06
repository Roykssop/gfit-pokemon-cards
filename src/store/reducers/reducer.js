import { LOAD_STEPS, REVEAL_CARDS, AUTH_SUCCEED, AUTH_FAILED, LOAD_USER, SAVE_CARDS, LOAD_COLLECTED_CARDS, CAN_PLAY } from '../actions/actionTypes'

const initialState = {
    auth: false,
    steps: 0,
		monsterCards: [],
		cardsSaved: false,
		canPlay: false,
		collectedCards: [],
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
				break
				case AUTH_FAILED:
            return {
								...state,
								auth: false,
						}
				break
				case LOAD_USER:
						return {
							...state,
							user: action.payload,
						}
				break
				case SAVE_CARDS:
						return {
							...state,
							cardsSaved: true,
						}
				break
				case CAN_PLAY:
						return {
							...state,
							canPlay: action.payload,
						}
				break
				case LOAD_COLLECTED_CARDS:
						return {
							...state,
							collectedCards: action.payload,
						}
        default:
            return state
        break
    }
}

export default rootReducer
import { LOAD_STEPS } from './actionTypes'

export const loadSteps = steps => ({
        type: LOAD_STEPS,
        payload: steps,
    })
import axios from 'axios'
import moment from 'moment'
import { LOAD_STEPS } from './actionTypes'
import { REVEAL_CARDS } from './actionTypes'

export const loadSteps = token => {
	const grabSteps = apiFitResponse => {
		const numberSteps = apiFitResponse.data.bucket[0].dataset[0].point[0].value[0].intVal || 0
		return numberSteps
	}

	return dispatch => {
		axios.post('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate',
    {
      aggregateBy: [{
        dataTypeName: 'com.google.step_count.delta',
        dataSourceId: 'derived:com.google.step_count.delta:com.google.android.gms:estimated_steps',
      }],
      bucketByTime: { durationMillis: 86400000 },
      startTimeMillis: moment().startOf('day').valueOf(),
      endTimeMillis: moment().valueOf(),
    },
    { headers: { Authorization: `Bearer ${ token }` } }, )
    .then(response => {
				dispatch({
					type: LOAD_STEPS,
					payload: grabSteps(response),
        })
    })
    .catch(error => {
      console.log(error)
    })
	}

    /* axios.post('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate',
    {
      aggregateBy: [{
        dataTypeName: 'com.google.step_count.delta',
        dataSourceId: 'derived:com.google.step_count.delta:com.google.android.gms:estimated_steps',
      }],
      bucketByTime: { durationMillis: 86400000 },
      startTimeMillis: moment().startOf('day').valueOf(),
      endTimeMillis: moment().valueOf(),
    },
    { headers: { Authorization: `Bearer ${ token }` } }, )
    .then(response => {
			console.log(response)

      return dispatch => {
          dispatch({
            type: LOAD_STEPS,
            payload: response,
        })
      }

    })
    .catch(error => {
      console.log(error)
    })*/
}

export const revealCards = monsterCards => ({
    type: REVEAL_CARDS,
    payload: monsterCards,
})
import axios from 'axios'
import moment from 'moment'
import firebase from '../../initializers/firebase'
import { LOAD_STEPS, REVEAL_CARDS, AUTH_SUCCEED, AUTH_FAILED } from './actionTypes'


export const loadSteps = () => {
	const grabSteps = apiFitResponse => {
		const numberSteps = apiFitResponse.data.bucket[0].dataset[0].point[0].value[0].intVal || 0
		return numberSteps
  }

  const token = localStorage.getItem('accessToken')

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
    { headers: { Authorization: `Bearer ${ token }` } },)
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
}

export const revealCards = monsterCards => ({
    type: REVEAL_CARDS,
    payload: monsterCards,
})

export const authFirebase = () => {

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.addScope('https://www.googleapis.com/auth/fitness.activity.read')

  return dispatch => firebase.auth().signInWithPopup(provider)
  .then(result => {
    const token = result.credential.accessToken
    const { user } = result
    localStorage.setItem('accessToken', token)
    dispatch(authSucceed())
  }).catch(error => {
    dispatch(authFailed())
  })
}

export const authSucceed = () => {
  return {
    type: AUTH_SUCCEED,
    payload: {},
  }
}

export const authFailed = () => {
  return {
    type: AUTH_FAILED,
    payload: {},
  }
}
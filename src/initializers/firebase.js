import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAQuQhKa9TTvYS8laRfyowxIoQdqngRP5Q',
  authDomain: 'fitness-cards.firebaseapp.com',
  databaseURL: 'https://fitness-cards.firebaseio.com',
  projectId: 'fitness-cards',
  storageBucket: 'fitness-cards.appspot.com',
  messagingSenderId: '123607137776',
}

firebase.initializeApp(config)

export default firebase
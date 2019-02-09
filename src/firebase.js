import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBnp-zpoMNnAE5zbOILVt4ZGh9qoig1oHU",
    authDomain: "goalcoach-b255d.firebaseapp.com",
    databaseURL: "https://goalcoach-b255d.firebaseio.com",
    projectId: "goalcoach-b255d",
    storageBucket: "goalcoach-b255d.appspot.com",
    messagingSenderId: "739488554632"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
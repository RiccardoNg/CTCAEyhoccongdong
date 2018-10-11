//firebase dang install global
import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCgbehsMhRrdJ79X8fkdBn0wjlic2jGt6g",
    authDomain: "nhattest.firebaseapp.com",
    databaseURL: "https://nhattest.firebaseio.com",
    projectId: "nhattest",
    storageBucket: "nhattest.appspot.com",
    messagingSenderId: "710892669430"
  };
export const firebaseApp = firebase.initializeApp(config);




import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDArfeYLts3w_o5C5E7HL9ujGk20axfPxo",
    authDomain: "expensify-f9c28.firebaseapp.com",
    databaseURL: "https://expensify-f9c28.firebaseio.com",
    projectId: "expensify-f9c28",
    storageBucket: "expensify-f9c28.appspot.com",
    messagingSenderId: "156587674201",
    appId: "1:156587674201:web:83b907f39bbe23fca53f48",
    measurementId: "G-Y6S6KLS2MG"
 };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 

  export {firebase, googleAuthProvider ,database as default};
  

//   database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
//   });
  
//   database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 5900,
//     createdAt: 976123498763
//   });
  
//   database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 976123498763
//   });

// //when an expense is removed
//  database.ref().on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//  });

// //when an expense is edited
// database.ref().on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//  });

// //when an expense is added
//  database.ref().on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//  });



//   database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     });



//occurs on every change
// database.ref().on('value', (snapshot) => {
//     const value = snapshot.val()
//     console.log(value.name, "is",value.age, "Years old");
// });

//occurs once
//   database.ref()
//     .once('value')
//     .then((snapshot)=> console.log(snapshot.val()))
//     .catch((e)=>console.log(e));


//   database.ref().set({
//       name: "chris",
//       age: "19",
//       location: {
//           city: "Lake Worth",
//           country: "US"
//       }
//   }).then(() => {
//     console.log('Data is saved');
//   }).catch((e) => {
//     console.log('This failed');
//   })

//update function
// database.ref().update({
//     name: "chris",
//     age: 20
// });
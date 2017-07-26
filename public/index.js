
const instagram = document.querySelector('.instagram__photos');
window.addEventListener('load', () => {
  console.log('loaded');
  instagram.classList.remove('hide');
})

// function firebaseSetup() {
//
//   document.addEventListener('DOMContentLoaded', function() {
//     // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
//     // // The Firebase SDK is initialized and available here!
//     //
//     // firebase.auth().onAuthStateChanged(user => { });
//     // firebase.database().ref('/path/to/ref').on('data', snapshot => { });
//     // firebase.messaging().requestPermission().then(() => { });
//     // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
//     //
//     // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
//
//     try {
//       let app = firebase.app();
//       let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
//     } catch (e) {
//       console.error(e);
//     }
//   });
//
// }
//
//
// firebaseSetup();

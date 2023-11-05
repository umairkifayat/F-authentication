import {  onAuthStateChanged,signOut  } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { auth } from "./config.js"

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
      window.location = './register.html'
    }
  });



  const logout = document.querySelector('.btn');


  logout.addEventListener('click',()=>{
    // const auth = getAuth();
signOut(auth).then(() => {
  console.log('sucessful');
  window.location = './login.html'
}).catch((error) => {
  // An error happened.
  console.log('error');
});
  })

  
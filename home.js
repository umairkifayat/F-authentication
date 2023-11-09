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



  const text = document.querySelector('#text')
  const des = document.querySelector('#description')
  const btn = document.querySelector('#submit');



  btn.addEventListener('submit', async(event) =>{
event.preventDefault();
console.log(text.value);
console.log(des.value);

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

  })

  
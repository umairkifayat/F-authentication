import {  signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { auth,db } from "./config.js"
import { collection, addDoc } from "firebase/firestore"

const email = document.querySelector('.email');
const btn = document.querySelector('.button');
const password = document.querySelector('.password');



btn.addEventListener('click',(event)=>{
event.preventDefault()
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    window.location = './home.html'
    email.value = ''
    password.value = ''

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });

})
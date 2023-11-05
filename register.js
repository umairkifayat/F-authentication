import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

const form =document.querySelector('.button');
const password =document.querySelector('.password');
const email =document.querySelector('.email');


// console.log(email);
// console.log(password);
// console.log(form);



form.addEventListener('click',(event)=>{
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    email.value =''
    password.value = ''
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });

})

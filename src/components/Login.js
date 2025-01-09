import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import{auth} from "../utils/firebase"


const Login = () => {
  const[isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
const email = useRef(null);
const password = useRef(null);
  const handleButtonClick =()=>{
//Validate the form data
const message = checkValidData(email.current.value,password.current.value);
console.log(message);
setErrorMessage(message);
if(message) return;
//sign In/signUp Logic
if(!isSignInForm){
//SignUp Logic
createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
    // ..
  });
}
else{
//SignIn Logic
signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
}
  }
;

  const toggleSignInForm = ()=>{
setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg' alt='banner'/>
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className='absolute p-12  text-white bg-black bg-opacity-80 w-3/12 my-36 mx-auto right-0 left-0 rounded-lg' >
      <h1 className='font-bold py-4 text-3xl'>{isSignInForm?"Sign In" :"Sign Up"}</h1>
        {!isSignInForm &&<input type='text' placeholder='Full Name' className='p-4 my-4 w-full rounded-lg  bg-black bg-opacity-40 border border-gray '/>}
        <input type='text' ref={email} placeholder='Email or Mobile No' className='p-4 my-4 w-full rounded-lg bg-black bg-opacity-40 border border-gray'/>
        <input type='password' ref={password} placeholder='Password' className='p-4 my-4 w-full rounded-lg  bg-black bg-opacity-40 border border-gray '/>
        <p className='text-red-500'>{errorMessage}</p>
        <button className= 'p-4 my-6 rounded-lg bg-red-600 text-white w-full' onClick={handleButtonClick}>{isSignInForm?"Sign In" :"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix?Sign Up Now.":"Already a user?Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login;

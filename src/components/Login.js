import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const[isSignForm,setIsSignForm] = useState(true);

  const handleButtonClick =()=>{}

  
  const toggleSignInForm = ()=>{
setIsSignForm(!isSignForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg' alt='banner'/>
      </div>
      <form className='absolute p-12  text-white bg-black bg-opacity-80 w-3/12 my-36 mx-auto right-0 left-0 rounded-lg' >
      <h1 className='font-bold py-4 text-3xl'>{isSignForm?"Sign In" :"Sign Up"}</h1>
        {!isSignForm &&<input type='text' placeholder='Full Name' className='p-4 my-4 w-full rounded-lg  bg-black bg-opacity-40 border border-gray '/>}
        <input type='text' placeholder='Email or Mobile No' className='p-4 my-4 w-full rounded-lg bg-black bg-opacity-40 border border-gray'/>
        <input type='password' placeholder='Password' className='p-4 my-4 w-full rounded-lg  bg-black bg-opacity-40 border border-gray '/>
        <button className= 'p-4 my-6 rounded-lg bg-red-600 text-white w-full' onClick={handleButtonClick}>{isSignForm?"Sign In" :"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignForm?"New to Netflix?Sign Up Now.":"Already a user?Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login;

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData]= useState({})
  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      }
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/signup', formData);
    console.log(res);
  }
  return (
    <div className='py-20 px-3 max-w-lg mx-auto'>
      <h1 className= 'text-3xl text-center font-semibold my-7'>
        Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input type="email" placeholder='email'
          className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type="password" placeholder='password'
          className='border p-3 rounded-lg' id='password'/>
          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign up</button>
        </form>
        <div className="flex gap-2 mt-5">
          <p>Don't have an account?</p>
          <Link to={"/sign-up"}>
          <span className='text-blue-700'> Sign Up</span>
          </Link>
        </div>
    </div>
  )
}

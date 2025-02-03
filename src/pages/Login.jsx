import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { logInStart, logInSuccess, logInFailure} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function LogIn() {
  const [formData, setFormData]= useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
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
    try{
    dispatch(logInStart());
    const res = await fetch('/api/auth/login', formData);
    console.log(res);
    if (res.success === false) {
      dispatch(logInFailure(res.message));
      return;
    }
    dispatch(logInSuccess(res));
    navigate('/');
  } catch (error) {
    dispatch(logInFailure(error.message));
  }
 };
  return (
    <div className='py-20 px-3 max-w-lg mx-auto'>
      <h1 className= 'text-3xl text-center font-semibold my-7'>
        Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input type="email" placeholder='email'
          className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type="password" placeholder='password'
          className='border p-3 rounded-lg' id='password'/>
          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Log in</button>
          <OAuth />
        </form>
        <div className="flex gap-2 mt-5">
          <p>Dont have an account?</p>
          <Link to={"/sign-up"}>
          <span className='text-blue-700'> Sign Up</span>
          </Link>
        </div>
    </div>
  )
}

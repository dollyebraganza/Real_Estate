import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
      <Link to="/">
      <h1 className ="font-bold text-sm sm:text-xl flex flex-wrap">
        <span  className ="text-slate-500">Real</span>
        <span  className='text-slate-700'>Estate</span>
      </h1>
      </Link>
      <form className='bg-slate-100 p-3 rounded-lg'> 
        <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64" />
      </form>
      <ul className="flex gap-4">
        <Link to ="/home">
        <li className="hidden sm:inline text-slate-700 hover:underline">Home</li></Link>
        <Link to ="/about">
        <li className="hidden sm:inline text-slate-700 hover:underline">About</li></Link>
        <Link to ="/signin">
        <li className="text-slate-700 hover:underline">Sign in</li></Link>
      </ul>
      </div>
    </header>
  )
}







































































/*import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    < nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="C:\Users\DOLLY\Desktop\New folder\p_logo\logo.jpg"
            class="h-8"
            alt="RealEstate Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            RealEstate
          </span>
          <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input type = "text" placeholder="search" />
          </form>
        </Link>
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
                </Link>
                </li>
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            
                <Link
                to="/"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                  </Link>
                  </ul>
                  <li>
                    <Link
                      to="/"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </Link>
                  </li>
                
                <div class="py-1">
                  <Link
                    to="/"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    signOut
                  </Link>
                </div>
              
            
            <li>
              <Link
                to="/"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                SignIn
              </Link>
            </li>
            <li>
              <Link
                to="/"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
            
      

export default Header; 
</ul>
</div>
</nav>
 );
}
export default Header;
*/
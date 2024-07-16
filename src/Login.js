import React from 'react';
import { loginUrl } from './spotify';
import img1 from './Images/spotify-logo-jpeg';
export default function Login() {
  return (
    <div className='grid place-items-center h-screen bg-black'>
        {/* <h1>I am the login page</h1> */}
      {/* spotify logo */}
      <img className='w-full h-52' src={img1}  alt="spotify" />
      {/* {Login with Spotify} */}
      <a href={loginUrl} className='p-5 bg-spotify-green rounded-full font-extrabold no-underline text-white' >LOGIN WITH SPOTIFY</a>
    </div>
  ) 
} 

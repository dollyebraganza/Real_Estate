import React from 'react'
import { GoogleAuthProvider,getAuth , signInWithPopup} from '../firebase/auth';
import { app } from '../firebase';

export default function OAuth() {
    const handleGoogleClick = async () => {
        try {
            const Provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const result = await signInWithPopup(auth, Provider)

            console.log(result);
        } catch (error) {
        console.log('could not sign in with google', error);
        }
    };

  return (
    <button onClick={handleGoogleClick} type ='button' className='bg-blue-700 text-white p-3 rounded-lg uppercase hover:opacity-95 '>
        Continue with Google
    </button>
  );
}


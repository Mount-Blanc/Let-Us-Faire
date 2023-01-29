import { getAuth, signInAnonymously } from "firebase/auth";
import {useNavigate} from 'react-router-dom'


export const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    const navigate=useNavigate()

    // Signed in..
    navigate('/home')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
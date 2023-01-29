
import {auth} from './FirebaseConfig'
import { getAuth, signInAnonymously } from "firebase/auth";
import {useNavigate} from 'react-router-dom'

function SignIn () {
const navigate=useNavigate()

const signinHandler = () => {

     const auth = getAuth();
    signInAnonymously(auth)
      .then(() => {
    
        // Signed in..
        navigate('/home')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });}

    return (
        <div>
            <button onClick={signinHandler}>Guest Sign in</button>
        </div>
    )
}
export default SignIn
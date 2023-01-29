
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
         <Card  border="primary" >
        {/* <Card.Header>Let-Us-Faire</Card.Header> */}
            <Button variant="primary" onClick={signinHandler} >Guest Sign in</Button>
         </Card>

    

    )
}
export default SignIn
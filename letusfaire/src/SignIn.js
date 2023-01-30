
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './SignIn.css'

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
         <Card bg='white' >
        <Card.Header as='h3'>Let-Us-Faire</Card.Header> 
        <Card.Text>
            A simple and reliable way to keep track of tasks
          </Card.Text>
            <Button variant="primary" onClick={signinHandler} >Guest Sign in</Button> 
         </Card>
    

    )
}
export default SignIn
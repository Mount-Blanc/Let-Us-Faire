import './App.css';
import {auth} from './FirebaseConfig'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import SignIn from './SignIn';
import Todo from './Todo';

function App() {


  return (
    <div className="App">
    <SignIn/>
   <Todo/>
    </div>
  );
}

export default App;

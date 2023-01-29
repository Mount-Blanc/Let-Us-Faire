import './App.css';
import {auth} from './FirebaseConfig'

import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createBrowserRouter
} from "react-router-dom";


import SignIn from './SignIn';
import Todo from './Todo';



const routeDefinitions=createRoutesFromElements(
  <Route>
    <Route path="/" element={<SignIn/>}/>
    <Route path="/home" element={<Todo/>}/>
  </Route>
)

const router= createBrowserRouter(routeDefinitions)
function App() {


  return (
    <RouterProvider router={router}/>
  );
}

export default App;

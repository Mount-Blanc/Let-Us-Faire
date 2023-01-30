import './App.css';

import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createBrowserRouter
} from "react-router-dom";


import SignIn from './components/SignIn';
import Todo from './components/Todo';



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

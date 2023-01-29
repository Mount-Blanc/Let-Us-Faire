import './App.css';
import {db} from './FirebaseConfig'
import {collection, addDoc,getDocs } from "firebase/firestore"; 
import {useState, useEffect} from 'react'
function App() {
const [todo, settodo] = useState([])

useEffect( () => {

  const getTodos =  async () => {
    const docRef =collection(db, "todos");
  const docSnap = await getDocs(docRef);
 settodo(docSnap.docs.map((doc) => ({...doc.data()}) )) 
  };

  getTodos();
}, []);
  

  return (
    <div className="App">
      hello
      {todo.map((todos) => (
         <div>{todos.todo}</div>
      ))}
    </div>
  );
}

export default App;

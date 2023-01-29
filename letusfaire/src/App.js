import './App.css';
import {db} from './FirebaseConfig'
import {collection, addDoc,getDocs } from "firebase/firestore"; 
import {useState} from 'react'
function App() {
const [todo, settodo] = useState([])

 
const getHanlder = async () => {
  const docRef =collection(db, "todos");
  const docSnap = await getDocs(docRef);
 settodo(docSnap.docs.map((doc) => ({...doc.data()}) )) 
 console.log(todo)
}
  

  return (
    <div className="App">
      hello
      {todo.map((todos) => (
         <div>{todos.todo}</div>
      ))}
      <button onClick={getHanlder}>Click me</button>
    </div>
  );
}

export default App;

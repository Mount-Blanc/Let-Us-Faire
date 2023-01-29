import './App.css';
import {db} from './FirebaseConfig'
import {collection, addDoc,getDocs,updateDoc,doc } from "firebase/firestore"; 
import {useState, useEffect} from 'react'
function App() {

const [todo, settodo] = useState([])
const [addTodo, setaddTodo] = useState('')

    const docRef =collection(db, "todos");

useEffect( () => {

  const getTodos =  async () => {

  const docSnap = await getDocs(docRef);

 settodo(docSnap.docs.map((doc) => ({...doc.data(),id:doc.id}) )) 
  };

  getTodos();
}, []);
  
const todoHandler = (event) => {
  setaddTodo(event.target.value)
}
const addtoDocument= async () => {
  settodo(addTodo)
  await addDoc(docRef, {todo:addTodo})
}


const updateTodo = async (id, todo) => {
    const document = await doc(db,"todos", id);
const newTodo= {todo:"update"}
  await updateDoc(document,newTodo)
}


  return (
    <div className="App">
      hello
      <input placeholder='Enter Todo' type="text" onChange={todoHandler}/>
    <button onClick={addtoDocument}>Add</button>
      {todo.map((todos) => (
         <div>{todos.todo}
         {todos.completed}
         <button onClick={() => {
                updateTodo(todos.id, todos.todo);
              }}
         >Update</button>
         </div>
      ))}
    </div>
  );
}

export default App;

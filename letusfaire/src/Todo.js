import {useState, useEffect} from 'react'
import {collection, addDoc,getDocs,updateDoc,doc,deleteDoc } from "firebase/firestore"; 
import {db} from './FirebaseConfig'
      import { getAuth, onAuthStateChanged } from "firebase/auth";


function Todo () {
    const [todo, settodo] = useState([])
    const [newTodo, setnewTodo] = useState('')
    
    const docRef =collection(db, "todos");

    useEffect( () => {
    
      const getTodos =  async () => {
    
      const docSnap = await getDocs(docRef);
    
     settodo(docSnap.docs.map((doc) => ({...doc.data(),id:doc.id}) )) 
      };
    
      getTodos();
    }, [docRef  ]);
      
    
    

    const inputHandler = (event) => {
        setnewTodo(event.target.value)
      }
      
      
      const addTodo= async () => {
        await addDoc(docRef, {todo:newTodo})
        setnewTodo('')
      }
      
      
      const updateTodo = async (id) => {
          const document =  doc(db,"todos", id);
      const updatedtodo= {todo:"update"}
        await updateDoc(document,updatedtodo)
      }
      
      
      const deleteTodo= async(id) => {
        const document =  doc(db,"todos", id);
        await deleteDoc(document)
      }


      // const auth = getAuth();
      // onAuthStateChanged(auth, (user) => {
      //   if (user) {
      //     // User is signed in, see docs for a list of available properties
      //     // https://firebase.google.com/docs/reference/js/firebase.User
      //     const uid = user.uid;
      //     // ...
      //   } else {
      //     // User is signed out
      //     // ...

      //     };
      //   }
      // );


    return (
        <div>
        <input value={newTodo}placeholder='Enter Todo' type="text" onChange={inputHandler}/>
        <button onClick={addTodo}>Add</button>
    
          {todo.map((todos) => (
             <div>{todos.todo}
             {todos.completed}
             <button onClick={() => {
                    updateTodo(todos.id, todos.todo);
                  }}
             >Update</button>
                <button onClick={() => {
                    deleteTodo(todos.id);
                  }}
             >Delete</button>
             </div>
          ))}
          </div>
    )
}
export default Todo
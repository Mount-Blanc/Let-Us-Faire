import {useState, useEffect} from 'react'
import {collection, addDoc,getDocs,updateDoc,doc,deleteDoc } from "firebase/firestore"; 
import {db} from '../FirebaseConfig'
      import Button from 'react-bootstrap/Button';

      import './Todo.css'

function Todo () {
    const [todo, settodo] = useState([])
    const [newTodo, setnewTodo] = useState('')
        const [isUpdating, setisUpdating] = useState(
          {updating:false,
          id:''}
        )

    
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
        if (newTodo != ''){
        await addDoc(docRef, {todo:newTodo})
        setnewTodo('')
        }
      }
      
      
      const updateTodo = async () => {
                setisUpdating(false)
          const document =  doc(db,"todos", isUpdating.id);
      const updatedtodo= {todo:newTodo}
        await updateDoc(document,updatedtodo)
        setnewTodo('')
      }
      
      const inputUpdate =  (id) => {  
        setisUpdating(
          {
            updating:true,
            id:id
          }
        )
        ;}
      


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

      const blurHandler = () => {
        setisUpdating({updating:false})
        console.log(isUpdating.updating)
      }
    return (
        <div>
          {isUpdating.updating 
          ? (<><input value ={newTodo}  onBlur={blurHandler} onChange={inputHandler} placeholder='Update Todo'/>  
           <Button variant="warning"  onClick={updateTodo}>Update</Button >
          </>) 
          : (<><input value={newTodo}placeholder='Enter Todo' type="text" onChange={inputHandler}/>
        <Button variant="primary" onClick={addTodo}>Add</Button ></>

)}
    
          {todo.map((todos,id) => (
             <div key={id}>{todos.todo}
             {todos.completed}
             <Button variant="warning" onClick={()=> {inputUpdate(todos.id)}}
             >Update</Button>
                <Button variant="danger" onClick={() => {
                    deleteTodo(todos.id);
                  }}
             >Delete</Button>
             </div>
          ))}
          </div>
    )
}
export default Todo
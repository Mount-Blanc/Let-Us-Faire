import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../FirebaseConfig";
import Button from "react-bootstrap/Button";

import "./Todo.css";

function Todo() {
  const [todo, settodo] = useState([]);
  const [newTodo, setnewTodo] = useState("");
  const [updatednewTodo, setupdatednewTodo] = useState("");

  const [isUpdating, setisUpdating] = useState({ updating: false, id: "" });

  const docRef = collection(db, "todos");
  useEffect(() => {
    const getTodos = async () => {
      const docSnap = await getDocs(docRef);

      settodo(docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTodos();
  }, [docRef]);

  const inputHandler = (event) => {
    setnewTodo(event.target.value);
  };

  const updateinputHandler = (event) => {
    setupdatednewTodo(event.target.value);
  };

  const addTodo = async () => {
    if (newTodo != "") {
      await addDoc(docRef, { todo: newTodo });
      setnewTodo("");
    }
  };

  const updateTodo = async () => {
    if (updatednewTodo != "") {
      const document = doc(db, "todos", isUpdating.id);
      const updatedtodo = { todo: updatednewTodo };
      await updateDoc(document, updatedtodo);
      setisUpdating({ updating: false, id: "" });
      setupdatednewTodo("");
    }
  };

  const inputUpdate = (id) => {
    setisUpdating({
      updating: true,
      id: id,
    });
  };

  const deleteTodo = async (id) => {
    const document = doc(db, "todos", id);
    await deleteDoc(document);
  };

  //  const blurHandler = () => {
  //    setisUpdating({updating:false,id:''})
  //   console.log(isUpdating.updating)
  // }
  return (
    <div>
      {isUpdating.updating ? (
        <>
          <input
            value={updatednewTodo}
            onChange={updateinputHandler}
            placeholder="Update Todo"
          />
          <Button variant="warning" onClick={updateTodo}>
            Update
          </Button>
          <Button
            variant="danger"
            onClick={() => setisUpdating({ updating: false, id: "" })}
          >
            Cancel
          </Button>
        </>
      ) : (
        <>
          <input
            value={newTodo}
            placeholder="Enter Todo"
            type="text"
            onChange={inputHandler}
          />
          <Button variant="primary" onClick={addTodo}>
            Add
          </Button>
        </>
      )}

      {todo.map((todos, id) => (
        <div key={id}>
          {todos.todo}
          {todos.completed}
          <Button
            variant="warning"
            onClick={() => {
              inputUpdate(todos.id);
            }}
          >
            Update
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              deleteTodo(todos.id);
            }}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
}
export default Todo;

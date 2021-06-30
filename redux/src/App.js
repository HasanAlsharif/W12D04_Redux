import React from "react";
import { useState , useEffect} from "react";


// redux
import axios from 'axios';
// import useDispatch and useSelector to dispatch and subscribe to the store
import { useDispatch,useSelector } from 'react-redcux';
//import the actions to dispatch them
import { createTodo, setTodos } from './reducers/todos';


import "./App.css";

import Details from './components/Details'
import Home  from './components/Home'
import Products from './components/Products'
import About from './components/About'


// =========================== APP ==========================================
// just to make it easy for us lets name  dispatch = useDispatch();
const dispatch = useDispatch();
const App = () => {

  const [newTodo, setNewTodo] = useState('');

  // call the store 
  // useSelector gives us access to the store
 const state = useSelector((state) => {
  // specify which state to subscribe to (state tree => reducer => state name )
  // now this state in the call back you can call it store or smth , because it represents all the states of all the reducers in the store
  return {
    // it can be of all state: {todosManagerState,loginManagerState}
    //user: state.login.user,
    todos: state.todos.todos
    // the first state.todos is the state of the whole store of the todos reducer (manager todos (from the store))
    // the second .todos is the todos state of the manager todos
  };
});
// now to call it in the APP we use the dark blue satet then the key .todos +state.todos+
// find the call below in the map method

  const createTodo = () => {
    axios
      .post(`http://localhost:5000/todos`, {newTodo})
      .then((res) => {
        // after saving the todo in the database dispatch
        // an (action) to add the new todo to the store , here we have the  createTodo  action
        //refere to the todos.js
        dispatch(createTodo(res.data));
        //the res.data is the object from the database from postman (which is the object {title : play , is_c : no})
        // now the createTodo will return an object with the type an payload 
      })
      .catch((err) => {
        console.log(err);
      });
  };


  // for the getAllTodos , you have to manually call it because there is nothing in the body to send it
  // so we use useEffect

  useEffect(() => {
    getAllTodos();
  }, []);

  const getAllTodos = () => {
    axios
      .get(`http://localhost:5000/todos`)
      .then((res) => {
        // after saving the todo in the database dispatch
        // an action to add the new todo to the store
        // dispatch({type:'SET_TODOS',payload:res.data});
        dispatch(setTodos(res.data));
        dispatch({
          type: 'CREATE_TODO',
          payload: newTodo,
        });

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className = 'App'>
        <h1>App</h1>
      </div>
      
      <div className = 'Home'>
      <input type="text" id="myInput" />
      <button onClick = {addNew}>ADD</button>
      </div>
     
      {state.todos.map((elem,i)=>
        <div key = {i} className = 'Home'>
          <p>TITLE: {elem.title}</p>
          <p>IS_C: {elem.is_c? 'YES' : 'NO'}</p>
        </div>
      )}

      
    </>
  );
};

export default App;

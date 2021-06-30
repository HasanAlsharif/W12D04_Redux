// create the initial state for the reducer
const initialState = {
 todos : [],
}

/**/
// create the `todos` reducer (manager) (the name of the manager todos here has nothing to to with the state)
// we have destructed the action to get the type and payload below
// usually the default value of state is initial state 
// assume payload to be an object with the stuff inside

const todos = (state = initialState , {type,payload}/*or (action)*/) => {
    switch(type /*or (action.type)*/) {
    
    /*make these data that i gave you in the payload as new value of the todos*/
    case 'SET_TODOS': 
    /*copy paste whats inside the initial state here*/
        return { todos : [...payload]} /* or +payload+ but better make a copy of it and put it */ 
    

    case 'CREATE_TODOS':
        // payload: {_id:7, title:'asdasdasdas',is_c: false}
        // todos comes from the initialstate object which is in out function (state = initialState)
        return { todos : [...state.todos , payload]}

        // if payload: 'asdasdasdas'
        // return { todos: [...todos, {title:payload,is_c: false } ] }

    case 'UPDATE_TODOS':
    // payload: todo_id  -- i dont know seems like payload can be eachtime different
    // payload: is the todo objects
    return { todos : state.todos.map((elem,i)=>{
        if (elem._id === payload._id){
            return payload
        }
        return elem 

    }) }

     // payload: deletedTodoObject
    case 'DELETE_TODOS':
        return { todos : state.todos.filter((elem,i)=>elem.id !== payload.id),
           }





    default /*if no type or error or anything else*/ : 
    return state

    }
}

// export the reducer
export default todos

// ACTIONS
export const setTodos = (todos) => {
    return {
        type : 'SET_TODOS',
        payload : todos
    }
}

export const createTodo = (todo) => {
    return {
        type : 'CREATE_TODOS',
        payload : todo
    }
}


export const updateTodo = (todo_id) => {
    return {
        type : 'UPDATE_TODOS',
        payload : todo
    }
}

export const deleteTodo = (deletedtodo) => {
    return {
        type : 'DELETE_TODOS',
        payload : deletedtodo
    }
}
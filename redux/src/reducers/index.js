// this is the store 

import { createStore , combineReducers } from 'redux'

// import all the reducers 
import todos from './todos'
// ex
/* 
import login from './login'
import reg from './reg'
.... etc */

const reducers = combineReducers ({todos , /*login , reg ..etc*/ })

// please ↑ make a store for these reducers ↑ (todos login reg .. etc) to share it every where then export it
const store = createStore(reducers)


// export the store
export default store

// Now Use this store in the index of the main component (APP)
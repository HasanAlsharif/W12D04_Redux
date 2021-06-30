// This file is connected to index html (its like you make append , what ever pararaph you add it will appear in the Html)

import React from 'react';
// const React=require('react')
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';


//redux
import { Provider } from 'react-redux';
import store from './reducers/index';


import App from './App';
import { render } from '@testing-library/react';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// for router stuff , this is inside the render :
// <React.StrictMode>
//     <Router>
//       <Route path="/" component={App} />
//     </Router>
//   </React.StrictMode>,

// now we want to dispatch from the main component (APP)
import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App' ;
import { createStore , applyMiddleware } from 'redux' ;
import rootReducers from './reducers' ;
import thunk from 'redux-thunk' ;
import { Provider } from 'react-redux' ;



const logger = ({dispatch , getState} ) => (next) => (action) => {
  if(typeof action != 'function')
  {
      console.log("Action_Type : " , action.type) ;
  }  
  next(action) ;

}



const store = createStore(rootReducers , applyMiddleware(logger , thunk))  ;


ReactDOM.render(
  
  <React.StrictMode>


   <Provider store={store}>
    <App />
    </Provider>


  </React.StrictMode>,
  document.getElementById('root')
);


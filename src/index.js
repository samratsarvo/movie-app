import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App'
import configureStore from './store/configureStore'

const store  = configureStore()
//console.log(store.getState())

 store.subscribe(()=>{ 
   //console.log("store updated" , store.getState())
   //localStorage.setItem('random_values' , JSON.stringify(store.getState()))
  //  localStorage.setItem('movieList' , JSON.stringify(store.getState()))
 })

ReactDOM.render(<Provider store ={store} >
  <App/>
</Provider>, document.getElementById('root'))
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'

const reducers = (state,action)=>{
	switch(action.type){
		case "lishi":{
			var news = Object.assign({},state)
			news.list.push(state.payload)
			return news
		}
		default:{
			return state
		}
	}
}
const store = createStore(reducers,{list:[]})

function renderpage (){
  	ReactDOM.render(<App store={store}/>,document.getElementById('root'))
   }
   renderpage()
store.subscribe(renderpage)
registerServiceWorker();

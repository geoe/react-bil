import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import { Provider } from 'react-redux'

const reducers = (state,action)=>{
	switch(action.type){
		case "shijijias":{
			var news = Object.assign({},state)
			if(news.list.length>=1){
				for(var i=0 ;i<news.list.length;i++){
					if(news.list[i]==action.payload){
						return news
					}else{
						if(i==news.list.length-1){
							news.list.push(action.payload)
							return news
						}
					}
				
			}
			}else{
				news.list.push(action.payload)
				return news
			}
			}
		default:{
			return state
		}
	}
}
const store = createStore(reducers,{list:[]})

function renderpage (){
  	ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))
   }
   renderpage()
store.subscribe(renderpage)
registerServiceWorker();

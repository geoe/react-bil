import React, {Component} from 'react'
import '../css/head.css';
import '../css/font/iconfont.css'
import Router from '../router'
import {
  BrowserRouter as Routes,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom'
class Head extends Component{
	render(){
		return (
		<div>	
			<div id='Header'>
				<div className='headertp'>
					<div className='logos'>
						<a className='logo'   href=''>
							<img src={require('../img/logo.png')} />
						</a>
					</div>
					<div className='headtr'>
						<NavLink className='search' to='/search/14'>
							<i className="iconfont icon-sousuo"></i>
						</NavLink>
						<a className='kongjian' href=''>
						</a>
						<a className='kehuduan' href=''>
							<p>下载客户端</p>
						</a>
					</div>
				</div>
				</div>	
			</div>	
			)
	}
}

export default Head;
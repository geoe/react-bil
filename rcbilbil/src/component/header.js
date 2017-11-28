import React, {Component} from 'react'
import '../css/head.css';
import '../css/font/iconfont.css'
import Router from '../router'

class Head extends Component{
	render(){
		return (
			<div id='Header'>
				<div className='headertp'>
					<div className='logos'>
						<a className='logo'   href=''>
							<img src={require('../img/logo.png')} />
						</a>
					</div>
					<div className='headtr'>
						<a className='search'  href=''>
							<i className="iconfont icon-sousuo"></i>
						</a>
						<a className='kongjian' href=''>
						</a>
						<a className='kehuduan' href=''>
							<p>下载客户端</p>
						</a>
					</div>
				</div>
				<Router/>
			</div>	
			)
	}
}

export default Head;
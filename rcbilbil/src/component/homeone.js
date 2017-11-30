import React, {Component} from 'react'
import { Carousel } from 'antd';
import '../css/homeone.css'
import '../css/antd.css'
import Remen from './remen'
import Qita from './reqita'
import Footer from './footer'
import Lishi from './lishi'
import axios from 'axios'
import { BackTop } from 'antd';

import {
  BrowserRouter as Routes,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom'
class Homeone extends Component{
	constructor(){
		super();
		this.state = {
			lunbolist:[]
		}
	}

	componentDidMount(){
		var that = this;
		axios.get('/json/lunbo.json')
		.then(function(res) {
			that.setState({
				lunbolist:res.data.data
			})
		})
	}
	render(){
		return (
			<div id='homeone'>
	 			<Carousel autoplay>
				{
					this.state.lunbolist.map((item,index)=>{
						return(
						<NavLink to={"/show/"+item.id} key={item.id}>
							<div ><img src={item.pic}/></div>
						</NavLink>	
						)
					})
 				}
 				</Carousel>
 				<Remen/>
 				<Qita/>
 				 <Lishi listsh={this.props.lists}/>
 				<Footer/>
 				<div id='totop'>
    				<BackTop>
      				<div className="ant-back-top-inner">UP</div>
    				</BackTop>
 				 </div>
			</div>
			)
	}
}

export default Homeone;
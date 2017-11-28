import React, {Component} from 'react'
import { Carousel } from 'antd';
import '../css/homeone.css'
import '../css/antd.css'
import Remen from './remen'
import Qita from './reqita'
import Footer from './footer'
import axios from 'axios'
import { BackTop } from 'antd';
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
							<div key={item.id}><img src={item.pic}/></div>
						)
					})
 				}
 				</Carousel>
 				<Remen/>
 				<Qita/>
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
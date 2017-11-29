import React, {Component} from 'react'
import '../css/remen.css'
import '../css/font/remen/iconfont.css'
import '../css/font/you/iconfont.css'
import '../css/font/paihang/iconfont.css'
import '../css/font/liuanbo/iconfont.css'
import {
  BrowserRouter as Routes,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom'
import axios from 'axios'
class Remen extends Component{
	constructor(){
		super();
		this.state = {
			remen:[]
		}
	}
	componentDidMount(){
		var that = this;
		axios.get('/json/remen.json')
		.then(function(res) {
			that.setState({
				remen:res.data.data.slice(4)
			})
		})
	}
	
	render(){
		return (
			<div className='remen'>
			<NavLink to="/channel/118" className='biaoti'>	
	 			<div className='titleremen'>
	 				<h2 className='relogo'><i className="iconfont icon-remen"></i><span>热门推荐</span></h2>
	 				<div className='relogo'><i className="iconfont icon-billboard"></i><span>排行榜</span><i className="iconfont icon-you"></i></div>
	 			</div>
	 		</NavLink>	
	 			<div className='remencont'>
	 				{
	 					this.state.remen.map((item,index)=>{
	 						return(
	 						<NavLink to={"/show/"+item.aid} key={item.aid} className='nava'>	
	 							<div className='remcontdiv' >
	 							<div className='remimg'>
	 								<img src={item.pic}/>
	 								<div className='bof'>
	 									<div>
	 										<i class="iconfont icon-bofang"></i>
	 										<span>{item.play}</span>
	 									</div>
	 									<div>
	 										<i class="iconfont icon-liuyan"></i>
	 										<span>{item.video_review}</span>
	 									</div>
	 								</div>
	 							</div>
	 							<div className='title'>{item.title}</div>	
	 							</div>
	 						</NavLink>	
	 						)
	 					})
					}
				</div>	
			</div>	
		)
}
}
export default Remen;
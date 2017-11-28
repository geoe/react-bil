import React, {Component} from 'react'
import '../css/remen.css'
import '../css/qita.css'
import '../css/font/remen/iconfont.css'
import '../css/font/you/iconfont.css'
import '../css/font/paihang/iconfont.css'
import '../css/font/liuanbo/iconfont.css'

import axios from 'axios'
class Qita extends Component{
	constructor(){
		super();
		this.state = {
			donghua:[],
			fanju:[],
			guochuang:[],
			music:[]

		}
	}
	componentDidMount(){
		var that = this;
		axios.get('/json/donghua.json')
		.then(function(res) {
			that.setState({
				donghua:res.data.data.archives.slice(1)
			})
		})
		axios.get('/json/fanju.json')
		.then(function(res) {
			that.setState({
				fanju:res.data.data.archives.slice(1)
			})
		})
		axios.get('/json/guochuang.json')
		.then(function(res) {
			that.setState({
				guochuang:res.data.data.archives.slice(1)
			})
		})
		axios.get('/json/music.json')
		.then(function(res) {
			console.log(res);
			that.setState({
				music:res.data.data.archives.slice(1)
			})
		})
	}
	
	render(){
		return (
		<div className='qita'>	
			<div className='remen'>
	 			<div className='titleremen'>
	 				<h2 className='relogo'><i className="iconfont icon-remen"></i><span>动画</span></h2>
	 				<div className='relogo'><i className="iconfont icon-billboard"></i><span>查看更多</span><i className="iconfont icon-you"></i></div>
	 			</div>
	 			<div className='remencont'>
	 				{
	 					this.state.donghua.map((item,index)=>{
	 						return(
	 							<div className='remcontdiv' key={item.aid}>
	 							<div className='remimg'>
	 								<img src={item.pic}/>
	 								<div className='bof'>
	 									<div>
	 										<i class="iconfont icon-bofang"></i>
	 										<span>{item.stat.view}</span>
	 									</div>
	 									<div>
	 										<i class="iconfont icon-liuyan"></i>
	 										<span>{item.stat.danmaku}</span>
	 									</div>
	 								</div>
	 							</div>
	 							<div className='title'>{item.title}</div>	
	 							</div>
	 						)
	 					})
					}
				</div>	
			</div>	
			<div className='remen'>
	 			<div className='titleremen'>
	 				<h2 className='relogo'><i className="iconfont icon-remen"></i><span>番剧</span></h2>
	 				<div className='relogo'><i className="iconfont icon-billboard"></i><span>查看更多</span><i className="iconfont icon-you"></i></div>
	 			</div>
	 			<div className='remencont'>
	 				{
	 					this.state.fanju.map((item,index)=>{
	 						return(
	 							<div className='remcontdiv' key={item.aid}>
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
	 						)
	 					})
					}
				</div>	
			</div>
			<div className='remen'>
	 			<div className='titleremen'>
	 				<h2 className='relogo'><i className="iconfont icon-remen"></i><span>国创</span></h2>
	 				<div className='relogo'><i className="iconfont icon-billboard"></i><span>查看更多</span><i className="iconfont icon-you"></i></div>
	 			</div>
	 			<div className='remencont'>
	 				{
	 					this.state.guochuang.map((item,index)=>{
	 						return(
	 							<div className='remcontdiv' key={item.aid}>
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
	 						)
	 					})
					}
				</div>	
			</div>
			<div className='remen'>
	 			<div className='titleremen'>
	 				<h2 className='relogo'><i className="iconfont icon-remen"></i><span>音乐</span></h2>
	 				<div className='relogo'><i className="iconfont icon-billboard"></i><span>查看更多</span><i className="iconfont icon-you"></i></div>
	 			</div>
	 			<div className='remencont'>
	 				{
	 					this.state.music.map((item,index)=>{
	 						return(
	 							<div className='remcontdiv' key={item.aid}>
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
	 						)
	 					})
					}
				</div>	
			</div>		
		</div>

		)
}
}
export default Qita;
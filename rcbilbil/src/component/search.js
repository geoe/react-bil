import React,{Component} from 'react'
import '../css/font/sous/iconfont.css'
import '../css/search.css'
import { Input } from 'antd';
	
import axios from 'axios'
const Search = Input.Search;
class Searchs extends Component{
	constructor(){
		super();
		this.state = {
			allsears:[],
			sous:[]
		}


	}

	componentDidMount(){
		var that = this;
		axios.get('/json/allsear.json')
		.then(function (res) {
			that.setState({
				allsears:res.data.list.slice(0,7)
			})
		})

	}
	searjson(keyva){
		var that = this;
				var neir = []
				axios.get('../json/nisear.json')
				.then(function(res){
					for(var i in res.data.data.archives){
						if( res.data.data.archives[i].desc.indexOf(keyva) >0 || res.data.data.archives[i].aid == keyva){
								neir.push(res.data.data.archives[i])
						}
						if(i == res.data.data.archives.length-1){
							that.setState({
								sous:neir
							})
						}
					}
				})
	}
	handleKeyDown(event){
			if(event.keyCode == 13){
				var keyva = event.target.value
				this.searjson(keyva);
			}
		}
		dianji(data){
			this.searjson(data);
		}
	render(){
		if(this.state.sous.length==0){
			 var lisz = <li className='meiy'>没有内容</li>
		}else{
			var lisz = this.state.sous.map((item,index)=>{
				return(
					<li className ='youa' key={item.aid}>
					<a href={"/show/"+item.aid}>
						<img src={item.pic}/>
						<h2>{item.title}</h2>
					</a>	
					</li>
				)
			})

			}
		return(
		<div className='searchk'>
			<div id='Search'>
				<div className='iptk'>
				 	<i class="iconfont icon-sousuo"></i>
					 <input type="search"   placeholder='搜索视频、番剧、UP主或AV号' ref='ipt'  onKeyDown={this.handleKeyDown.bind(this)}/>
				</div>
				<a href='/home'>取消</a>
			</div>
		<div className='zhentui'>	
			<div className='allh'>大家都在搜</div>
			<div className='allsear'>
				{	
					this.state.allsears.map((item,index)=>{
						return(
							<div key={index}  onClick={()=>{this.dianji(item.keyword)}}>
								{item.keyword}
							</div>
							)
					})
				}
			</div>
		</div>
		<div className='jieguo'>
			<ul>
				{lisz}
			</ul>
		</div>	
		</div>		
		)

	}

}

export default Searchs
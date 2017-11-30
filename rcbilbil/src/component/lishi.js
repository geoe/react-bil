import React,{Component} from 'react'
import '../css/lishi.css'
class  Lishi extends Component{
	constructor(){
		super();
		this.lishi = this.lishi.bind(this);
	}
	lishi(){
		this.refs.zuijink.addEventListener('touchmove',function (e) {
			e.preventDefault();
		},false)
		this.refs.zuijink.style.right=0;
	}
	qxlish(){
		this.refs.zuijink.style.right=-200+'%';
	}
	ComponentDidMount(){
		
	}
	render(){
		if(this.props.listsh.list.length!=0){
			var lishssz= this.props.listsh.list.map((item,index)=>{
							return(
								<li key={index} className='jilu'>{item}</li>
								)
						})
		}else{
			var lishssz= <li className='meiys'>没有看过哦</li>
		}
		return(
		<div className='lishi' ref='lis'>
			<div className='lishix' onClick={this.lishi}>
				最近观看	
			</div>
			<div className='zuijinguank' ref='zuijink'>
				<div className='zhezhao' onClick={this.qxlish.bind(this)}></div> 
				<div className='zuijin' >
					<h4>最近观看</h4>
				<ul>
					{lishssz}
				</ul>
				</div>
				
			</div>
		</div>		
			)
	}

}

export default Lishi